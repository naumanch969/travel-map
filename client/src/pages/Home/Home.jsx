import { useEffect, useState } from "react"
import ReactMapGL from 'react-map-gl'
import { Room, Star } from '@mui/icons-material'
import axios from 'axios'
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login"
import PinForm from "./pages/Home/PinForm"
import Popup from "./Popup"
import Marker from "./Marker"

const Home = () => {

    const [viewPort, setViewPort] = useState({ width: '100vw', height: '100vh', latitude: 56, longitude: 17, zoom: '4' })
    const [pins, setPins] = useState([])
    const [currentPlaceId, setCurrentPlaceId] = useState(null)
    const [newPlace, setNewPlace] = useState(null)

    useEffect(() => {
        const getPins = async () => {
            try {
                const { data } = await axios.get('/pin/get-all')
                setPins(data.result)
            } catch (err) {
                console.log('err', err)
            }
        }
        getPins()
    }, [])


    const handleAddClick = (e) => {
        const [longitude, latitude] = e.lnglat
        setNewPlace({ longitude, latitude })
    }


    return (
        <ReactMapGL
            {...viewPort}
            width={viewPort.width}
            height={viewPort.height}
            latitude={viewPort.latitude}
            longitude={viewPort.longitude}
            zoom={viewPort.zoom}
            mapboxApiAccessToken={'token here'}
            onViewportChange={nextViewport => setViewPort(nextViewport)}
            mapStyle='mapbox://styles/safak/cknndpyfq268f17p53nmpwira'
            onDblClick={handleAddClick}
            transitionDuration='200'
        >
            {
                pins.map((pin, index) => (
                    <div className="" key={index} >
                        <Marker setCurrentPlaceId={setCurrentPlaceId} setViewPort={setViewPort} />
                        {pin._id == currentPlaceId && <Popup />}
                    </div>
                ))
            }

            {newPlace && <PinForm newPlace={newPlace} setNewPlace={setNewPlace} />}

        </ReactMapGL>
    )
}

export default Home