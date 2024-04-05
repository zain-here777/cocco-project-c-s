import {useProductContext} from "../context/productContext.jsx";
import StarRating from "./starRating.jsx";
import {Link} from "react-router-dom";

function BestSellers() {
    const {products} = useProductContext()
    return (<>
        <div className="container best-seller-sec">
            <div className="row">
                <h1 className='heading p-0'>Best Sellers</h1>
                {products.map((product, index) => (
                    <div key={index} className="col-lg-3 mb-3">
                        <Link className='nav-link' to={`/product/${product.id}`}>
                            <div className='d-flex align-items-center gap-3'>
                                <img src={product.images[0].src} alt="" style={{maxWidth: '112px'}}/>
                                <div className='d-flex flex-column'>
                                    <h5>{product.name}</h5>
                                    <StarRating/>
                                    <h5>${product.price}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    </>)
}

export default BestSellers