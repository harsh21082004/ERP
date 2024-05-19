import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { sumBy } from 'lodash';
import styled from 'styled-components';

import { extractResponseError } from '~/api/utils';
import { Flex, RippleLoader } from '~/components/atoms';
import PinkButtonWithShadow from '~/components/atoms/Button/PinkButtonWithShadow';
import { useAppContext } from '~/contexts/app';
import { useRequestStates, useToasts } from '~/hooks';
import theme from '~/styles/theme';
import { calculateSocialPoints, copyToClipboard } from '~/utils';
import { userApi } from '~/api';

import UserPageHeader from './userPageHeader';

import CopyIconComponent from '~public/assets/icons/copy.svg';

const CopyIcon = styled(CopyIconComponent)`
  display: block;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

const UserPageView = () => {
  const { user } = useAppContext();
  const { successToast } = useToasts();
  const router = useRouter();

  const [fetchUserInviteesRequestStates, fetchUserInviteesRequestHandlers] =
    useRequestStates();

  const fetchUserInvitees = async () => {
    try {
      fetchUserInviteesRequestHandlers.pending();
      const response = await userApi.fetchUserInvitees();
      fetchUserInviteesRequestHandlers.fulfilled(response.data);
    } catch (error) {
      const { errorMessage } = extractResponseError(error);
      fetchUserInviteesRequestHandlers.rejected(
        errorMessage || 'Something went wrong!'
      );
    }
  };

  useEffect(() => {
    fetchUserInvitees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopyReferralLinkClick = () => {
    copyToClipboard(
      `https://baeapp.ai/join/?referralId=${encodeURIComponent(
        fetchUserInviteesRequestStates.data.referralId
      )}`
    )
      .then(() => {
        successToast(`Copied referral link! Ready to share.`);
      })
      .catch(() => {
        // do nothing
      });
  };

  let nodeToRender;

  if (fetchUserInviteesRequestStates.fulfilled) {
    const invitees = fetchUserInviteesRequestStates.data.invitees;

    nodeToRender = (
      <>
        <Flex
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '12px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <Flex style={{ flexDirection: 'column', gap: 4 }}>
            <div
              style={{
                color: '#FFD15B',
                fontSize: '14px',
                fontFamily: theme.fontFamilies.rubik,
                fontWeight: 600,
              }}
            >
              Total Invitees
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/assets/images/user-icon.svg"
                width="32px"
                height="32px"
              />
              <span
                style={{ color: '#fff', fontFamily: theme.fontFamilies.rubik }}
              >
                {invitees.length}
              </span>
            </div>
          </Flex>
          <Flex
            style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}
          >
            <div
              style={{
                color: '#FFD15B',
                fontSize: '14px',
                fontFamily: theme.fontFamilies.rubik,
                fontWeight: 600,
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              Total Baes Earned
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/assets/images/user-icon.svg"
                width="32px"
                height="32px"
              />
              <span
                style={{ color: '#fff', fontFamily: theme.fontFamilies.rubik }}
              >
                {sumBy(invitees, (item) => item.referralPoint)}
              </span>
            </div>
          </Flex>
        </Flex>
        <Flex style={{ width: '100%', flexDirection: 'column' }}>
          {/* Headings */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 20px',
            }}
          >
            <div
              style={{
                fontSize: '12px',
                color: '#fff',
                fontFamily: theme.fontFamilies.rubik,
                fontWeight: 600,
              }}
            >
              Invitee
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#fff',
                fontFamily: theme.fontFamilies.rubik,
                fontWeight: 600,
              }}
            >
              Earning
            </div>
          </div>
          {/* table Data */}
          {invitees.length ? (
            invitees.map((invitee) => (
              <div
                key={invitee.user.screenName}
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div
                    style={{
                      display: 'flex',
                      width: '28px',
                      height: '28px',
                      backgroundColor: '#5C3BB8',
                      borderRadius: '100px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <img
                      src="/assets/images/wallet.svg"
                      width="20px"
                      height="20px"
                    />
                  </div>
                  <div
                    style={{
                      color: '#fff',
                      fontFamily: theme.fontFamilies.rubik,
                      fontWeight: 600,
                    }}
                  >
                    {invitee.user.screenName}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Flex alignItems="center" style={{ gap: '4px' }}>
                    <img
                      src="/assets/images/heart-icon.svg"
                      width="28px"
                      height="28px"
                    />
                    <div
                      style={{
                        color: '#fff',
                        fontFamily: theme.fontFamilies.rubik,
                        fontWeight: 600,
                      }}
                    >
                      {invitee.referralPoint}
                    </div>
                  </Flex>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '20px',
                display: 'flex',
                color: '#fff',
                fontFamily: theme.fontFamilies.rubik,
                fontWeight: 600,
              }}
            >
              No friends invited yet
            </div>
          )}
        </Flex>
      </>
    );
  } else if (fetchUserInviteesRequestStates.rejected) {
    const { statusCode } = fetchUserInviteesRequestStates.error;
    if (statusCode === 401) {
      //Logout and redirect to login. Unauthorized
      router.replace({
        pathname: '/join',
      });
      return null;
    }
  } else {
    nodeToRender = <RippleLoader />;
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
      }}
    >
      <div
        style={{
          backgroundColor: '#3D2481',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '16px',
          background:
            'linear-gradient(180deg, rgba(61,36,129,1) 0%, rgba(82,52,163,1) 100%)',
          borderRadius: '16px',
        }}
      >
        <UserPageHeader
          heartCount={user.totalBaePoints}
          diamondCount={calculateSocialPoints(
            user.userAuth.farmData?.totalTweets,
            user.followersCount
          )}
        />
        <img width="50%" src="/assets/images/heart-artistic.png" />
        <div
          style={{
            textAlign: 'center',
            color: '#fff',
            fontFamily: theme.fontFamilies.rubik,
            fontWeight: 600,
          }}
        >
          Invite Friends to <br />
          Earn Credits & Airdrop points
        </div>
        <div
          style={{
            textAlign: 'center',
            color: '#9F8CD3',
            fontFamily: theme.fontFamilies.rubik,
            fontWeight: 600,
          }}
        >
          Receive <span style={{ color: '#FFD800' }}>1000 Bae Points</span> for
          <br />
          every active friend you invite
        </div>
        <PinkButtonWithShadow
          onClick={handleCopyReferralLinkClick}
          styles={{ marginBottom: '24px' }}
          label={
            <Flex>
              <CopyIcon />
              Copy referral link
            </Flex>
          }
        />
      </div>

      {nodeToRender}
    </div>
  );
};

export default UserPageView;
