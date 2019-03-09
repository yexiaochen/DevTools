import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    fetch('./static/data.json')
      .then(res => res.json())
      .then(res => {
        const { data } = res;
        this.setState(state => {
          data && data.map((item, index) => {
            // if (index == 10) throw 'index == 10'
            item.index = index
          })
          return { ...state, data }
        })
      }).catch(error => {
        console.log('error', error)
      })
  }
  handleClick = item => {
    alert('Filesystem,hahahahaha')
    console.log('itemItem', item)
  }
  render() {
    const { data } = this.state
    return (
      <div className="App">
        {data.map((item, index) => <p onClick={(item) => this.handleClick(item)} key={index}>{item.index}: {item.name} => {item.age}</p>)}
      </div>
    );
  }
}

export default App;
