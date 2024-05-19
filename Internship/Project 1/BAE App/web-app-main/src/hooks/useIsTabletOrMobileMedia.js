import { MEDIA_QUERIES } from '~/constants';

import useMediaQuery from './useMediaQuery';

function useIsTabletOrMobileMedia() {
  return useMediaQuery(MEDIA_QUERIES.TABLET_OR_MOBILE);
}
export default useIsTabletOrMobileMedia;
