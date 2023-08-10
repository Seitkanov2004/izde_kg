import React, {useRef} from 'react';
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import "./addMap.scss"
import {addCenter} from "../../../store/Reducers/MapSlice";
import {API_KEY_MAP} from "../AddProperty";

export const MODES: any = {
    MOVE: 0,
    SET_MARKER: 1
}

const AddMap = ({mode}: any) => {


    const dispatch = useAppDispatch()

    const mapRef = useRef<any>(undefined)


    ///////////////////////////////////////////////////////////////////

    const {center, placeName} = useAppSelector(s => s.MapSlice)


    const containerStyle = {
        width: '100%',
        height: '600px'
    };

    const modeClick = (loc: any) => {
        if (mode === MODES.SET_MARKER) {
            const lat = loc.latLng.lat()
            const lng = loc.latLng.lng()
            dispatch(addCenter({lat, lng}))
        }
    }

    const defaultOptions = {
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        clickableIcons: true,
        keyboardShortcuts: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        fullscreenControl: false
    }


    const onLoad = React.useCallback(function callback(map: any) {
        mapRef.current = map
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        mapRef.current = undefined
    }, [])


    return (
        <div id="addMap">
            <div className="addMap">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                        onClick={modeClick}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        options={defaultOptions}
                    >
                        <Marker position={center} icon={{url: "./place.svg"}}/>
                    </GoogleMap>
            </div>
        </div>
    );
};

export default AddMap;