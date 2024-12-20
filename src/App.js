import React from 'react';
import Employee from './Employee';
import Book from './Book';
import Laptop from './Laptop';
import Mobile from './Mobile';

export default function App() {
  return <div><h1>Root Component</h1>
        <hr/>
        <Mobile/>
        <hr/>
        <Laptop/>
        <hr/>
        <Book/>
         <hr/>
       <Employee/>
      </div>
        
}
