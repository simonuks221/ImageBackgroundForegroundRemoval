import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import ChangedImageDisplay from './components/ChangedImageDisplay.js';
import Footer from './components/Footer.js';
import SelectImageDisplay from './components/SelectImageDisplay.js';

import {useState, useEffect} from 'react' //A so called Hook
import LoadingImageDisplay from './components/LoadingImageDisplay.js';



function App() {
  const ImageStateEnum = Object.freeze({"notSelected":1, "selected":2, "processing":3, "changed":4})
  const [imageState, setImageState] = useState(ImageStateEnum.notSelected)
  const [capturedImage, setCapturedImage] = useState({})
  const [changedImage, setChangedImage] = useState({URL: 'https://scontent.fplq1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/181347096_23847506414710217_7983903552593517177_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e84a38&_nc_ohc=1EFWM_09yhwAX_mbwTu&_nc_ht=scontent.fplq1-1.fna&tp=31&oh=42be3ca1ecd43609e010d19b789db575&oe=60C2200F'})

  const imageFileSelected = (ee) =>{
    var reader  = new FileReader()
    reader.onloadend = function () {
      setCapturedImage(reader.result)
    }
    reader.readAsDataURL(ee.target.files[0])
    setImageState(ImageStateEnum.selected)
  }

  const doneButtonPressed = () =>{

  }

  //setChangedImage({URL: 'https://scontent.fplq1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/181347096_23847506414710217_7983903552593517177_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e84a38&_nc_ohc=1EFWM_09yhwAX_mbwTu&_nc_ht=scontent.fplq1-1.fna&tp=31&oh=42be3ca1ecd43609e010d19b789db575&oe=60C2200F'})
  //https://rapidapi.com/objectcut.api/api/background-removal/details
  return (
    <div className="App">
      <Header/>
      <div>
        {imageState === ImageStateEnum.notSelected || ImageStateEnum.selected? <SelectImageDisplay capturedImage = {capturedImage} imageFileSelected = {imageFileSelected} doneButtonPressed = {doneButtonPressed} imageState = {imageState}/>: imageState === ImageStateEnum.processing? <LoadingImageDisplay/>: imageState === ImageStateEnum.changed? <ChangedImageDisplay changedImage = {changedImage}/>: <p>Error</p>}
      </div>
      <Footer/>
    </div>
  );
  
}

export default App;