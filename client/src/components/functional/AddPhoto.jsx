import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import { addPhoto } from '../../services/ApiHelper'

export default function AddPhoto({ banana, photos, setPhotos }) {

  console.log("banana in addphoto", banana)
  console.log("photos in addphoto", photos)

  let parsedBanana = parseInt(banana)
  let existing = photos.filter(household => household.household_id === parsedBanana)
  console.log("existing", existing)

  let [newPhoto, setNewPhoto] = useState({
    existing,
    src: null,
    height: 4,
    width: 3,
    household_id: parsedBanana
  })

  console.log("newPhoto", newPhoto)

  let handleNewPhoto = (e) => {
    let imgUrl = e
    let heightNum = 4
    let widthNum = 3

    setNewPhoto({
      existing,
      src: imgUrl,
      height: heightNum,
      width: widthNum,
      household_id: parsedBanana
    })

  }


  let submitNewPhoto = () => {
    console.log(newPhoto)
    addPhoto(newPhoto)
  }





  return <>
    <div>
      <h1>photosss</h1>
      <form>
        <input type="text" onChange={(e) => handleNewPhoto(e.target.value)} />
      </form>
      <button onClick={() => submitNewPhoto()}>add photo</button>
      <Link to="/" refresh="true">Back to Gallery</Link>

      {newPhoto.src && <img src={newPhoto.src} />}

      <Gallery photos={existing} />

    </div>
  </>

}