import { set } from "astro:schema";
import { useState, useEffect } from "react";

const ServerStatus = () => {
  const [status, setStatus] = useState<string>("");
  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div>
      <h1 className="mt-4 text-center text-lg">Server Status</h1>
      <p className="text-center text-green-500">{status}</p>
    </div>
  );
};
export default ServerStatus;
