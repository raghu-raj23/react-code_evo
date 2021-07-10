import React from "react";
import Person from './Person.js';

function NameList() {
  // const alp = ["a", "b", "c"]
  // const alist = alp.map((person) => (<Person person = {person} /> ))
  // //we have to include a key prop in map which is unique for every component, it is not accessible by the child component
  // return <div>{alist}</div>;


  const alp = ["a", "b", "c", "a"]
  const alist = alp.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
  return <div>{alist}</div>;
}

export default NameList;
 