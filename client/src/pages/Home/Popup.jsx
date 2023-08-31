import { Popup } from 'react-map-gl'
import { Star } from '@mui/icons-material'

const PopupComponent = ({ pin, setCurrentPlaceId }) => {
    return (
        <Popup
            latitude={pin.latitude}
            longitude={pin.longitude}
            closeButton={true}
            closeOnClick={false}
            anchor="top"
            onClose={() => setCurrentPlaceId(null)}
        >
            <div className="w-[250px] h-[250px] flex flex-col justify-around " >
                <label className="text-red-700 text-[13px] border-[1px] border-red-700 my-[3px] w-max " >Place</label>
                <h4>{pin.title}</h4>
                <label className="text-red-700 text-[13px] border-[1px] border-red-700 my-[3px] w-max " >Review</label>
                <p className="text-[14px] " >{pin.description}</p>
                <label className="text-red-700 text-[13px] border-[1px] border-red-700 my-[3px] w-max " >Rating</label>
                {
                    Array(pin.rating).fill(<Star className='text-yellow-500 ' />)
                }
                <label >Information</label>
                <div className="name">Created by <b className="capitalize " >nauman</b></div>
                <div className="name text-[12px] ">1 hour ago</div>
            </div>
        </Popup>
    )
}

export default PopupComponent