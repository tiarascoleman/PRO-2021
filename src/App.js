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

  makeApiCall = async (sign) => {
     const data = { "sign": "leo", "date": "2020-08-03", "horoscope": " Don't be too surprised if you find out that something is much different than you thought it was. The signs were there, but you just didn't take the time to see them. This should be a lesson to you. From now on, look more deeply at the issues that affect your life. Don't just follow along with what those in power say. Question authority. Not only will you be empowered, but you will show them that you are paying attention to what they're doing." };
     // return data;
  return Promise.resolve(data);
    }

//performing three tasks: 1) handling an event, 2) making a call to the api, 3) udpating state (that was defined earlier)
handleHoroscopeChange = (event) => {
  console.log("function is called upon")
  const sign = event.target.value;
   console.log(sign);
 this.makeApiCall(sign).then(data => {
   this.setState({
     sign, 
      horoscope: data.horoscope
   });
  console.log(data); 
})
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
    <p>
    {this.state.sign}
      </p> 
      <p> 
        {this.state.horoscope}
      </p>
                 <select onChange={this.handleHoroscopeChange}>
               <option>Leo</option>
                 <option>Aries</option>
             </select>
      </div>
    ); 
  }
}

export default App;
