import { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []); // [] asegura que el efecto se ejecute solo una vez al montar

  return <p>Hora actual: {hora}</p>;
}

export default Reloj;
