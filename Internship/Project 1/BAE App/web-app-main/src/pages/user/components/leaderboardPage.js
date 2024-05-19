import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

import { fetchLeaderboard } from '~/api/user';
import { Box, Flex, RippleLoader } from '~/components/atoms';
import PinkButtonWithShadow from '~/components/atoms/Button/PinkButtonWithShadow';
import { useAppContext } from '~/contexts/app';
import theme from '~/styles/theme';
import { calculateSocialPoints } from '~/utils';

import UserPageHeader from './userPageHeader';

const TableWidths = {
  Column1: '15%',
  Column2: '45%',
  Column3: '25%',
  Column4: '15%',
};

const LeaderboardPageView = () => {
  const { user } = useAppContext();
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
      const data = await fetchLeaderboard({ page: input?.pageParam });
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
  const userRank = data?.pages?.length ? data?.pages[0].userRank : '-';

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
                    padding: '12px 20px',
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
    <div
      className="test123"
      style={{
        position: 'relative',
        width: '350px',
        height: '75vh',
        border: '8px solid #5c3ab9',
        borderRadius: '24px',
        overflowY: 'auto',
        backgroundColor: '#3D2481',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <InfiniteScroll
        hasMore={hasNextPage}
        useWindow={false}
        loadMore={() => {
          if (!isLoading && hasNextPage) {
            fetchNextPage();
          }
        }}
      >
        <UserPageHeader
          heartCount={user.totalBaePoints}
          diamondCount={calculateSocialPoints(
            user.userAuth.farmData?.totalTweets,
            user.followersCount
          )}
        />
        <div
          style={{
            fontFamily: theme.fontFamilies.rubik,
            color: '#fff',
            fontWeight: 600,
            fontSize: '2rem',
            width: '100%',
            padding: '8px 20px',
            lineHeight: '2rem',
            marginBottom: '20px',
          }}
        >
          Leaderboard
        </div>
        <div
          style={{
            fontFamily: theme.fontFamilies.rubik,
            color: 'rgba(255,255,255,0.4)',
            fontWeight: 600,
            fontSize: '14px',
            width: '100%',
            padding: '8px 20px',
            lineHeight: '16px',
            marginBottom: '20px',
          }}
        >
          Invite friends to rank up. The higher rank you are, the more Bae
          Points you earn.
        </div>
        <div
          style={{
            fontSize: '14px',
            display: 'flex',
            width: '100%',
            padding: '0px 20px',
          }}
        >
          <div style={{ color: '#fff', width: TableWidths.Column1 }}>Rank</div>
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
      {!!allUsers.length && (
        <div
          style={{
            position: 'sticky',
            fontSize: '14px',
            bottom: 0,
            display: 'flex',
            width: '100%',
            padding: '4px 20px',
            backgroundColor: '#D00272',
          }}
        >
          <div
            style={{
              color: '#fff',
              width: TableWidths.Column1,
              paddingLeft: '4px',
            }}
          >
            {userRank}
          </div>
          <div
            style={{
              color: '#fff',
              width: TableWidths.Column2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            You
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
            {user.totalBaePoints}
          </div>
          <div
            style={{
              color: '#fff',
              width: TableWidths.Column4,
              textAlign: 'right',
            }}
          >
            {user.invitees.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardPageView;
