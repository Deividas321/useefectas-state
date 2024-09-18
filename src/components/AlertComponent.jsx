import { useState, useEffect } from "react";

function AlertComponent({ type, message, delay }) {
  const [showAlert, setShowAlert] = useState(true);

  // Uždaryti pranešimą su animacija
  const closeAlert = (event) => {
    // Pridėkite klasę, kad įjungtumėte fade animaciją
    const alertElement = event.target.parentElement.parentElement;
    alertElement.classList.add("fadeAlert");


    setTimeout(() => {
      setShowAlert(false);
    }, 500); // 500ms - laikas animacijai
  };

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, delay);

      // Valymo funkcija, kad išvengtume problemų, kai komponentas pašalinamas anksčiau
      return () => clearTimeout(timer);
    }
  }, [delay]);



  return (
    showAlert && (
      <div className={`alert alert-${type}`}>
        <div className="alert-close">
          <span className="mr-1">{message}</span>
          <button
            onClick={closeAlert} // Uždaryti pranešimą mygtuko paspaudimu
            style={{ background: "transparent", border: "none", cursor: "pointer" }}
          >
            X
          </button>
        </div>
      </div>
    )
  );
}

export default AlertComponent;

