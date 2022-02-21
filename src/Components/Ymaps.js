import { YMaps, Map } from 'react-yandex-maps';

const Ymapp = () => (
  <YMaps>
    <div>
      <Map className='yandexkarta' defaultState={{ center: [40.997288, 71.601477], zoom: 9 }} />
    </div>
  </YMaps>
);

export default Ymapp;