const LoadingImageDisplay = () => {
    return (
        <div className = 'container '>
            <div className = 'row py-5'>
                <h3 className = 'text-light text-center'>Loading...</h3>
            </div>
            <div className = 'row d-flex justify-content-center'>
                <div className = "spinner-border text-light " role="status">
                    <span className = "visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingImageDisplay
