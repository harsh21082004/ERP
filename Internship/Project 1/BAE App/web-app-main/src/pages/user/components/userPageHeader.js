import { Flex } from '~/components/atoms';
import theme from '~/styles/theme';

const UserPageHeader = ({ heartCount = 0, diamondCount = 0 }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      style={{
        padding: '12px 20px',
        width: '100%',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Flex alignItems="center" style={{ gap: '4px' }}>
          <img src="/assets/images/heart-icon.svg" width="28px" height="28px" />
          <div
            style={{
              color: '#fff',
              fontFamily: theme.fontFamilies.rubik,
              fontWeight: 600,
            }}
          >
            {heartCount}
          </div>
        </Flex>
        <Flex alignItems="center" style={{ gap: '4px' }}>
          <img
            src="/assets/images/diamond-icon.svg"
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
            {diamondCount}
          </div>
        </Flex>
      </div>
      <div style={{ width: '28px', height: '28px' }}></div>
    </Flex>
  );
};

export default UserPageHeader;
