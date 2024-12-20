import React from 'react';

export default function Laptop(){
   let id=102;
   let description="These are very high performance laptops";
   let price=50000;
   let colors=["black","white"];
   let memory={
     ram:"2gb",
     rom:"32gb",
   };
   let camera={
    front:"8px",
    back:"32px"
   };
   let variants=[
     {type:"black",price:50000,processor:"i5"},
     {type:"white",price:55000,processor:"i7"}
   ];
  return (
  <div>
   <h1>Laptop component</h1>
   <p>ID={id}</p>
   <p>DESCRIPTION={description}</p>
   <p>PRICE={price}</p>
   <p>COLORS={colors.map((color)=>(<li>{color}</li>))}</p>
   <p>MEMORY={colors.map((mem)=>(<li>{mem}</li>))}</p>
   <table border="1px">
     <thead>
       <tr>
         <th>type</th>
         <th>price</th>
         <th>processor</th>
       </tr>
     </thead>
     <tbody>
       {variants.map((variant)=>(
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