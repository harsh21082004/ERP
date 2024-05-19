export const isBrowser = () => {
  return typeof window !== 'undefined';
};

export const isServer = () => {
  return typeof window === 'undefined';
};

export const isProductionHostname = (hostname) => {
  return ['www.baeapp.ai', 'website.com'].includes(hostname);
};

export const isStagingHostname = (hostname) => {
  return hostname.endsWith('staging.website.com');
};

export const copyToClipboard = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    let textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      document.execCommand('copy') ? res() : rej();
      textArea.remove();
    });
  }
};

export const getCopyrightYear = () => Math.max(2023, new Date().getFullYear());
export const createSelectOptions = ({
  data = [],
  labelKey = 'title',
  valueKey = 'id',
}) => {
  return data.map((item) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));
};

export const calculateSocialPoints = (nTweets, nFollower) => {
  const tweetCount = isNaN(nTweets) ? 0 : nTweets;
  const follower = isNaN(nFollower) ? 0 : nFollower;

  const finalResult = tweetCount * 100;
  if (follower <= 10000) return finalResult;
  if (follower <= 25000) return finalResult * 2;
  if (follower <= 50000) return finalResult * 5;
  if (follower <= 100000) return finalResult * 8;
  if (follower > 100000) return finalResult * 10;
  else return finalResult;
};
