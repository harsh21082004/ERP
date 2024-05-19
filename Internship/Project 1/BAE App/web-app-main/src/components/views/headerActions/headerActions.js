import theme from '~/styles/theme';

import FAQ from './FAQSection/FaqSection';
import { SupportersSection } from './SupportersSection/supportersSection';
import { LeaderboardSection } from './LeaderboardSection/leaderboardSection';

export const HeaderActions = ({
  showFaq = true,
  showSupporters = true,
  showLeaderboard = true,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '32px 32px 0',
        color: '#fff',
        fontFamily: theme.fontFamilies.rubik,
        width: '100%',
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {showLeaderboard && <LeaderboardSection />}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {showSupporters && <SupportersSection />}
          {showFaq && <FAQ />}
        </div>
      </div>
    </div>
  );
};
