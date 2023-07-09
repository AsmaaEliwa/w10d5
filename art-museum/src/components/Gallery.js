import { useParams } from "react-router-dom";
import ArtImageTile from "./ArtImageTile";
import { Route } from "react-router-dom";
function Gallery({data}) {
  const { galleryId } = useParams();
    const gallery=data.find(gallery => gallery.id===Number(galleryId));
    // console.log(gallery)
if (!gallery){
    return(
        <div> 
            <h1> Gallery not found!</h1>
        </div>
    )
     }

     return (
        <>
          <h2>{gallery.name}</h2>
          <Route path="/galleries/:galleryId" exact>
            <div className="art-nav">
              {gallery.objects.map((art) => (
                <ArtImageTile art={art} key={art.id} />
              ))}
            </div>
          </Route>
          {/* <Route path="/galleries/:galleryId/art/:artId"> */}
            {/* <ArtDescription gallery={gallery} /> */}
          {/* </Route> */}
        </>
      );
    }

export default Gallery;