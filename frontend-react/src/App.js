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
      <h1>Frontend en React</h1>
      <p>Mensaje del backend: {mensaje}</p>
    </div>
  );
}

export default App;

