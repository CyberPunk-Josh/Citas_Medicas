import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import "bootstrap/dist/css/bootstrap.min.css";
import Cita from './components/Cita';

function App() {

  // citas en local storage
  // Json.parse es para convertir el arreglo de citas en un string, ya que localstorage solo guarda strings
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  // arreglo de citas:
  const [citas, guardarCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones si el state cambia:
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // funcion que guarde las citas previas y agrege una nueva:
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // funcion para eliminar citas:
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }


  return (
    <Fragment>
    
    <section className="fondo">
      <div className="d-flex flex-column align-items-center justify-content-center titulo">
       <h1>Citas <span>Médicas</span> </h1>
       <p className="mt-4">Agenda aquí tus citas</p>
       <i className="fas fa-chevron-down mt-5"></i>
      </div>
    </section>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
        <div className="col-md-6 text-center">
          {citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
