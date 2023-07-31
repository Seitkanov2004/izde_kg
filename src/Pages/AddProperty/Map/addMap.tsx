import React, {useCallback, useEffect, useRef, useState} from 'react';
import {GoogleMap, Marker} from "@react-google-maps/api";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {useAppSelector} from "../../../Hooks/useAppSelector";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {addCenter} from "../../../store/Reducers/MapSlice";

export const MODES: any = {
    MOVE: 0,
    SET_MARKER: 1
}

const AddMap = ({isLoaded, mode}: any) => {


    const dispatch = useAppDispatch()

    const mapRef = useRef<any>(undefined)


    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        init,
        clearSuggestions,
    } = usePlacesAutocomplete({
        initOnMount: false,
        debounce: 300,
    });


    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleSelect = ({description}: any) => () => {
        setValue(description, false);
        clearSuggestions();
        console.log(description)
        getGeocode({address: description}).then((results) => {
            const {lat, lng} = getLatLng(results[0]);
            dispatch(addCenter({lat, lng}))
            console.log({lat, lng})
        });
    };

    const renderSuggestions = () =>
    data.map((suggestion) => {
        const {
            place_id,
            structured_formatting: {main_text, secondary_text},
        } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}
                    className="border-green-500 border-2 rounded px-4 py-2">
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    useEffect(() => {
        if (isLoaded) {
            init()
        }
    }, [isLoaded, init])



    ///////////////////////////////////////////////////////////////////

    const {center} = useAppSelector(s => s.MapSlice)


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
        fullscreenControl: true
    }


    const onLoad = React.useCallback(function callback(map: any) {
        mapRef.current = map
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        mapRef.current = undefined
    }, [])

    const [placeId, setPlaceId] = useState("")

    return (
        <div>
            <div>
                <div ref={ref}>
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        disabled={!ready}
                        placeholder="Where are you going?"
                        className="border-2 rounded border-red-700 w-[300px] h-[50px] px-4"
                        // onKeyDown={(e) => {
                        //     data.map((suggestion) => {
                        //         const {
                        //             place_id,
                        //             structured_formatting: {main_text, secondary_text},
                        //         } = suggestion
                        //         if (e.key === "Enter") {
                        //             handleSelect(suggestion)
                        //             setPlaceId(place_id)
                        //         }
                        //     })
                        //
                        // }}
                    />
                    {status === "OK" && <ul>{renderSuggestions()}</ul>}
                </div>
            </div>
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
    );
};

export default AddMap;