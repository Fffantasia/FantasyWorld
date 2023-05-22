import './sections.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

function Sections(){
    return(
        <section className="sections">
            <div class="sections-cont">
                <div class="section">
                    <img className="section-img" src={img1}/>
                    <div className="section-card">
                        <p className='section-card-title'>Views</p>
                        <p className='section-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="section">
                    <img className='section-img' src={img2}/>
                    <div className='section-card'>
                        <p className='section-card-title'>Cities</p>
                        <p className='section-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="section">
                    <img className='section-img' src={img3}/>
                    <div className='section-card'>
                        <p className='section-card-title'>Creatures</p>
                        <p className='section-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sections;