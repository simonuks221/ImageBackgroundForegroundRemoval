const ChangedImageDisplay = ({changedImage}) => {
    return (
        <div className = 'container'>
            <h3 className = 'text-light'>Image after alteration:</h3>
            <img className = 'img-fluid mx-auto d-block' alt = 'Changed image here' src = {changedImage.URL}/>
        </div>
    )
}

export default ChangedImageDisplay