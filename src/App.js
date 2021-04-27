
import React, { useEffect, useState } from 'react';
import './App.css';

function App(props) {
  const { items } = props
  let listItem = document.querySelectorAll("li")[1];
  if (listItem) {
    listItem.click();


  }
  setTimeout(() => console.log(document.getElementById("root").innerHTML));

  return (
    <div>
      <ul>
        {items && items.map((obj, i) => {
          return (<li key={i}>{obj}</li>
          )
        })}

      </ul>

    </div>
  )
}

export default App;
