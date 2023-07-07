import App from './App'
import { BrowserRouter } from 'react-router-dom';

function Root(){
return (
    <>
    <BrowserRouter>
    {/* <h1>hello from root</h1> */}
    <App/>
    </BrowserRouter>
    </>
)
}
export default Root