import App from './App'
import { BrowserRouter } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';

function Root(){
return (
    <>
    <BrowserRouter>
        <App />
    {/* <h1>hello from root</h1> */}
    </BrowserRouter>
    </>
)
}
export default Root