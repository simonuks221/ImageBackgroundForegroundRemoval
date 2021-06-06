const SelectImageDisplay = ({capturedImage, imageFileSelected, doneButtonPressed, imageState}) => {
    return (
        <div className = 'container'>
            <div className = 'row'>
                <div className = 'col-4'>
                    <div className = 'row'>
                        <h5 className = 'text-light'>Choose your image below!</h5>
                    </div>
                    <div className = 'row d-flex justify-content-center'>
                        <input className = 'd-flex justify-content-center' onChange = {(e) => {imageFileSelected(e)}} type="file" accept="image/png, image/jpeg"/>
                    </div>
                    <div className = 'row'>
                        <h5 className = 'col text-light text-end'>Remove: </h5>
                        <select className = 'col'>
                            <option>Background</option>
                            <option>Foreground</option>
                        </select>
                    </div>
                    <div className = 'row'>
                        <button  className = {imageState === 1? 'btn btn-primary disabled': 'btn btn-primary'} onClick = {doneButtonPressed}>Done</button>
                    </div>
                </div>
                <div className = 'col-8'>
                    <img className = 'img-fluid mx-auto d-block' alt = 'Changed image here' src = {capturedImage}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default SelectImageDisplay
