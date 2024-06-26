import {Link} from "react-router-dom";
import PreviewIcon from "../component/previewIcon.jsx";
import StarRating from "../component/starRating.jsx";
import {useProductContext} from "../context/productContext.jsx";
import BreadCrumbsSec from "../component/breadCrumbsSec.jsx";
import {Skeleton} from "@mui/material";

function Products() {
    const {products, isLoading} = useProductContext();
    return (
        <>
            <BreadCrumbsSec text='Products'/>
            <div className="popular-container">
                <div className="container">
                    <div className='section-header text-center'>
                        <h1>
                            Popular Products
                        </h1>
                        <p>
                            Made with care for your little ones, our products are perfect for every <br/> occasion.
                            Check
                            it
                            out.
                        </p>
                    </div>
                    <div className="row mb-5">
                        {
                            isLoading ? (
                                Array.from({length: 8}).map((_, index) => (
                                    <div className="col-lg-3 mb-3 d-flex flex-column align-items-center ">

                                        <Skeleton variant='rounded' width={250}
                                                  height={300} animation='wave'/>
                                        <div className=' mt-3 d-flex align-items-center flex-column'>
                                            <Skeleton variant='text' width={150}/>
                                            <Skeleton variant='text' width={120}/>
                                            <Skeleton variant='text' width={50}/>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                products.map((product, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                                        <div className='d-flex justify-content-center flex-column align-items-center'>
                                            <div className="card popular-card">
                                                <Link to={`/product/${product.id}`} className='popular-card-link'>
                                                    <div>
                                                        {
                                                            product.images && product.images.length > 0 &&
                                                            <img src={product.images[0].src} alt=""
                                                                 className="card-image"/>
                                                        }
                                                        <div className="product-status">
                                                            New
                                                        </div>
                                                    </div>
                                                    <div className="card-overlay popular-card-overlay top">
                                                        <div className="card-body">
                                                            <a href="">
                                                                <button className="popular-cart-btn btn">Add to cart
                                                                </button>
                                                            </a>
                                                        </div>
                                                        <div className="popular-icons">
                                                            <div className='icon-heart'>
                                                                <a href="">
                                                                    <i className="dripicons-heart"></i>
                                                                </a>
                                                            </div>
                                                            <PreviewIcon/>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular-card-content card-body">
                                                <h5>{product.name}</h5>
                                                <StarRating/>
                                                <div>
                                                    <h5 className='popular-price'>${product.price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;