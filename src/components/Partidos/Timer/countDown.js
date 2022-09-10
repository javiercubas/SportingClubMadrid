import './countDown.css';

export default function CountDown(props) {
    const { date, id } = props;

    function countDown(i) {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();

        const remainingTime = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(remainingTime / day);
        const textHour = Math.floor((remainingTime % day) / hour);
        const textMinute = Math.floor((remainingTime % hour) / minute);
        const textSeconds = Math.floor((remainingTime % minute) / second);

        
            document.getElementsByClassName("dayMatch")[id].innerText = textDay;
            document.getElementsByClassName("hour")[id].innerText = textHour;
            document.getElementsByClassName("minute")[id].innerText = textMinute;
            document.getElementsByClassName("second")[id].innerText = textSeconds;
    }

    setInterval(countDown, 500)

    return (
        <div className="countdown">
            <div className="container">
                <h3 className='time dayMatch'>00</h3>
                <h3 className='clock'>DAYS</h3>
            </div>

            <div className="container">
                <h3 className='time hour'>00</h3>
                <h3 className='clock'>HOURS</h3>
            </div>

            <div className="container">
                <h3 className='time minute'>00</h3>
                <h3 className='clock'>MINUTES</h3>
            </div>

            <div className="container">
                <h3 className='time second'>00</h3>
                <h3 className='clock'>SECONDS</h3>
            </div>
        </div>
    )
}