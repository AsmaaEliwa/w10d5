// import Gallery from "./Gallery";
import './GalleryNavigation.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";

function GalleryNavigation(props) {
  const galleries = props.data;
  // console.log(galleries);

  // const { galleryId } = useParams();

  const galleryList = galleries.map(gallery => {
    return <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>;
  })

  return (
    <nav> 
      {galleryList}
    </nav>
  )
}

export default GalleryNavigation;