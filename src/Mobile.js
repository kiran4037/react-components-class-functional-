import React from 'react';


export default class Mobile extends React.Component{
    constructor(){
      super();
      this.state={
        id:101,
        description:"These are new mobiles",
        price:40000,
        colors:["black","white"],
        memory:{
          ram:"4gb",
          rom:"64gb"
        },
        camera:{
          front:"8px",
          back:"32px"
        },
        variants:[
          {type:"black",price:56000,processor:"i5"},
          {type:"white",price:57000,processor:"i7"}

        ],
      }
    }
  render(){
    return(
      <div>
        <h1>Mobile component</h1>
        <p>ID:{this.state.id}</p>
        <p>DESCRIPTION:{this.state.description}</p>
        <p>PRICE:{this.state.price}</p>
        <p>COLORS:{this.state.colors.map((color)=>(<li>{color}</li>))}</p>
        <p>MEMORY:<br/>
          RAM:{this.state.memory.ram} <br/>
          ROM:{this.state.memory.rom}
          </p>
          <p>CAMERA:<br/>
          front:{this.state.camera.front} <br/>
          back:{this.state.camera.back}
          </p>
          <table border="1px">
            <thead>
              <tr>
                <th>type</th>
                <th>price</th>
                <th>processor</th>
              </tr>
            </thead>
            <tbody>
              {this.state.variants.map((variant)=>(
       <tr>
         <td>{variant.type}</td>
         <td>{variant.price}</td>
         <td>{variant.processor}</td>
       </tr>
       ))}
            </tbody>
          </table>
      </div>
    )
  }
}