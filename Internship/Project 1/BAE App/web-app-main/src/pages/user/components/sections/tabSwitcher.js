export const TabSwitcher = ({ selectedTab = 0, onTabUpdate = () => {} }) => {
  const selectedStyles = {
    width: '50%',
    borderRadius: '20px',
    backgroundColor: '#b296ff',
    border: `1px solid #000`,
    borderBottomWidth: '2px',
  };

  const unselectedStyles = {
    color: '#fff',
  };

  const commonStyles = {
    display: 'flex',
    padding: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontWeight: 600,
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        margin: '8px 12px',
        width: '90%',
        borderRadius: '20px',
        backgroundColor: '#5d3db4',
        display: 'flex',
        border: `2px solid #000`,
        borderBottomWidth: '4px',
      }}
    >
      <div
        onClick={() => onTabUpdate(0)}
        style={{
          ...commonStyles,
          ...(selectedTab === 0 ? selectedStyles : unselectedStyles),
        }}
      >
        Airdrop
      </div>
      <div
        onClick={() => onTabUpdate(1)}
        style={{
          ...commonStyles,
          ...(selectedTab === 1 ? selectedStyles : unselectedStyles),
        }}
      >
        Wallet
      </div>
    </div>
  );
};
