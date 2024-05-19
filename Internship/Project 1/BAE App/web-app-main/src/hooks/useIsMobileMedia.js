import { MEDIA_QUERIES } from '~/constants';

import useMediaQuery from './useMediaQuery';

function useIsMobileMedia() {
  return useMediaQuery(MEDIA_QUERIES.MOBILE);
}

export default useIsMobileMedia;
