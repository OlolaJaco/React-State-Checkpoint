import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A software developer from Nigeria.",
        imgSrc: "./passport roundneck.jpg",
        profession: "Web Developer"
      },
      shows: false,
      timeSinceMounted: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Lifecycle Method: componentDidMount
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1
      }));
    }, 1000);
  }

  // Lifecycle Method: componentWillUnmount
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Method to toggle the 'shows' state
  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div className="profile">
            <h1>{this.state.person.fullName}</h1>
            <img src={this.state.person.imgSrc} alt="profile" />
            <p>{this.state.person.bio}</p>
            <h2>{this.state.person.profession}</h2>
          </div>
        )}

        <p>Time since component mounted: {this.state.timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
