import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log(e);
    });

    return () => {
      console.log("componente desmontado");
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
    </div>
  );
};
