import React, { useEffect, useState } from "react";
import "./App.css";

export const App = (props) => {
  const { items } = props;
  const [listCopy, setListCopy] = useState([]);
  let listItem = document.querySelectorAll("li");
  let list = [];
  if (listItem) {
    // listItem.click();
  }
   const onDocumentClick = (event) => {
    let copyList = [];
    copyList = list;
       if (event.target.id !== "") {
      var i = copyList.indexOf(
        document.getElementById(event.target.id).innerHTML
      );
      if (i !== -1) {
        copyList.splice(i, 1);
        copyList.unshift(document.getElementById(event.target.id).innerHTML);
        setListCopy([]);
        setListCopy(copyList);
        list = copyList;
      }
    }
  };

  useEffect(() => {
    setListCopy(items);
    list = items;
    document.addEventListener("click", onDocumentClick);
  }, [items]);
  
  

  return (
    <div>
      <ul>
        {listCopy &&
          listCopy.map((obj, i) => {
            return (
              <li key={i} id={i}>
                {obj}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
