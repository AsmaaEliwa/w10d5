import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Gallery from "./components/Gallery";
function App() {
  // console.log(harvardArt)
  const harvardArtData = harvardArt.records;
  
  return ( 
    <>
      <h1>Hello from App</h1>
      <div className="page-wrapper">
      <GalleryNavigation data = {harvardArtData}/>
      </div>
      <Switch>
        <Route path="/galleries/:galleryId" >
          <Gallery data={harvardArtData} />
        </Route>
        <Route path="/galleries" component={GalleryNavigation} ></Route>
      </Switch>
    </>
    

  );
}

export default App;
