function StarRating({style}) {
    return (
        <>
            <div style={style} className="rating left">
                <div className="stars right">
                    <a className="star rated"></a>
                    <a className="star rated"></a>
                    <a className="star rated"></a>
                    <a className="star"></a>
                    <a className="star"></a>
                </div>
            </div>
        </>
    )
}

export default StarRating;