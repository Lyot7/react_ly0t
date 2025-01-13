"use client";
import { useEffect } from "react";

const Veille: React.FC = () => {
  const getNotionDB = async () => {
    try {
      const response = await fetch("/api/getNotionDB");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNotionDB();
  }, []);

  return (
    <section>
      {/* Your component content */}
    </section>
  );
};

export default Veille;