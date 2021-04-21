import React from 'react';
import { get } from '../../services/sw-service';

export default class Starship extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      starship: {},
    };
  }
        
  async componentDidMount() {
    const starshipObj = await get(`https://swapi.dev/api/starships/${this.props.index}/`);
    this.setState({ starship: starshipObj });
  }

  render() {
    const { name, model, length, crew } = this.state.starship;
    
    return (
      <div>
        <img src={`./assets/starships/${this.props.index}.jpg`}  alt="logo" />
        <h3>{name}</h3>
        <ul>
          <li>{model}</li>
          <li>{length}</li>
          <li>{crew}</li>
        </ul>
      </div>
    )}
}