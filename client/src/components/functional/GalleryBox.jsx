import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Gallery from 'react-photo-gallery';
import '../css/gallerybox.scss'

function GalleryBox({ photos }) {

  console.log("photos in gallerybox", photos)




  return <>
    <h1>Welcome to Jackie and Wilson's Wedding</h1>
    <h2>Access your household above to RSVP</h2>
    <div className="fullGalleryBox">
      <Gallery photos={photos} />
    </div>
  </>
}

export default withRouter(GalleryBox)