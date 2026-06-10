import { useEffect, useState } from "react";

function ApiData() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // USANDO EL PROXY - No necesita la URL completa
 const API_URL = `${import.meta.env.VITE_API_URL}/api/tipoevaluacion`;

  useEffect(() => {
    console.log("Llamando a proxy:", API_URL);
    
    fetch(API_URL)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`HTTP ${respuesta.status}`);
        }
        return respuesta.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setDatos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando información...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!datos.length) return <p>No hay datos para mostrar</p>;

  return (
    <section>
      <h2>Datos obtenidos desde la API</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {datos.map((item) => (
          <li
            key={item.idTipoEvaluacion}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "12px",
              marginBottom: "10px"
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{item.nombre}</h3>
            <p><strong>Descripción:</strong> {item.descripcion || "Sin descripción"}</p>
            <p><strong>Ponderación:</strong> {item.pesoPonderacion}%</p>
            <p><strong>Activo:</strong> {item.activo ? "Sí" : "No"}</p>
            <p><strong>Fecha creación:</strong> {new Date(item.fechaCreacion).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ApiData;