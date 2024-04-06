import {Link} from "react-router-dom";
import PreviewIcon from "./previewIcon.jsx";
import StarRating from "./starRating.jsx";
import {useProductContext} from "../context/productContext.jsx";
import AddCart from "../pages/addCart.jsx";
import CartBtn from "./cartBtn.jsx";
import {Skeleton} from "@mui/material";


const firstCard = {
    backgroundColor: "#f85f89",
}
const secondCard = {
    backgroundColor: "rgb(2, 3, 129)"
}
const thirdCard = {
    backgroundColor: "#dce086",
}


function PopularProducts() {
    const {products, isLoading} = useProductContext();

    // To show the limted products on the Home Page //
    const slicedata = products.slice(0, 8)


    return (
        <>
            <section className="products-container">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card text-center product-card" style={firstCard}>
                                <div className="card-body">
                                    <h5 className="card-title">Modern Girl</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card text-center product-card" style={secondCard}>
                                <div className="card-body">
                                    <h5 className="card-title">Urban Boy</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card text-center product-card" style={thirdCard}>
                                <div className="card-body">
                                    <h5 className="card-title">Magic Toys</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    slicedata.map((product, index) => (
                                        <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                                            <div
                                                className='d-flex justify-content-center flex-column align-items-center'>
                                                <div className="card popular-card">
                                                    <Link to={`/product/${product.id}`} className='popular-card-link'>
                                                        <div>
                                                            {
                                                                product.images && product.images.length > 0 &&
                                                                <img src={product.images[0].src} alt=""
                                                                     className="card-image"/>
                                                            }
                                                            <div className="product-status">
                                                                {product.stock_status.toUpperCase()}
                                                            </div>
                                                        </div>
                                                        <div className="card-overlay popular-card-overlay top">
                                                            <div className="card-body">
                                                                <CartBtn product={product}/>
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
            </section>
        </>
    )
}

export default PopularProducts;