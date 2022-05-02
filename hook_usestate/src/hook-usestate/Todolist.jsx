import React, { Component } from "react";
import { useState } from "react";

const Todolist = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleAdd = () => {
    setJobs((prev) => [...prev, job]);
    setJob('');
  };

  return (
    <div style={{ textAlign: "center", padding: 100 }}>
      <input type="text" value={job}
        onChange={e=>setJob(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>

      <ul style={{listStyleType:"none"}}>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
