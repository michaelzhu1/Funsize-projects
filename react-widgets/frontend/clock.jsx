import React from 'react';


class Clock extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      time: new Date()
    };
    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.interval = setInterval(() => {
      this.setState({time: new Date()});
      this.setDate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setDate() {
    const seconds = this.state.time.getSeconds();
    const minutes = this.state.time.getMinutes();
    const hours = this.state.time.getHours();
    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
    let secondsDegrees = seconds / 60 * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    let minutesDegrees = minutes / 60 * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    let hoursDegrees = hours / 12 * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return(
      <div>
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand second-hand"></div>
          </div>
          <div className="">
            <h1>Clock</h1>
            <p>
              <span>
                Time:
              </span>
              <span>
                {hours} : {minutes} : {seconds}
              </span>
            </p>
            <p>
              <span>
                Date:
              </span>
              <span>
                {this.state.time.toDateString()}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}



export default Clock;
