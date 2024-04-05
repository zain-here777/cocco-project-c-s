import {useState} from "react";

function Counter() {

    const [count, setCount] = useState(1);

    const handleInc = (e) => {
        e.preventDefault()
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleDec = (e) => {
        e.preventDefault()
        if (count > 0) {
            const newCount = count - 1
            setCount(newCount)
        }
    }


    return (<>
        <div className="counter-wrapper">
            <span className='flex-grow-1' style={{fontSize: '14px'}}>
                Quantity
            </span>
            <div className='d-flex align-items-center gap-3 flex-grow-1'>
                <a onClick={handleDec} href='#'><i style={{fontSize: '12px'}} className="fa-solid fa-minus"></i></a>
                <p>{count}</p>
                <a onClick={handleInc} href='#'><i style={{fontSize: '12px'}} className="fa-solid fa-plus"></i></a>
            </div>
        </div>
    </>)
}

export default Counter