import { useParams } from "react-router-dom";

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
      <h1> {gallery.name}</h1>

    </>
  )
}

export default Gallery;