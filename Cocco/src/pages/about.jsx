import BreadCrumbsSec from "../component/breadCrumbsSec.jsx";
import AboutImg1 from '../assets/images/about-img-1.jpg';
import AboutImg2 from '../assets/images/about-img-2.jpg';
import Signs from '../assets/images/signature.png'
import {Link} from "react-router-dom";
import AnimatedBtn from "../component/animated-btn.jsx";

function About() {
    return (
        <>
            <BreadCrumbsSec text='About Us'/>
            <div className="container aboutus-container">
                <div className="row my-5">
                    <div className="col-lg-4">
                        <div className="about-left">
                            <img src={AboutImg1} alt="" style={{maxWidth: '100%'}}/>
                            <h4 className='pt-4'>
                                Creating children’s clothes inspires us in every aspect </h4>
                            <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur dolorum
                                inventore magnam nobis pariatur recusandae, sint soluta suscipit veritatis.</p>
                            <img className='mt-3' src={Signs} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-mid">
                            <img src={AboutImg2} alt="" style={{maxWidth: '100%'}}/>
                            <div className='about-mid-inner pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-check" style={{color: '#d0d56d', fontSize: '20px'}}></i>
                                    <p>We make your life easier.</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-check" style={{color: '#d0d56d', fontSize: '20px'}}></i>
                                    <p>Experience childcare.</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-check" style={{color: '#d0d56d', fontSize: '20px'}}></i>
                                    <p>Daycare is great…</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-check" style={{color: '#d0d56d', fontSize: '20px'}}></i>
                                    <p>We are childcare professionals.</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="fa-solid fa-check" style={{color: '#d0d56d', fontSize: '20px'}}></i>
                                    <p>Babysitting with a loving heart..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-schedule text-center">
                            <h3 className='pb-3'>
                                Working Hours
                            </h3>
                            <p className='pb-3'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </p>
                            <div className='days'>
                                <p>Monday...........................9am - 6pm</p>
                                <p>Tuesday..........................9am - 6pm</p>
                                <p>Wednesday........................9am - 6pm</p>
                                <p>Thursday.........................9am - 6pm</p>
                                <p>Friday...........................9am - 6pm</p>
                                <p>Saturday.........................9am - 6pm</p>
                            </div>
                            <div className=' mt-5'>
                                <Link className='nav-link' to={`/contact`}>
                                    <AnimatedBtn btnText='Contact us'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About