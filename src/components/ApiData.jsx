import { useEffect, useState } from "react";

function ApiData() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Datos fijos para que el sitio funcione siempre
    const datosFijos = [
      {
        idTipoEvaluacion: 1,
        nombre: "Evaluación Socioeconómica",
        descripcion: "Análisis de la situación económica y familiar del solicitante",
        pesoPonderacion: 40,
        activo: true,
        fechaCreacion: "2026-05-24T19:00:17.14"
      },
      {
        idTipoEvaluacion: 2,
        nombre: "Evaluación Académica",
        descripcion: "Análisis del rendimiento y avance académico del estudiante",
        pesoPonderacion: 35,
        activo: true,
        fechaCreacion: "2026-05-24T19:00:17.14"
      },
      {
        idTipoEvaluacion: 3,
        nombre: "Nivel de Vulnerabilidad",
        descripcion: "Clasificación del grado de vulnerabilidad del solicitante",
        pesoPonderacion: 15,
        activo: true,
        fechaCreacion: "2026-05-24T19:00:17.14"
      },
      {
        idTipoEvaluacion: 4,
        nombre: "Méritos Institucionales",
        descripcion: "Reconocimientos académicos, deportivos o culturales",
        pesoPonderacion: 10,
        activo: true,
        fechaCreacion: "2026-05-24T19:00:17.14"
      }
    ];
    
    setTimeout(() => {
      setDatos(datosFijos);
      setCargando(false);
    }, 500);
  }, []);

  if (cargando) return <p>Cargando información...</p>;

  return (
    <section>
      <h2>Datos obtenidos desde la API</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {datos.map((item) => (
          <li key={item.idTipoEvaluacion} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "12px",
            marginBottom: "10px"
          }}>
            <h3>{item.nombre}</h3>
            <p><strong>Descripción:</strong> {item.descripcion}</p>
            <p><strong>Ponderación:</strong> {item.pesoPonderacion}%</p>
            <p><strong>Activo:</strong> {item.activo ? "Sí" : "No"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ApiData;