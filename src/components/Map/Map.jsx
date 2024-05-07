import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import style from './Map.module.css'
import 'leaflet/dist/leaflet.css';

/* eslint-disable react/prop-types */
export const Map = () => {
    const position = [-25.424950575774453, -49.27230767911714];
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={style.container}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    SENAI CELSO CHARURI
                </Popup>
            </Marker>
        </MapContainer>
    )
}