import { Map } from 'react-kakao-maps-sdk';
import '../src/index.css';

function App() {
  return (
    <div className='w-screen h-screen'>
      <Map
        center={{ lat: 37.55829368834861, lng: 126.99871543351644 }}
        style={{ width: '100%', height: '100%' }}
        level={3}
      />
    </div>
  );
}

export default App;
