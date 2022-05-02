import React, { Component } from "react";
import { useState } from "react";

const Usestate = () => {
  // const [state, setState] = useState(intialState);
  // const [state, setState] = useState(1);
  const courses = [
    {
      id: 1,
      name: "Java",
    },
    {
      id: 2,
      name: "Python",
    },
    {
      id: 3,
      name: "NodeJS",
    },
  ];

  const [checked, setChecked] = useState([]);

  const handleChecked = (id) => {
    setChecked((prev) => {
      if(checked.includes(id)){
        return checked.filter(item=>item!==id);
      }else{
        return [...prev,id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div style={{ margin: "24px" }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type={"checkbox"}
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Usestate;
