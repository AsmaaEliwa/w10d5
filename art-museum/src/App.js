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
        <Route path='/'exact> <><h2>Harvard Art Museum</h2>
        <p>
        Look, but Don't Touch. Please select a Gallery in the navigation bar.
        </p>
        </></Route>
        <Route path="/galleries/:galleryId" >
          <Gallery data={harvardArtData} />
        </Route>
        <Route path="/galleries" component={GalleryNavigation} ></Route>
        <Route  > <h2> Page Not Found</h2></Route>

      </Switch>
    </>
    

  );
}

export default App;
