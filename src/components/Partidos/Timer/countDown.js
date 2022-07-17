import './countDown.css';

export default function CountDown() {

    const countDown= ()=> {
        const countDate= new Date("Jan 1, 2023 00:00:00").getTime();
        const now= new Date().getTime();

        const remainingTime=countDate-now;

        const second=1000;
        const minute= second*60;
        const hour=minute*60;
        const day=hour*24;

        const textDay= Math.floor(remainingTime/day);
        const textHour= Math.floor((remainingTime%day)/hour);
        const textMinute= Math.floor((remainingTime%hour)/minute);
        const textSeconds=Math.floor((remainingTime%minute)/second);

        document.querySelector(".dayMatch").innerText= textDay; 
        document.querySelector(".hour").innerText= textHour; 
        document.querySelector(".minute").innerText= textMinute; 
        document.querySelector(".second").innerText= textSeconds; 
    }

    setInterval(countDown, 500);

    return (
        <div className="countdown">
            <div className="container">
                <h3 className='time dayMatch'>00</h3>
                <h3 className='clock'>DAY</h3>
            </div>

            <div className="container">
                <h3 className='time hour'>00</h3>
                <h3 className='clock'>HOUR</h3>
            </div>

            <div className="container">
                <h3 className='time minute'>00</h3>
                <h3 className='clock'>MINUTE</h3>
            </div>

            <div className="container">
                <h3 className='time second'>00</h3>
                <h3 className='clock'>SECONDS</h3>
            </div>
        </div>
    )
}