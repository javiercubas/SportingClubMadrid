import { useState, useEffect } from 'react';
import './countDown.css';

export default function CountDown(props) {
    const { date, id } = props;
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = date;

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown">
            <div className="container">
                <h3 className='time dayMatch'>{days < 10 ? '0' + days : days}</h3>
                <h3 className='clock'>DAYS</h3>
            </div>

            <div className="container">
                <h3 className='time hour'>{hours < 10 ? '0' + hours : hours}</h3>
                <h3 className='clock'>HOURS</h3>
            </div>

            <div className="container">
                <h3 className='time minute'>{minutes < 10 ? '0' + minutes : minutes}</h3>
                <h3 className='clock'>MINUTES</h3>
            </div>

            <div className="container">
                <h3 className='time second'>{seconds < 10 ? '0' + seconds : seconds}</h3>
                <h3 className='clock'>SECONDS</h3>
            </div>
        </div>
    )
}