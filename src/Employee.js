import React from 'react';

export default function Employee(){
    let id=101;
    let name="kiran";
    let phoneNumbers=[6281459700,7032920754];
    let address={
      hno:"12-207-1",
      city:"podili",
      pincode:523240
    };
    let educationDetails=[
      {degree:"ssc",per:85,year:2017},
      {degree:"12th",per:93,year:2019},
      {degree:"B.tech",per:74,year:2023}
    ];


  return (
  <div>
    <h1>Employee functional Component</h1>
    <p>ID={id}</p>
    <p>NAME={name}</p>
    <p>PHONE NUMBERS{phoneNumbers.map((phone)=>(<li>{phone}</li>))}</p>
    <p>ADDRESS: {address.hno},{address.city},{address.pincode}</p>
    <table border="1px">
      <thead>
        <tr>
          <th>degree</th>
          <th>per</th>
          <th>year</th>
        </tr>


      </thead>
      <tbody>
        {educationDetails.map((education)=>(
          <tr>
            <td>{education.degree}</td>
            <td>{education.per}</td>
            <td>{education.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>
  )
}