import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import { addPhoto } from '../../services/ApiHelper'

export default function AddPhoto({ banana, photos, setPhotos, isLoading, setIsLoading }) {

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


  let submitNewPhoto = async () => {
    // setIsLoading(true)
    console.log(newPhoto)
    await addPhoto(newPhoto)
    // setIsLoading(false)
    window.location.reload()
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

      <Gallery photos={existing} />


      {existing.map(photo =>
        <div>
          <button key={photo.height}>Edit</button>
          <button key={photo.width}>Delete</button>
        </div>)}

    </div>
  </>

}