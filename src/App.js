import React, { Component } from 'react';
import './App.css';

class App extends Component {
  	state = {
  		count: 0,
  		dis: "likes"
  	}
	
	counter = () => {
		var dis
		if (this.state.count === 0) {
			dis = 'like'
		} else {
			dis = 'likes'
		}

		this.setState({
			count: this.state.count + 1,
			dis: dis
		})
	}

	render(){
    return (
      <div className="like">
      <button id="click" onClick={this.counter}>{this.state.count} {this.state.dis}</button>
      </div>
    );
  }
}

export default App;
