import Link from 'next/link';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAccount } from 'wagmi';

import { authApi } from '~/api';
import { extractResponseError } from '~/api/utils';
import { BoxConditionalDisplay, Flex, RippleLoader } from '~/components/atoms';
import { useAppContext } from '~/contexts/app';
import { useIsDesktopMedia, useSearchParams, useToasts } from '~/hooks';
import theme from '~/styles/theme';
import PinkButtonWithShadow from '~/components/atoms/Button/PinkButtonWithShadow';

import heartNoTransparentBgImg from '~public/assets/images/Heart-no-transparent-bg.png';
import RightArrowIconComponent from '~public/assets/images/right-arrow.svg';
import WalletLargeIconComponent from '~public/assets/images/wallet-large.svg';
import WalletIconComponent from '~public/assets/images/wallet.svg';
import xImg from '~public/assets/images/x.jpg';

const WalletLargeIcon = styled(WalletLargeIconComponent)`
  margin-top: 20px;
`;
const WalletIcon = styled(WalletIconComponent)`
  width: 24px;
  height: 24px;
`;
const RightArrowIcon = styled(RightArrowIconComponent)`
  width: 24px;
  height: 24px;
`;

const JoinPageView = ({ fetchUserRequestStates }) => {
  const { open } = useWeb3Modal();
  const { address: walletAddress, isConnecting: isWalletConnecting } =
    useAccount();
  const searchParams = useSearchParams();
  const referralId = searchParams.get('referralId');
  const { user, setUser } = useAppContext();
  const { errorToast } = useToasts();
  const router = useRouter();
  const isDesktopMedia = useIsDesktopMedia();

  const handleOnConnectWalletClick = async () => {
    try {
      open();
    } catch (error) {
      errorToast('Failed to connect to wallet');
    }
  };

  const addWalletAddress = async () => {
    try {
      const response = await authApi.addWalletAddress({ walletAddress });
      const userData = response.data;
      setUser(userData);
      router.replace('/user');
    } catch (error) {
      const { errorMessage } = extractResponseError(error);
      errorToast(errorMessage || 'Something went wrong!');
    }
  };

  const enableConnectWalletStage = !isEmpty(user);
  const isWalletConnected = Boolean(walletAddress);

  useEffect(() => {
    if (enableConnectWalletStage && isWalletConnected) {
      if (!user.walletAddress) {
        addWalletAddress();
      } else {
        setTimeout(() => {
          router.replace('/user');
        }, 2000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWalletConnected, enableConnectWalletStage]);

  if (enableConnectWalletStage && isWalletConnected) {
    return (
      <div
        style={{
          width: '350px',
          height: '85vh',
          backgroundColor: '#3D2481',
          border: '8px solid #5c3ab9',
          borderRadius: '24px',
          overflowY: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <WalletLargeIcon />

        <div
          style={{
            fontFamily: theme.fontFamilies.pressStart2p,
            color: '#fff',
            fontSize: '2rem',
            margin: '0px 32px',
            textAlign: 'center',
            lineHeight: '3rem',
            marginBottom: '4    0px',
          }}
        >
          Wallet <br />
          Connected
        </div>

        <div style={{ fontFamily: theme.fontFamilies.rubik, color: '#fff' }}>
          Redirecting you in few seconds
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '350px',
        height: '85vh',
        backgroundColor: '#3D2481',
        border: '8px solid #5c3ab9',
        borderRadius: '24px',
        overflowY: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img
        width="60%"
        style={{ marginTop: '20px' }}
        src={heartNoTransparentBgImg.src}
      />

      <div
        style={{
          fontFamily: theme.fontFamilies.pressStart2p,
          color: '#fff',
          fontSize: '2rem',
          margin: '0px 32px',
          textAlign: 'center',
          lineHeight: '3rem',
          marginBottom: '20px',
        }}
      >
        {!user ? (
          <>
            Create
            <br />
            Account
          </>
        ) : (
          <>
            Welcome
            <br />
            <span
              style={{
                width: '280px',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: '1rem',
              }}
            >
              @{user.screenName}
            </span>
          </>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          paddingBottom: '60px',
        }}
      >
        <Flex
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            padding: '0 24px',
            ...(user ? {} : { cursor: 'pointer' }),
          }}
          as={!user ? Link : undefined}
          href={
            !user
              ? referralId
                ? `/api/auth/twitter?referralId=${decodeURIComponent(
                    referralId
                  )}`
                : `/api/auth/twitter`
              : undefined
          }
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '60px',
                height: '60px',
                backgroundColor: '#5C3BB8',
                borderRadius: '100px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img src={xImg.src} width="20px" height="20px" />
            </div>
            <span
              style={{ color: '#fff', fontFamily: theme.fontFamilies.rubik }}
            >
              Connect your
              <br /> X account
            </span>
          </div>
          <div style={{ position: 'relative' }}>
            {user ? (
              <div
                style={{
                  width: '80px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  backgroundColor: '#FFD15B',
                  borderRadius: '4px',
                  padding: '4px',
                }}
              >
                @{user.screenName}
                {/* <Flex alignItems="center">
                  <Flex>
                    <Desc ml="12px">Connect With</Desc>
                    <XImg src={xImg.src} alt="twitter" width={25} height={25} />
                  </Flex>
                </Flex>
                <Flex ml="24px" flexDirection="column" alignItems="center">
                  <TickIcon />
                  <HandlesText mt="4px">@{user.screenName}</HandlesText>
                </Flex> */}
              </div>
            ) : (
              <>
                {fetchUserRequestStates.pending ? (
                  <RippleLoader size={30} />
                ) : (
                  <RightArrowIcon />
                )}
              </>
            )}
          </div>
        </Flex>

        <div
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            height: '1px',
            width: '90%',
            margin: '0 20px',
          }}
        />

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            padding: '0 24px',
            ...(enableConnectWalletStage ? { cursor: 'pointer' } : {}),
          }}
          onClick={() => {
            if (enableConnectWalletStage) {
              handleOnConnectWalletClick();
            }
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '60px',
                height: '60px',
                backgroundColor: '#5C3BB8',
                borderRadius: '100px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <WalletIcon />
            </div>
            <BoxConditionalDisplay showOnDesktop>
              <span
                style={{ color: '#fff', fontFamily: theme.fontFamilies.rubik }}
              >
                Connect your
                <br /> wallet
              </span>
            </BoxConditionalDisplay>
            <BoxConditionalDisplay showOnTablet showOnMobile>
              <span
                style={{ color: '#fff', fontFamily: theme.fontFamilies.rubik }}
              >
                Wallet Connection
                <br />
                available on desktop
              </span>
            </BoxConditionalDisplay>
          </div>
          <div>
            {isDesktopMedia && enableConnectWalletStage && (
              <>
                {isWalletConnecting ? (
                  <RippleLoader size={30} />
                ) : (
                  <RightArrowIcon />
                )}
              </>
            )}
          </div>
        </div>
        {!isWalletConnected && !isDesktopMedia ? (
          <PinkButtonWithShadow as={Link} href="/user" label="Next" />
        ) : null}
      </div>
    </div>
  );
};

export default JoinPageView;
