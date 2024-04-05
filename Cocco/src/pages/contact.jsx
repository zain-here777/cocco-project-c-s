import BreadCrumbsSec from "../component/breadCrumbsSec.jsx";
import AnimatedBtn from "../component/animated-btn.jsx";
import {Link} from "react-router-dom";

function Contact() {
    return (<>
        <BreadCrumbsSec text='Contact Us'/>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <h1>
                            How to find Us?
                        </h1>
                        <p className='contact-content'>
                            A professional babysitter referral service. Created by moms for moms. sollicitudin,
                            lorem quis bibendum dis.
                        </p>
                    </div>
                    <div className='map-container'>
                        <iframe
                            title="google map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473115.9060003995!2d-9.790797163012584!3d31.778265070846214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sma!4v1709282907766!5m2!1sen!2sma"
                            width="100%"
                            height="400"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="col-lg-6 justify-content-center d-flex ">
                    <div className="contact-form">
                        <h1 className='text-white pb-3'>Get in Touch!</h1>
                        <form action="">
                            <input className='form-control' type="text" placeholder='Your Name'/>
                            <input className='form-control' type="email" placeholder='Your Email'/>
                            <textarea className='form-control' name="message" id="message" cols="30" rows="5"
                                      placeholder='Write a Message...'></textarea>
                            <Link className='nav-link mt-5'><AnimatedBtn btnText='Submit'/></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="branches-info-container">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-lg-4">
                        <h3>New York Office</h3>
                        <ul className='contact-footer-list'>
                            <li className='contact-footer-item nav-item'>
                                <i className='mkdf-icon-dripicons dripicon dripicons-phone '></i>
                                <span>(800) 123-456</span>
                            </li>
                            <li className='contact-footer-item nav-item'>
                                <i className="mkdf-icon-dripicons dripicon dripicons-mail "></i>
                                <span>cocco@qode.com</span>
                            </li>
                            <li className=' contact-footer-item nav-item'>
                                <i className="mkdf-icon-dripicons dripicon dripicons-location "></i>
                                <span>184 Main Collins Street</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3>London Office</h3>
                        <ul className='contact-footer-list'>
                            <li className='contact-footer-item nav-item'>
                                <i className='mkdf-icon-dripicons dripicon dripicons-phone '></i>
                                <span>(800) 123-456</span>
                            </li>
                            <li className='contact-footer-item nav-item'>
                                <i className="mkdf-icon-dripicons dripicon dripicons-mail "></i>
                                <span>cocco@qode.com</span>
                            </li>
                            <li className=' contact-footer-item nav-item'>
                                <i className="mkdf-icon-dripicons dripicon dripicons-location "></i>
                                <span>184 Main Collins Street</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h3>Paris Office</h3>
                        <ul className='contact-footer-list'>
                            <li className='contact-footer-item nav-item'>
                                <i className='mkdf-icon-dripicons dripicon dripicons-phone '></i>
                                <span>(800) 123-456</span>
                            </li>
                            <li className='contact-footer-item nav-item'>
                                <i className="mkdf-icon-dripicons dripicon dripicons-mail "></i>
                                <span>cocco@qode.com</span>
                            </li>
                            <li className=' contact-footer-item nav-item'>
                                <i className="mkdf-icon-dripicons dripicon dripicons-location "></i>
                                <span>184 Main Collins Street</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Contact;