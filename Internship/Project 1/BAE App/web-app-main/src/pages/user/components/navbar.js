import React from 'react';

import theme from '~/styles/theme';

const Navbar = ({ activeIndex = 0, onTabClick = () => {} }) => {
  return (
    <>
      <div
        style={{
          width: '350px',
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          gap: '8px',
          backgroundColor: '#3D2481',
          border: '2px solid #5C3BB8',
          borderRadius: '20px',
          marginTop: 4,
        }}
      >
        <div
          onClick={() => onTabClick(0)}
          style={{
            fontSize: '12px',
            cursor: 'pointer',
            color: '#fff',
            fontFamily: theme.fontFamilies.rubik,
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 8,
            position: 'relative',
            fontFamilies: theme.fontFamilies.rubik,
          }}
        >
          <img src="/assets/images/referral.svg" width="32px" height="32px" />
          Referrals
          {activeIndex === 0 && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -11,
                height: 4,
                borderRadius: '4px 4px 0px 0px',
                backgroundColor: 'red',
              }}
            ></div>
          )}
        </div>
        <div
          onClick={() => onTabClick(1)}
          style={{
            fontSize: '12px',
            cursor: 'pointer',
            color: '#fff',
            fontFamily: theme.fontFamilies.rubik,
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 8,
            position: 'relative',
            fontFamilies: theme.fontFamilies.rubik,
          }}
        >
          <img src="/assets/images/airdrop.svg" width="32px" height="32px" />
          Airdrop
          {activeIndex === 1 && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -11,
                height: 4,
                borderRadius: '4px 4px 0px 0px',
                backgroundColor: 'red',
              }}
            ></div>
          )}
        </div>
        <div
          onClick={() => onTabClick(2)}
          style={{
            fontSize: '12px',
            cursor: 'pointer',
            color: '#fff',
            fontFamily: theme.fontFamilies.rubik,
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 8,
            position: 'relative',
            fontFamilies: theme.fontFamilies.rubik,
          }}
        >
          <img
            src="/assets/images/leaderboard.svg"
            width="32px"
            height="32px"
          />
          Leaderboards
          {activeIndex === 2 && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -11,
                height: 4,
                borderRadius: '4px 4px 0px 0px',
                backgroundColor: 'red',
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
