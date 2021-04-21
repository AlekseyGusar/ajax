import React from 'react';
import { get } from '../../services/sw-service';

export default class Person extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      person: {},
    };
  }
        
  async componentDidMount() {
    const personObj = await get(`https://swapi.dev/api/people/${this.props.index}/`);
    this.setState({ person: personObj });
  }

  render() {
    const { name, gender, birth_year, eye_color } = this.state.person;
    
    return (
      <div>
        <img src={`./assets/persons/${this.props.index}.jpg`}  alt="logo" />
        <h3>{name}</h3>
        <ul>
          <li>{gender}</li>
          <li>{birth_year}</li>
          <li>{eye_color}</li>
        </ul>
      </div>
    )}
}