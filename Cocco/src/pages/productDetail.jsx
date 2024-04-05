import {useParams} from "react-router-dom"
import BreadCrumbsSec from "../component/breadCrumbsSec.jsx";
import StarRating from "../component/starRating.jsx";
import Counter from "../component/counter.jsx";
import {useProductContext} from "../context/productContext.jsx";
import CartBtn from "../component/cartBtn.jsx";
import {useState} from "react";

function ProductDetail() {
    const {id} = useParams();
    const {products, quantity} = useProductContext();
    const product = products.find(product => product.id === parseInt(id))
    const style = {display: 'inline-block'}
    return (<>
        <BreadCrumbsSec text='Product Detail'/>
        <div className="container detail-pg-container">
            <div className="row">
                {
                    product ? (
                        <>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img style={{maxWidth: "500px"}} src={product.images[0].src} alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="detail-content">
                                        <h3 className='detail-title'>{product.name}</h3>
                                        <StarRating style={style}/>
                                        <h4>${product.price}</h4>
                                        <p className='detail-desc'
                                           dangerouslySetInnerHTML={{__html: product.short_description}}/>
                                        <div className='cart-container'>
                                            <Counter/>
                                            <CartBtn product={product} quantity={quantity}/>
                                        </div>
                                        <div className="product-info">
                                            <div className='d-flex align-items-center gap-3 pb-2'>
                                                <h6>SKU :</h6>
                                                <p>{product.sku}</p>
                                            </div>
                                            <div className='d-flex align-items-center gap-3'>
                                                <h6>
                                                    Category:
                                                </h6>
                                                <p>{product.categories[0].name}</p>
                                            </div>
                                            <div className='d-flex align-items-center gap-3'>
                                                <h6>
                                                    Tags:
                                                </h6>
                                                <p>Wool</p>
                                            </div>
                                            <div className='d-flex align-items-center gap-3'>
                                                <h6>
                                                    Share:
                                                </h6>
                                                <div className="social-icons-container m-0">
                                                    <a href='#' className='insta'>
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </a>
                                                    <a href='#' className='twitter'>
                                                        <i className="fa-brands fa-twitter"></i>
                                                    </a>
                                                    <a href='#' className='facebook'>
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row " style={{margin: '100px 0px'}}>
                                <div className="container">
                                    <div className="col-lg-12">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                        data-bs-target="#home" type="button" role="tab"
                                                        aria-controls="home" aria-selected="true">Description
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                        data-bs-target="#profile" type="button" role="tab"
                                                        aria-controls="profile" aria-selected="false">Additional
                                                    Information
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                                 aria-labelledby="home-tab">
                                                <h5>About</h5>
                                                <p className='pt-2'
                                                   dangerouslySetInnerHTML={{__html: product.description}}/>
                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel"
                                                 aria-labelledby="profile-tab">
                                                <div className='d-flex align-items-center gap-2'>
                                                    <p>Weight  </p>
                                                    <p style={{color:'gray'}}>{product.weight} kg</p>
                                                </div>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <p>Dimensions  </p>
                                                    <p  style={{color:'gray', fontSize:'14px'}}className='d-flex align-items-center gap-1'>{product.dimensions.length} <i className="fa-solid fa-xmark"
                                                                                      style={{color: 'gray'}}></i> {product.dimensions.width}
                                                        <i style={{color: 'gray'}}
                                                           className="fa-solid fa-xmark"></i> {product.dimensions.height} cm
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='text-center'>
                            <h1>There is no Such Product!</h1>
                        </div>
                    )
                }
            </div>
        </div>
    </>);
}

export default ProductDetail;
