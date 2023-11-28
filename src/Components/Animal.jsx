import { Component } from "react";

export default class Animal extends Component {
  // constructor: state that we can change through props
  constructor (props) { // {height: '400miles'}
    super(props);
    this.state = {
      height: props.height,
    }
  }
  

  // class AnimalComponent extends Component {
  //   constructor(props) {
  //     super(props);
  
  //     // Set initial state during instantiation
  //     this.state = {
  //       name: props.name,
  //       species: props.species,
  //       // ... other state properties
  //     };
  //   }
  
  //   render() {
  //     return (
  //       <div>
  //         <p>Name: {this.state.name}</p>
  //         <p>Species: {this.state.species}</p>
  //       </div>
  //     );
  //   }
  // }


  // methods and properties that each instance of this class would have
  eat() { 
    alert('yummy');
  }
  sleep() {
    alert('zzz');
  }

  static livingThing = true;
  // methods and properties
  render() {
    console.log('this---------->', this)  
    const str = `Hi, I am an animal of ${this.state.height}!`;
    return <h2>{str}!</h2>
  }
}



// giraffe.eat()
// console.log(giraffe.height)
// console.log('girafe-----------------------------', giraffe)