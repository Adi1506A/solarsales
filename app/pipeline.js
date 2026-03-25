"use client";
import { useEffect, useState } from "react";

export default function Pipeline() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(data);
  }, []);

  return (
    <div className="p-5 grid grid-cols-3 gap-4">
      
      <div>
        <h2>Leads</h2>
        {projects.filter(p => !p.salesApproved).map((p, i) => (
          <div key={i} className="border p-2">{p.projectName}</div>
        ))}
      </div>

      <div>
        <h2>Sales Approved</h2>
        {projects.filter(p => p.salesApproved && !p.designApproved).map((p, i) => (
          <div key={i} className="border p-2">{p.projectName}</div>
        ))}
      </div>

      <div>
        <h2>Design Approved</h2>
        {projects.filter(p => p.designApproved).map((p, i) => (
          <div key={i} className="border p-2">{p.projectName}</div>
        ))}
      </div>

    </div>
  );
}
