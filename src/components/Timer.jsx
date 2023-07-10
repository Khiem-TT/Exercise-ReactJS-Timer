import {useState, useEffect} from "react";

function Timer() {
    const [time, setTime] = useState(3);
    useEffect(() => {
        if (time === 0) return setTimeout(() => alert('Time’s up'));
        let countdown = setInterval(() => {
            setTime(time - 1);
        }, 1000);
        return () => clearInterval(countdown);
    }, [time]);
    return (
        <p>Count down from {time}</p>
    )
}

export default Timer;