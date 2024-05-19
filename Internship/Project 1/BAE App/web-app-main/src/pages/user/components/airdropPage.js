import { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { keyframes } from 'styled-components';
// import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { fetchUserTwitterCreatedPostCount } from '~/api/userTwitter';
import { Box, Flex } from '~/components/atoms';
import PinkButtonWithShadow from '~/components/atoms/Button/PinkButtonWithShadow';
import { useAppContext } from '~/contexts/app';
import theme from '~/styles/theme';
import { calculateSocialPoints } from '~/utils';

// import { TabSwitcher } from './sections/tabSwitcher';
import UserPageHeader from './userPageHeader';

const AirdropPageView = ({ fetchUserRequestStates }) => {
  const { user, setUser } = useAppContext();
  const router = useRouter();
  // const [selectedTab, setSelectedTab] = useState(0);

  const { data, isLoading, refetch } = useQuery({
    queryKey: 'UserTwitterAuth',
    queryFn: async () => {
      const data = await fetchUserTwitterCreatedPostCount();
      return data.data;
    },
  });

  useEffect(() => {
    if (!isEmpty(data?.farmData)) {
      setUser((prev) => ({
        ...prev,
        userAuth: { ...prev.userAuth, farmData: data.farmData },
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (
    !user &&
    (fetchUserRequestStates.fulfilled || fetchUserRequestStates.rejected)
  ) {
    router.replace('/join');
  }

  return (
    <div
      style={{
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
        paddingBottom: '8px',
      }}
    >
      <UserPageHeader
        heartCount={user.totalPoint}
        diamondCount={calculateSocialPoints(
          user.userAuth.farmData?.totalTweets,
          user.followersCount
        )}
      />

      {/* <TabSwitcher selectedTab={selectedTab} onTabUpdate={setSelectedTab} /> */}

      <Box as="img" src="/assets/images/diamond.svg" />

      <Flex
        style={{ alignItems: 'center', justifyContent: 'center', gap: '12px' }}
      >
        <Box
          as="div"
          style={{
            fontWeight: 600,
            fontFamily: theme.fontFamilies.rubik,
            color: '#fff',
            fontSize: '24px',
            letterSpacing: '2px',
          }}
        >
          {calculateSocialPoints(
            data?.farmData?.totalTweets,
            user.followersCount
          )}
        </Box>

        <button
          style={{ backgroundColor: 'transparent', border: 'none' }}
          onClick={refetch}
        >
          <LoadingButton
            as="img"
            src="/assets/images/reload.png"
            animate={isLoading}
          />
        </button>
      </Flex>

      <PinkButtonWithShadow
        styles={{ margin: '12px 0' }}
        label="Claim Social Points"
        onClick={refetch}
      />

      <Box
        style={{
          color: '#9F8CD3',
          fontSize: '12px',
          fontFamily: theme.fontFamilies.rubik,
        }}
      >
        This will convert your social coins to{' '}
        <span style={{ color: '#FFD800' }}>BAE Token.</span>
      </Box>

      <Box
        as="div"
        style={{
          margin: '16px 0',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          height: '1px',
          width: '100%',
        }}
      />

      <Box style={{ width: '100%', padding: '0px 20px' }}>
        <TextRubik
          style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
            marginTop: 20,
          }}
        >
          More Info
        </TextRubik>
        <TextRubik
          style={{ fontSize: '16px', color: '#fff', marginTop: '4px' }}
        >
          Multiplier Slab
        </TextRubik>

        <Flex
          style={{ flexDirection: 'column', gap: '12px', marginTop: '8px' }}
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <TextRubik style={{ fontSize: '14px', color: '#fff' }}>
              Upto 10k Followers
            </TextRubik>
            <TextRubik
              style={{
                fontSize: '14px',
                color: '#FFD800',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#5134A2',
              }}
            >
              1x Multiplier
            </TextRubik>
          </Box>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <TextRubik style={{ fontSize: '14px', color: '#fff' }}>
              10k - 25k Followers
            </TextRubik>
            <TextRubik
              style={{
                fontSize: '14px',
                color: '#FFD800',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#5134A2',
              }}
            >
              2x Multiplier
            </TextRubik>
          </Box>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <TextRubik style={{ fontSize: '14px', color: '#fff' }}>
              25k - 50k Followers
            </TextRubik>
            <TextRubik
              style={{
                fontSize: '14px',
                color: '#FFD800',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#5134A2',
              }}
            >
              5x Multiplier
            </TextRubik>
          </Box>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <TextRubik style={{ fontSize: '14px', color: '#fff' }}>
              50k - 100k Followers
            </TextRubik>
            <TextRubik
              style={{
                fontSize: '14px',
                color: '#FFD800',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#5134A2',
              }}
            >
              8x Multiplier
            </TextRubik>
          </Box>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <TextRubik style={{ fontSize: '14px', color: '#fff' }}>
              More than 100k Followers
            </TextRubik>
            <TextRubik
              style={{
                fontSize: '14px',
                color: '#FFD800',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#5134A2',
              }}
            >
              10x Multiplier
            </TextRubik>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AirdropPageView;

const TextRubik = styled.div`
  font-family: 'Rubik';
`;

const rotateAnim = keyframes`
 0% { transform: rotate(0deg) }
 50% { transform: rotate(180deg) }
 100% { transform: scale(360deg) }
`;

const LoadingButton = styled.img`
  width: 25px;
  height: 25px;
  transition: ${(props) => (props.animate ? `all 2s ease-in-out;` : 'none')};
  animation-name: ${(props) => (props.animate ? rotateAnim : '')};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
`;
