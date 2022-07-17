import './countDown.css';

export default function CountDown() {
    function countDown(i) {
        const countDate = new Date("2022/08/22 21:00:00").getTime();
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

        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName("dayMatch")[i].innerText = textDay;
            document.getElementsByClassName("hour")[i].innerText = textHour;
            document.getElementsByClassName("minute")[i].innerText = textMinute;
            document.getElementsByClassName("second")[i].innerText = textSeconds;
        }
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