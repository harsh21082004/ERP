import { MEDIA_QUERIES } from '~/constants';

import useMediaQuery from './useMediaQuery';

function useIsDesktopMedia() {
  return useMediaQuery(MEDIA_QUERIES.DESKTOP);
}
export default useIsDesktopMedia;
