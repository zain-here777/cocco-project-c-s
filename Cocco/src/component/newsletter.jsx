import AnimatedBtn from "./animated-btn.jsx";

function Newsletter() {
    const customStyle = {    padding: '0px 100px 0px 0px'}
    return (
        <>
            <section className='news-container py-5'>
                <div className="container">
                    <div className='row align-items-center'>
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='news-heading text-white'>
                                Subscribe to Newsletter
                            </h3>
                        </div>
                        <div className='col-lg-8 col-sm-12'>
                            <form action="" className='d-flex flex-wrap justify-content-center gap-3'>
                                <input type="text" className='form-control news-input' style={{
                                    maxWidth: "400px",
                                    backgroundColor: "#7dd1ca",
                                    border: "1px solid #72cbc4",
                                    color: 'white',
                                }}
                                       placeholder='Your email'/>
                                <AnimatedBtn btnText = 'Subscribe' customStyle = {customStyle}/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter;