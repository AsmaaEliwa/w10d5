import { Link, useParams } from "react-router-dom";
import '../styles/art.css';

function ArtImageTile({ art }) {
  const { galleryId } = useParams();
  if (!art.images[0]) {
    return (
      <Link className="image-tile" to={`/galleries/${galleryId}/art/${art.id}`}>
        {art.title}
      </Link>
    );
  }
  return (
    <Link className="image-tile" to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0].baseimageurl} alt={art.title} />
    </Link>
  );
}

export default ArtImageTile;
