import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: '353384bac18ca67b23d7365c03f3b601',
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
