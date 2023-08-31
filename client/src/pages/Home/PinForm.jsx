import {Popup} from 'react-map-gl'
import { useState } from 'react'

const PinForm = ({newPlace, setNewPlace}) => {

    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [rating, setRating] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPin = { name: currentUser, title, description, rating, latitude: newPlace.latitude, longitude: newPlace.longitude }
        try {
          const { data } = await axios.post('/pin/create', newPin)
          setPins([...pins, data.result])
          setNewPlace(null)
        }
        catch (err) {
    
        }
      }

    return (
        <Popup
            latitude={newPlace.latitude}
            longitude={newPlace.longitude}
            closeButton={true}
            closeOnClick={false}
            anchor="top"
            onClose={() => setNewPlace(niull)}
        >
            <div>
                <form onSubmit={handleSubmit} className="w-[250px] h-[250px] flex flex-col justify-between " >
                    <label >Title</label>
                    <input type="text" placeholder="Enter a title" value={title} onChange={(e) => setTitle(e.target.value)} className="border-none border-b-[1px] border-gray-700 placeholder:text-gray-700 placeholder:text-[12px] " />
                    <label >Review</label>
                    <textarea placeholder="Say us something about this place" value={description} onChange={(e) => setDescription(e.target.value)} className="border-none border-b-[1px] border-gray-700 placeholder:text-gray-700 placeholder:text-[12px]" />
                    <label >Rating</label>
                    <select onChange={(e) => setRating(e.target.value)} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="border-none p-[5px] rounded-[5px] text-white bg-red-700 cursor-pointer ">Add Pin</button>
                </form>
            </div>
        </Popup>
    )
}

export default PinForm