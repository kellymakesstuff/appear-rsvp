import React from 'react'
import Gallery from 'react-photo-gallery';
import '../css/gallerybox.scss'

export default function GalleryBox({ photos }) {

  console.log("photos in gallerybox", photos)




  return <>

    <div className="fullGalleryBox">
      <Gallery photos={photos} />
    </div>
  </>
}