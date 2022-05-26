import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import './Map.css'
import '../../utils/fix-map-icon';
import {SearchContext} from "../../context/search.context";
import {SimpleAdEntity} from "types";
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const data = await res.json();
            setAds(data);
        })();
    },[search])
    return(
        <div className="map">
            <h1>{search}</h1>
            <MapContainer center={[52.4094831,16.9122178]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id}position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }



            </MapContainer>
        </div>
    )
}
