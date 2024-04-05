// eslint-disable-next-line react/prop-types
function AnimatedBtn({btnText, customStyle}) {
    return (<>
        <a className='discount-learn-btn text-center' href="">
            <span style={customStyle}>{btnText}</span>
            <span className='discount-animate-btn'>
                <span>
                    <i className="fa-solid fa-rocket"></i>
                    <i className="fa-solid fa-angle-right"></i>
                </span>
            </span>
        </a>
    </>)
}

export default AnimatedBtn;