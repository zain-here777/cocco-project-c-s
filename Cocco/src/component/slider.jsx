import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HeaderOne from '../assets/images/header-img-1.jpg';
import HeaderTwo from '../assets/images/header-img-2.jpg';
import HeaderThree from '../assets/images/header-img-3.jpg';


const spanStyle = {
    padding: '5px 90px',
    color: '#000000',
    borderRadius: '4px',
    transform: 'rotate(-1deg)',
    backgroundColor: '#d7f5fa'
}
const taglineStyle = {
    padding: '5px 60px',
    background: '#efefef',
    color: '#000000',
    borderRadius: '4px',
    transform: 'rotate(0deg)',
    backgroundColor: '#dce086',
    fontsize: "20px",
    marginTop: "12px"
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
    backgroundColor: "#0000007d",
    backgroundBlendMode: 'multiply'

}
const slideImages = [{
    url: HeaderOne,
    caption: 'Spring Collection',
    tagline: 'For modern kids'
}, {
    url: HeaderTwo,
    caption: 'Summer Vibes',
    tagline: 'For modern kids'
}, {
    url: HeaderThree,
    caption: 'Spring Collection',
    tagline: 'For modern kids'
},];
const Slideshow = () => {
    return (<div className="slide-container">
        <Slide>
            {slideImages.map((slideImage, index) => (<div key={index}>
                <div className='slider-container' style={{...divStyle, 'backgroundImage': `url(${slideImage.url})`}}>
                    <div className='slider-heading' style={spanStyle}>{slideImage.caption}</div>
                    <div className='slider-tagline' style={taglineStyle}>{slideImage.tagline}</div>
                </div>
            </div>))}
        </Slide>
    </div>)
}

export default Slideshow;