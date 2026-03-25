"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(data);
  }, []);

  const updateStatus = (index, field) => {
    let updated = [...projects];
    updated[index][field] = true;
    localStorage.setItem("projects", JSON.stringify(updated));
    setProjects(updated);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Solar CRM Dashboard</h1>

      {projects.map((p, i) => (
        <div key={i} className="border p-4 mt-3 rounded">
          <h2>{p.projectName}</h2>
          <p>{p.client}</p>

          {!p.salesApproved && (
            <button onClick={() => updateStatus(i, "salesApproved")}>
              Approve Sales
            </button>
          )}

          {p.salesApproved && !p.designApproved && (
            <button onClick={() => updateStatus(i, "designApproved")}>
              Approve Design
            </button>
          )}

          {p.designApproved && <p>✅ Ready for Execution</p>}
        </div>
      ))}
    </div>
  );
}
