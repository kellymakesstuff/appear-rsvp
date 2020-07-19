import React from 'react'
import { Link, Route } from 'react-router-dom'
import Gallery from 'react-photo-gallery';
import '../css/gallerybox.scss'

export default function GalleryBox({ photos }) {

  console.log("photos in gallerybox", photos)




  return <>
    <Link to="/addphoto"><h2>add photo</h2></Link>
    <div className="fullGalleryBox">
      <Gallery photos={photos} />
    </div>
  </>
}
