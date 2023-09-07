import React, { useState } from 'react';

function Form() {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sexo, setSexo] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [registros, setRegistros] = useState([]);

  const validarCampos = () => {
    const expresionRegularNombre = /^[a-zA-Z\s]+$/;
    const expresionRegularEdad = /^\d+$/;
    const expresionRegularTelefono = /^\d{10}$/;
    const expresionRegularCodigoPostal = /^\d{5}$/;

    if (!expresionRegularNombre.test(nombre)) {
      alert('El nombre solo debe contener letras y espacios.');
      return false;
    }

    if (!expresionRegularNombre.test(apellidoPaterno)) {
      alert('El apellido paterno solo debe contener letras y espacios.');
      return false;
    }

    if (!expresionRegularNombre.test(apellidoMaterno)) {
      alert('El apellido materno solo debe contener letras y espacios.');
      return false;
    }

    if (!expresionRegularEdad.test(edad)) {
      alert('La edad debe ser un número entero.');
      return false;
    }

    if (!expresionRegularTelefono.test(telefono)) {
      alert('El teléfono debe ser un número de 10 dígitos.');
      return false;
    }

    if (sexo !== 'Masculino' && sexo !== 'Femenino') {
      alert('El sexo debe ser "Masculino" o "Femenino".');
      return false;
    }

    if (!expresionRegularCodigoPostal.test(codigoPostal)) {
      alert('El código postal debe ser un número de 5 dígitos.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarCampos()) {
      const nuevoRegistro = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        correo,
        edad,
        telefono,
        sexo,
        codigoPostal,
        contrasena,
        nacionalidad,
      };

      setRegistros([...registros, nuevoRegistro]);

      setNombre('');
      setApellidoPaterno('');
      setApellidoMaterno('');
      setCorreo('');
      setEdad('');
      setTelefono('');
      setSexo('');
      setCodigoPostal('');
      setContrasena('');
      setNacionalidad('');
    }
  };

  return (
    <div className="app">
      <h1>Formulario de Encuestas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
        <input
          type="text"
          id="apellidoPaterno"
          name="apellidoPaterno"
          required
          value={apellidoPaterno}
          onChange={(e) => setApellidoPaterno(e.target.value)}
        />
        <br />
        <label htmlFor="apellidoMaterno">Apellido Materno:</label>
        <input
          type="text"
          id="apellidoMaterno"
          name="apellidoMaterno"
          required
          value={apellidoMaterno}
          onChange={(e) => setApellidoMaterno(e.target.value)}
        />
        <br />
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          required
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <br />
        <label htmlFor="edad">Edad:</label>
        <input
          type="text"
          id="edad"
          name="edad"
          required
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <br />
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          required
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <br />
        <label htmlFor="sexo">Sexo:</label>
        <select
          id="sexo"
          name="sexo"
          required
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        <br />
        <label htmlFor="codigoPostal">Código Postal:</label>
        <input
          type="text"
          id="codigoPostal"
          name="codigoPostal"
          required
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />
        <br />
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          required
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <br />
        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input
          type="text"
          id="nacionalidad"
          name="nacionalidad"
          required
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
        />
        <br />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Cancelar" />
      </form>

      <h2>Registros almacenados:</h2>
      <ul>
        {registros.map((registro, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {registro.nombre},{' '}
            <strong>Apellido Paterno:</strong> {registro.apellidoPaterno},{' '}
            <strong>Apellido Materno:</strong> {registro.apellidoMaterno},{' '}
            <strong>Correo:</strong> {registro.correo},{' '}
            <strong>Edad:</strong> {registro.edad},{' '}
            <strong>Teléfono:</strong> {registro.telefono},{' '}
            <strong>Sexo:</strong> {registro.sexo},{' '}
            <strong>Código Postal:</strong> {registro.codigoPostal},{' '}
            <strong>Contraseña:</strong> {registro.contrasena},{' '}
            <strong>Nacionalidad:</strong> {registro.nacionalidad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;


