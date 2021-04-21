import React from 'react';
import { get } from '../../services/sw-service';

export default class Planet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      planet: {},
    };
  }
        
  async componentDidMount() {
    const planetObj = await get(`https://swapi.dev/api/planets/${this.props.index}/`);
    this.setState({ planet: planetObj });
  }

  render() {
    const { name, population, diameter, terrain } = this.state.planet;
    
    return (
      <div>
        <img src={`./assets/planets/${this.props.index}.jpg`}  alt="logo" />
        <h3>{name}</h3>
        <ul>
          <li>{population}</li>
          <li>{diameter}</li>
          <li>{terrain}</li>
        </ul>
      </div>
    )}
}