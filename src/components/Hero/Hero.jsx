import './hero.css';
import bg from '../../assets/bg.jpg';


function Hero(){
    return (
        <section className="hero-container" style={{backgroundImage: `url(${bg})`}}>
            <div className="hero-main-cont">
                <h1 className='hero-title'>Fantasy World</h1>
                <p className='hero-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem, doloribus impedit deserunt, porro eveniet eaque eius fugiat beatae est, totam ex. Deleniti exercitationem laborum minus deserunt, eos assumenda sint.</p>
                <button className='hero-button'>Discover the magic</button>            
            </div>
        </section>
    )
}

export default Hero;