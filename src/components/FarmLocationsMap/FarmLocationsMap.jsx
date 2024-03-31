import {
  ComposableMap,
  Geographies,
  Geography,
  // ZoomableGroup,
} from 'react-simple-maps';
import { Container } from '../Common/Container/Container';

import mapData from './gadm41_UKR.json';
import style from './mapStyles.module.scss';
import './customStyle.css';
import { useTranslation } from 'react-i18next';

export const FarmLocationsMap = () => {
  const { t } = useTranslation('FarmLocationsMap');
  // const isSpecialRegion = ['Назва області 1', 'Назва області 2'].includes(
  //   geo.properties.NAME_1
  // );
  return (
    <Container>
      <div id="FarmLocationsMap" className={style.map_container}>
        <h2 className={style.map_title}>{t('titlemap')}</h2>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-26.0, -49.0, 0],
            scale: 5700,
          }}
          style={{ width: '100%', height: 'auto' }}
          viewBox="130 -70 1200 800"
        >
          {/* <ZoomableGroup center={[longitude, latitude]} zoom={1}></ZoomableGroup> */}
          <Geographies geography={mapData}>
            {({ geographies }) =>
              geographies.map(geo => {
                // const isSpecialRegion = [
                //   'Назва області 1',
                //   'Назва області 2',
                // ].includes(geo.properties.NAME_1);
                const name = geo.properties.NAME_1;
                const isSpecialRegion =
                  name === "Luhans'k" ||
                  name === "Donets'k" ||
                  name === 'Sevastopol' ||
                  name === 'Crimea';
                const regionStyles = isSpecialRegion
                  ? {
                      default: {
                        fill: '#f7f7f7', // Колір для спеціальних областей
                        stroke: '#b0b0b0',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },

                      hover: {
                        fill: '#f7f7f7', // Той самий колір на ховер для спеціальних областей
                        stroke: '#b0b0b0',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#f7f7f7', // Той самий колір на клік для спеціальних областей
                        stroke: '#b0b0b0',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                    }
                  : {
                      default: {
                        fill: '#f9fbea', // колір області
                        stroke: '#c9a9a0', //  колір для ліній меж
                        strokeWidth: 0.75, // товщина лінії меж
                        outline: 'none', // визначає контур навколо областей, який ми відключаємо, встановлюючи none.
                      },
                      hover: {
                        fill: '#f1f6d1',
                        stroke: '#c9a9a0',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#f1f6d1',
                        stroke: '#c9a9a0',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                    };
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={regionStyles}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </Container>
  );
};
