import {useEffect} from "react";

function BreadCrumbsSec({text}) {
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const bgOffset = Math.max(-300, 0 - currentScroll * 0.5);
            document.querySelector('.breadcrumb-bg').style.backgroundPositionY = `${bgOffset}px`
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    return (
        <>
            <div className="breadcrumb-bg">
                <div className="container content">
                    <h4>Home - {text} </h4>
                </div>
            </div>
        </>
    )
}

export default BreadCrumbsSec;