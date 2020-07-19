import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import { addPhoto } from '../../services/ApiHelper'

export default function AddPhoto({ banana, photos, setPhotos }) {

  console.log("banana in addphoto", banana)
  console.log("photos in addphoto", photos)

  let parsedBanana = parseInt(banana)

  let [newPhoto, setNewPhoto] = useState({
    src: null,
    height: 4,
    width: 3,
    household_id: parsedBanana
  })

  let handleNewPhoto = (e) =>
    setNewPhoto({
      src: e,
      height: 4,
      width: 3,
      household_id: parsedBanana
    })

  let submitNewPhoto = () => {
    console.log(newPhoto)
    addPhoto(newPhoto)
    setPhotos(photos, newPhoto)
  }

  return <>
    <div>
      <h1>photosss</h1>
      <form>
        <input type="text" onChange={(e) => handleNewPhoto(e.target.value)} />
      </form>
      <button onClick={() => submitNewPhoto()}>add photo</button>
      <Link to="/">Back to Gallery</Link>

      {newPhoto.src && <img src={newPhoto.src} />}

    </div>
  </>

}