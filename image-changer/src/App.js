import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import ChangedImageDisplay from './components/ChangedImageDisplay.js';
import Footer from './components/Footer.js';
import SelectImageDisplay from './components/SelectImageDisplay.js';

import {config} from './config.js'

import {useState} from 'react' //A so called Hook
import LoadingImageDisplay from './components/LoadingImageDisplay.js';

//https://www.remove.bg/api

function App() {
  const ImageStateEnum = Object.freeze({"notSelected":1, "selected":2, "processing":3, "changed":4})
  const [imageState, setImageState] = useState(ImageStateEnum.notSelected)
  const [capturedImage, setCapturedImage] = useState({})
  const [changedImage, setChangedImage] = useState()

  const imageFileSelected = (ee) =>{
    var reader  = new FileReader()
    reader.onloadend = function () {
      setCapturedImage(reader.result)
    }
    reader.readAsDataURL(ee.target.files[0])
    setImageState(ImageStateEnum.selected)
  }
  
  const doneButtonPressed = async (removal) =>{
    setImageState(ImageStateEnum.processing)
    const data = await fetchChangedImage(removal)
    if(data.ok){
      setImageState(ImageStateEnum.changed)
      setChangedImage(data)
      console.log("changed")
    }else{
      setImageState(ImageStateEnum.notSelected)
      setChangedImage('')
      alert("ERROR")
    }
  }

  const fetchChangedImage = async(removal) => {
    console.log(config.API_KEY)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': config.API_KEY,
        'format': 'png'
      },
      body: JSON.stringify({image_file_b64: capturedImage, size: 'auto'})
    }
    const res = await fetch('https://api.remove.bg/v1.0/removebg', options)
    console.log(res)
    //const data = await res.json()
    return res
  }

  return (
    <div className="App">
      <Header/>
      <div>
        {(imageState === ImageStateEnum.notSelected || imageState === ImageStateEnum.selected)? <SelectImageDisplay capturedImage = {capturedImage} imageFileSelected = {imageFileSelected} doneButtonPressed = {doneButtonPressed} imageState = {imageState}/>: ''}
        {imageState === ImageStateEnum.processing? <LoadingImageDisplay/>: ''}
        {imageState === ImageStateEnum.changed? <ChangedImageDisplay changedImage = {changedImage}/>: ''}
      </div>
      <Footer/>
    </div>
  );
  
}

export default App;