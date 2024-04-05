import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Owl1 from "../assets/images/owl-1.jpg";
import Owl2 from "../assets/images/owl-2.jpg";
import Owl3 from "../assets/images/owl-3.jpg";
import Owl4 from "../assets/images/owl-4.jpg";
import Owl5 from "../assets/images/owl-5.jpg";
import Owl6 from "../assets/images/owl-6.jpg"


const ownImages = [
    {
        img: Owl1
    },
    {
        img: Owl2
    },
    {
        img: Owl3
    },
    {
        img: Owl4
    },
    {
        img: Owl5
    },
    {
        img: Owl6
    }
]

function OwlCarousel() {
    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300

    }
    return (
        <>
            <Slider {...settings}>
                {ownImages.map((owl, index) => (
                    <a href='#' className='owl-img-link' key={index}>
                        <a href="#">
                          <span className='insta-icon'>
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                        </a>
                        <div className='owl-img-container'>
                            <img className='owl-img' src={owl.img}/>
                        </div>
                    </a>
                ))}
            </Slider>
        </>
    )
}

export default OwlCarousel;
