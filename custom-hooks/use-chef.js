import { useState, useEffect } from "react";

export default function useChef() {
  const [state, setState] = useState({});

  useEffect(() => {
    const chef = JSON.parse(localStorage.getItem("chef"));
    if (chef) {
      setState(chef);
    }
  }, []);

  const saveChef = (chef) => {
    if (chef) {
      localStorage.setItem("chef", JSON.stringify(chef));
      setState(chef);
      return;
    }
    throw new Error("Please add a chef");
  };

  return { saveChef, chef: state };
}
