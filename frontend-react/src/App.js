import React, { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch("http://localhost:8000/api/saludo/")
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Curso con AWS & Github</h1>
      <p>Saludos, nuevos cambios {mensaje}</p>
    </div>
  );
}

export default App;

