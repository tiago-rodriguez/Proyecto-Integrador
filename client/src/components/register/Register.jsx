import React, { useState } from "react";
import axios from "axios";
import FormContainer from "../navbar/FormContainer";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    password: "",
    email: "",
    cellPhone: "",
  });

  const handleInput = (e) => {
    //Cuando escribo en el input genero un evento.
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); //Hago un copypaste del form pero modificare cierto elemento.
  };

  const [errors, setErrors] = useState({});
  /*const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  */
  const validateForm = () => {
    const { nombre, apellido, password, email, cellPhone } = form;
    const newErrors = {};

    if (!nombre || nombre === "")
      newErrors.nombre = "Porfavor ingresa tu nombre";

    if (!apellido || apellido === "")
      newErrors.apellido = "Porfavor ingresa tu apellido";
    if (!password || password === "")
      newErrors.password = "La contraseña debe tener almenos 6 caracteres";
    if (!email || email === "") newErrors.email = "Porfavor ingresa tu email";
    if (!cellPhone || cellPhone === "")
      newErrors.cellPhone = "Porfavor ingrese un numero de celular válido";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        await axios.post("http://localhost:3001/api/users/register", form, {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          withCredentials: true,
        });
        navigate("/login");
        console.log("Usuario creado con exito");
      } catch (error) {
        console.log("MUCHACHERR");
      }
    }
  };

  return (
    <div className="register_bg">
      <FormContainer>
        <div className="position-absolute top-50 start-50 translate-middle bg-light shadow-lg size_2">
          <Form>
            <h3>Registrate</h3>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleInput}
                isInvalid={!!errors.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombre}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                name="apellido"
                type="text"
                required
                value={form.apellido}
                onChange={handleInput}
                isInvalid={!!errors.apellido}
              />
              <Form.Control.Feedback type="invalid">
                {errors.apellido}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleInput}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="cellPhone">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                name="cellPhone"
                type="text"
                required
                value={form.cellPhone}
                onChange={handleInput}
                isInvalid={!!errors.cellPhone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cellPhone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                required
                value={form.email}
                onChange={handleInput}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="submit">
              <div>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="my-2"
                  variant="dark"
                >
                  Registrarse
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </FormContainer>
    </div>
  );
};

export default Register;
