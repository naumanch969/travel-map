import React from 'react'
import { Marker } from 'react-map-gl'

const MarkerComponent = ({ pin, setCurrentPlaceId, setViewPort }) => {

    const handleMarkerClick = (id, latitude, longitude) => {
        setCurrentPlaceId(id)
        setViewPort({ ...viewPort, latitude, longitude })
    }


    return (
        <Marker
            latitude={pin.latitude}
            longitude={pin.longitude}
            offsetLeft={-viewPort.zoom * 3.5}
            offsetTop={-viewPort.zoom * 7}
        >
            <Room
                style={{ fontsize: `${viewPort.zoom * 7}px`, color: pin.name == currentUser ? 'tomato' : 'slateblue', cursor: 'pointer' }}
                onClick={() => handleMarkerClick(pin._id, pin.latitude, pin.longitude)}
            />
        </Marker>
    )
}

export default MarkerComponent