"use client";
import { useEffect } from "react";

const Veille: React.FC = () => {
  const getData = async () => {
    try {
      const response = await fetch("/api/notion");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      {/* Your component content */}
    </section>
  );
};

export default Veille;