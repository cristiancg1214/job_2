import React, { useEffect, useState } from "react";
import "./App.css";

export const App = (props) => {
  const { items } = props;
  const [listCopy, setListCopy] = useState(items);
  const onDocumentClick = (event) => {
    if (event.target.id !== "" && event.target.id !== -1) {
      listCopy.unshift(listCopy.splice(event.target.id, 1)[0]);
      setListCopy([...listCopy]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onDocumentClick);
  }, []);

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
