import React from 'react';
import './App.css';
import Header from '../header/Header';
import Person from '../persons/Person';
import Starship from '../starships/Starship';
import Planet from '../planets/Planet';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 'People',
      indexTab: 1
    };
    this.handleChildClick = this.handleChildClick.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  handleChildClick(tabName) {
    this.setState({tab: tabName})
  }

  async getNext() {
    const nextIndex = this.state.indexTab + 1;
    console.log('nextIndex', nextIndex);
    await this.setState(st => {
      st.indexTab = +nextIndex
    })
  }
  render() {
    const { tab, indexTab } = this.state;
    console.log(indexTab);
    return (
        <div className="App">
          <Header className="App-header" onHeaderClick={this.handleChildClick}></Header>
          <div>
          <button className="button" onClick={this.getNext}>NEXT</button>
          </div>
          <div>
            <div className={tab==='People'? 'show' : 'hide'}>
            <Person index={ indexTab }></Person>
            </div>
            <div className={tab==='Planets'? 'show' : 'hide'}>
              <Starship index={ indexTab+1 }></Starship>
            </div>
            <div className={tab==='Starhips'? 'show' : 'hide'}>
              <Planet index={ indexTab }></Planet>
            </div>
          </div>
        </div>
    )}
}