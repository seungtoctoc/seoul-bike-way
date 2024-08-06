import { Map, Polygon, ZoomControl, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import '../src/index.css';

import TopBar from './components/TopBar';
import TabWindow from './components/TabWindow';

function App() {
  const center = {
    lat: 37.55829368834861,
    lng: 126.99871543351644,
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='w-screen h-screen'>
      <TopBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <TabWindow isOpen={isOpen} />

      <Map center={center} style={{ width: '100%', height: '100%' }} level={3}>
        <ZoomControl position={'RIGHT'} />
      </Map>
    </div>
  );
}

export default App;
