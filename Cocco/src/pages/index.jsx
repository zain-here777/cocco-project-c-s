import Slideshow from "../component/slider.jsx";
import PopularProducts from "../component/popularProducts.jsx";
import DiscountBanner from "../component/discountBanner.jsx";
import Newsletter from "../component/newsletter.jsx";
import OwlCarousel from "../component/owlCarousel.jsx";
import BestSellers from "../component/bestSellers.jsx";

function Home() {
    return (
        <>
            <Slideshow/>
            <PopularProducts/>
            <DiscountBanner/>
            <BestSellers/>
            <Newsletter/>
            <OwlCarousel/>
        </>
    )
}

export default Home;