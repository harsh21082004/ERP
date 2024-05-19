import { useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

import { mediaQueryMobileOrTablet } from '~/styles/mixins';
import theme from '~/styles/theme';
import PinkButtonWithShadow from '~/components/atoms/Button/PinkButtonWithShadow';
import {
  Box,
  BoxConditionalDisplay,
  Flex,
  RippleLoader,
} from '~/components/atoms';
import { fetchPublicLeaderboard } from '~/api/user';

const TableWidths = {
  Column1: '15%',
  Column2: '45%',
  Column3: '25%',
  Column4: '15%',
};

export const LeaderboardSection = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: 'leaderboardData',
    queryFn: async (input) => {
      const data = await fetchPublicLeaderboard({ page: input?.pageParam });
      return data.data;
    },
    retry: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage?.metadata.hasMore) {
        return lastPage?.metadata.nextPage;
      }
      return undefined;
    },
  });

  const allUsers = data?.pages ? data.pages.map((d) => d.users).flat() : [];

  let nodeToRender = null;
  if (allUsers.length) {
    nodeToRender = (
      <>
        <Box width="100%">
          {allUsers.map((userObj, idx) => {
            return (
              <>
                <div
                  style={{
                    fontSize: '14px',
                    display: 'flex',
                    width: '100%',
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div
                    style={{
                      color: '#fff',
                      width: TableWidths.Column1,
                      paddingLeft: '4px',
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div
                    style={{
                      color: '#fff',
                      width: TableWidths.Column2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={userObj.screenName}
                  >
                    {userObj.screenName}
                  </div>
                  <div
                    style={{
                      color: '#fff',
                      width: TableWidths.Column3,
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {userObj.totalBaePoints}
                  </div>
                  <div
                    style={{
                      color: '#fff',
                      width: TableWidths.Column4,
                      textAlign: 'right',
                    }}
                  >
                    {userObj.invitees.length}
                  </div>
                </div>
              </>
            );
          })}
          {isFetchingNextPage && (
            <Flex
              style={{
                width: '100%',
                display: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <RippleLoader />
            </Flex>
          )}
        </Box>
      </>
    );
  } else if (error) {
    nodeToRender = (
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <div
          style={{
            fontFamily: theme.fontFamilies.rubik,
            color: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            width: '100%',
            padding: '8px 20px',
            lineHeight: '1.5rem',
            marginBottom: '20px',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          Oops! An error occurred
        </div>
        <PinkButtonWithShadow onClick={refetch} label="Retry" />
      </Flex>
    );
  } else if (isLoading) {
    nodeToRender = (
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ margin: '20px 0' }}
      >
        <RippleLoader />
      </Flex>
    );
  }

  return (
    <>
      <div
        style={{
          color: '#fff',
          fontFamily: theme.fontFamilies.rubik,
          letterSpacing: '4px',
          backgroundColor: '#3D2481',
          borderRadius: '32px',
          cursor: 'pointer',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => setVisibleSection((p) => !p)}
      >
        <img
          src="/assets/images/leaderboard.svg"
          style={{ marginRight: '8px' }}
          width="32px"
          height="32px"
        />
        Leaderboard
      </div>
      {visibleSection && (
        <div
          style={{
            backdropFilter: 'blur(5px)',
            position: 'fixed',
            inset: 0,
            zIndex: 99,
          }}
        >
          <StyledLeaderboardContainer>
            <InfiniteScroll
              hasMore={hasNextPage}
              useWindow={false}
              loadMore={() => {
                if (!isLoading && hasNextPage) {
                  fetchNextPage();
                }
              }}
            >
              <BoxConditionalDisplay showOnDesktop showOnTablet>
                <div
                  style={{
                    color: '#fff',
                    fontSize: '32px',
                    fontWeight: 900,
                    fontFamily: theme.fontFamilies.rubik,
                    lineHeight: '46px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => setVisibleSection((p) => !p)}
                >
                  <img
                    src="/assets/images/leaderboard.svg"
                    style={{ marginRight: '8px' }}
                    width="32px"
                    height="32px"
                  />
                  Leaderboard
                </div>
                <div
                  style={{
                    paddingRight: '15%',
                    fontSize: '18px',
                    margin: '20px 0',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 600,
                    fontFamily: theme.fontFamilies.rubik,
                  }}
                >
                  Invite friends to rank up. The higher rank you are, the more
                  Bae Points you earn.
                </div>
              </BoxConditionalDisplay>
              <BoxConditionalDisplay showOnMobile>
                <div
                  style={{
                    color: '#fff',
                    fontSize: '20px',
                    fontWeight: 900,
                    fontFamily: theme.fontFamilies.rubik,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => setVisibleSection((p) => !p)}
                >
                  <img
                    src="/assets/images/leaderboard.svg"
                    style={{ marginRight: '8px' }}
                    width="32px"
                    height="32px"
                  />
                  Leaderboard
                </div>
                <div
                  style={{
                    paddingRight: '15%',
                    fontSize: '14px',
                    margin: '20px 0',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 600,
                    fontFamily: theme.fontFamilies.rubik,
                    lineHeight: '24px',
                  }}
                >
                  Invite friends to rank up. The higher rank you are, the more
                  Bae Points you earn.
                </div>
              </BoxConditionalDisplay>

              <div
                onClick={() => setVisibleSection(false)}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '40px',
                  top: '40px',
                  border: '2px solid #fff',
                  borderRadius: '100px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img src="/assets/images/cross.svg" />
              </div>

              <div
                style={{
                  fontSize: '14px',
                  display: 'flex',
                  width: '100%',
                  padding: '0',
                }}
              >
                <div style={{ color: '#fff', width: TableWidths.Column1 }}>
                  Rank
                </div>
                <div style={{ color: '#fff', width: TableWidths.Column2 }}>
                  Handle
                </div>
                <div style={{ color: '#fff', width: TableWidths.Column3 }}>
                  Points
                </div>
                <div
                  style={{
                    color: '#fff',
                    width: TableWidths.Column4,
                    textAlign: 'right',
                  }}
                >
                  Invites
                </div>
              </div>

              {nodeToRender}
            </InfiniteScroll>
          </StyledLeaderboardContainer>
        </div>
      )}
    </>
  );
};

const StyledLeaderboardContainer = styled('div')`
  position: absolute;
  left: 40px;
  top: 40px;
  background-color: #3d2481;
  border: 4px solid #5c3ab9;
  border-radius: 20px;
  width: 520px;
  padding: 32px;
  color: #fff;
  font-size: 1.5rem;
  max-height: 80vh;
  overflow-y: auto;
  padding-top: 36px;

  ${mediaQueryMobileOrTablet} {
    font-size: 4rem;
    line-height: 2.5rem;
    width: calc(100vw - 40px);
    left: 20px;
    right: 20px;
    max-height: 90vh;
    padding: 16px;
  }
`;
