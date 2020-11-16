import React, {Fragment, useState} from 'react';
// el siguiente modulo se importa para generar la id
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    // se crea el state de las citas
    const [cita, actualizarCita] = useState({
        paciente: '',
        correo: '',
        fecha: '',
        hora: '',
        sintomas:''
    });

    // state para validar el formulario
    const [error, actualizarError] = useState(false);


    // funcion que se actializa cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            // se crea una copia:
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    // se extraen los valores que se extraen en el formulario
    const {paciente, correo, fecha, hora, sintomas} = cita;

    // cuando se envia el formulario:
    const submitCita = e => {
        e.preventDefault();

        // validar
        if(paciente.trim() === '' || correo.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        // eliminiar el mensaje previo en caso de mostrar un error
        actualizarError(false);

        // asignar un ID
        cita.id = uuidv4();

        // crear la cita
        crearCita(cita);

        // reiniciar el form
        actualizarCita({
            paciente: '',
            correo: '',
            fecha: '',
            hora: '',
            sintomas:''
        });
    };


    return ( 
        <Fragment>
            <h2 className="text-center text-uppercase">Crear Cita</h2>
            {error ? <p className="text-center text-uppercase text-danger">Todos los campos son obligatorios</p> : null}
            <form
            
                // al validar el formulario:
                onSubmit={submitCita}
            
            >
                <div className="form-group">
                    <label>Nombre del paciente</label>
                    <input 
                        type="text"
                        name='paciente'
                        placeholder='Nombre del Paciente'
                        className="d-block form-control"
                        onChange={actualizarState}
                        value={paciente}
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input 
                        type="email"
                        name='correo'
                        placeholder='Correo electronico'
                        className="d-block form-control"
                        onChange={actualizarState}
                        value={correo}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input 
                        type="date"
                        name='fecha'
                        className="d-block form-control"
                        onChange={actualizarState}
                        value={fecha}
                    />
                </div>
                <div className="form-group">
                    <label>Hora</label>
                    <input 
                        type="time"
                        name='hora'
                        className="d-block form-control"
                        onChange={actualizarState}
                        value={hora}
                    />
                </div>
                <div className="form-group">
                    <label>Sintomas del Paciente</label>
                    <textarea 
                        name="sintomas"
                        className="d-block form-control"
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>
                </div>
                
                <button
                    type="submit"
                    className="d-block btn btn-primary mb-4"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;