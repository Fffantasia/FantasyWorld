import './video.css';

function Video(){
    return(
        <section className='video-section'>
            <div className='video-container'>
                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/ipFaubyDUT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='video-data'>
                    <h1 className='video-data-title'>Music</h1>
                    <p className='video-data-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, dolore voluptatibus. Quae repudiandae optio, fuga labore voluptas quis esse illum a blanditiis tempore eveniet rerum nulla libero deserunt mollitia nobis.</p>
                </div>
            </div>
        </section>
    )
}

export default Video;