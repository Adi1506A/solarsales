"use client";
import { useState } from "react";

export default function Projects() {
  const [projectName, setProjectName] = useState("");
  const [client, setClient] = useState("");

  const saveProject = () => {
    const data = JSON.parse(localStorage.getItem("projects")) || [];

    data.push({
      projectName,
      client,
      salesApproved: false,
      designApproved: false
    });

    localStorage.setItem("projects", JSON.stringify(data));

    alert("Project Added");
  };

  return (
    <div className="p-5">
      <h1>Add Project</h1>

      <input
        placeholder="Project Name"
        className="border p-2 block mt-2"
        onChange={(e) => setProjectName(e.target.value)}
      />

      <input
        placeholder="Client Name"
        className="border p-2 block mt-2"
        onChange={(e) => setClient(e.target.value)}
      />

      <button onClick={saveProject} className="mt-3">
        Save
      </button>
    </div>
  );
}
