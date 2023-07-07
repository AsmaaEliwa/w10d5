import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  // console.log(harvardArt)
  const harvardArtData = harvardArt.records;
  
  return ( 
    <>
      <h1>Hello from App</h1>
      <GalleryNavigation data = {harvardArtData}/>
      <Switch>
        <Route path="/galleries/:galleryId" component={GalleryNavigation} />
      </Switch>
    </>
    

  );
}

export default App;
