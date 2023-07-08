// import Gallery from "./Gallery";
import './GalleryNavigation.css';
import { NavLink } from "react-router-dom";
import Gallery from '../Gallery';

function GalleryNavigation(props) {
  const galleries = props.data;
  // console.log(galleries);


  const galleryList = galleries.map(gallery => {
    return <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>;
  })

  return (
    <>
    <nav> 
      {galleryList}
    </nav>
    {/* <Gallery galleries={galleries} /> */}
    </>
  )
}

export default GalleryNavigation;