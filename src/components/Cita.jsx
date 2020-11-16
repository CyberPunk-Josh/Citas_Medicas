import React from 'react';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita p-3 mb-3">
        <p>Paciente: <span>{cita.paciente}</span></p>
        <p>Correo: <span>{cita.correo}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button 
            className="btn btn-danger"
            onClick={ () => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
);
 
export default Cita;