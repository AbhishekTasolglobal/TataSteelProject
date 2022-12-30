import React from "react";
import { useState } from "react";



const Widgets = () => {

    const [divs, setDivs] = useState([
    { id: 1, 
      text: "Total Assets", 
      total: "234", 
      link: " View all assets",
    },
    {
      id: 2,
      text: "Total Work Order Issued",
      total: "2341",
      link: " View all work order",
    },
    {
      id: 3,
      text: "Total Escalations",
      total: "1934",
      link: " View all escalations",
    },
  ]);

  const onDragStart = (e, index) => {
    // Store the current index of the div being dragged in the data-index attribute of the draggable element
    e.dataTransfer.setData("index", index);
  };

  const onDragOver = (e) => {
    // Prevent default behavior (prevent file from being opened)
    e.preventDefault();
  };

  const onDrop = (e, index) => {
    // Get the index of the div being dragged from the data-index attribute
    const dragIndex = e.dataTransfer.getData("index");

    // Make a copy of the divs array
    const newDivs = [...divs];

    // Swap the positions of the dragged div and the div it was dropped on
    const temp = newDivs[dragIndex];
    newDivs[dragIndex] = newDivs[index];
    newDivs[index] = temp;

    // Update the state with the new divs array
    setDivs(newDivs);
  };
 

  console.log(divs)


  return (
    <div className="container">
      <div className="row">
      {divs.map((div, index) => (
        <div className="col-md-4"       
            key={div.id}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
          >
          
            {
                <div class="card" >
                  <div class="card-body">
                    <h5 class="card-title">{div.text}</h5>
                    <p class="card-number">{div.total}</p>
                    <a href="#" class="card-link">
                      {div.link}
                    </a>                  
                  </div>
                </div>                
              
            } 
            </div>         
      
      ))}
      </div>
    </div>
  );
};

export default Widgets;

