import { MEDIA_QUERIES } from '~/constants';

import useMediaQuery from './useMediaQuery';

function useIsTabletMedia() {
  return useMediaQuery(MEDIA_QUERIES.TABLET);
}

export default useIsTabletMedia;
