import { StyledContainer } from '@/styles/components/KakaoMap/KakaoMap';
import { Map, MapMarker, ZoomControl, MapTypeControl } from 'react-kakao-maps-sdk';

type KakaoMapProps = {
  width?: string;
  level?: number;
  firstContent?: string;
  secondContent?: string;
};

function KakaoMap({ width, level, firstContent, secondContent }: KakaoMapProps) {
  return (
    <div style={{ width: width ? width : '100%' }}>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 36.966125,
          lng: 127.517545,
        }}
        style={{
          width: '100%',
          height: '600px',
        }}
        level={level ? level : 4} // 지도의 확대 레벨
        draggable={true}
        zoomable={true}
      >
        <MapTypeControl position={'TOPRIGHT'} />
        <ZoomControl position={'RIGHT'} />
        <MapMarker
          position={{
            lat: 36.966125,
            lng: 127.517545,
          }}
        >
          <StyledContainer>
            {/* {title ? title : '나람사료'} <br /> */}
            <a
              href="https://map.kakao.com/link/map/나람사료,36.966125,127.517545"
              style={{ color: 'blue' }}
              target="_blank"
              rel="noreferrer"
            >
              {firstContent ? firstContent : '(주) 나람사료'}
            </a>{' '}
            <a
              href="https://map.kakao.com/link/to/Hello World!,36.966125,127.517545"
              style={{ color: 'blue' }}
              target="_blank"
              rel="noreferrer"
            >
              {secondContent}
            </a>
          </StyledContainer>
        </MapMarker>
      </Map>
    </div>
  );
}

export default KakaoMap;
