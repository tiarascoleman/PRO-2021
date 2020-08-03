import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horoscope: "",
      sign: ""
  };
}

  horoscopeReading = () => {
    alert('Zodiac Sign!');
  }

//performing three tasks: 1) handling an event, 2) making a call to the api, 3) udpating state (that was defined earlier)
handleHoroscopeChange = () => (event) => {
  const sign = event.target.value;
 // makeApiCall(sign).then(data => {
   // this.setState({
     // sign, 
      //horoscope: data.info
   // }); 
 // })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Learn about today's horoscope!
          </p>
          <a
            className="App-link"
            href="http://ohmanda.com/api/horoscope/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Astrology for today and tomorrow! :)
          </a>
        </header>
    <button onClick={this.horoscopeReading}>
    Click me!
    </button>
    <button onClick={this.horoscopeReading}>
    Click me!
    </button>
      </div>
    ); 
  }
}

export default App;
