import AnimatedBtn from "./animated-btn.jsx";
function DiscountBanner() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 discount-col-1">
                    </div>
                    <div className="col-lg-6 col-sm-12 discount-col-2 d-flex align-items-center justify-content-center">
                        <div className="discount-container p-5">
                            <div className="discount-header">
                                <h1 className='discount-pkg'>
                                    50% Sale
                                </h1>
                                <br/>
                                <h2 className='discount-tagline'>
                                    We make shopping easy.
                                </h2>
                            </div>
                            <p className='text-white text-center py-5' style={{fontSize: '19px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consequuntur
                                cum deleniti, doloremque eligendi est et facilis fugiat modi molestiae, necessitatibus
                                nostrum quibusdam quis repudiandae tempore temporibus veniam?
                            </p>
                            <div className='text-center'>
                            <AnimatedBtn btnText='Learn More'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountBanner;