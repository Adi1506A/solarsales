"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const login = () => {
    localStorage.setItem("user", email);
    router.push("/");
  };

  return (
    <div className="p-10">
      <h1>Login</h1>
      <input
        className="border p-2"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login} className="ml-2">
        Login
      </button>
    </div>
  );
}
