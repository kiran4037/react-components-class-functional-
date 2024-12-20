
import React from 'react';

export default class Book extends React.Component{
  constructor(){
    super();
    this.state={
       id:1011,
       name:'poor people rich people',
       price:560,
       stores:['sr nagar','ameerpet'],

    };
  }
  render(){
    return (
    <div>
    <h1> Book class component</h1>
    <p>ID:{this.state.id} <br/>NAME:{this.state.name} <br/>PRICE:{this.state.price} <br/>STORES:{this.state.stores.map((store)=>(<li>{store}</li>))}</p>
    </div>
    )
  }
}