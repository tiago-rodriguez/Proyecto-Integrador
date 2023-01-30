import React, { useState } from "react";
import axios from "axios";
import FormContainer from "./navbar/FormContainer";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
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

  const validateForm = () => {
    const { nombre, apellido } = form;
    const newErrors = {};

    if (!nombre || nombre === "")
      newErrors.nombre = "Porfavor ingresa tu nombre";

    if (!apellido || apellido === "")
      newErrors.apellido = "Porfavor ingresa tu apellido";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("formulario ingresado");
      console.log(form);
    }
  };

  return (
    <FormContainer>
      <Form>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            required
            value={form.nombre}
            onChange={(e) => setField("nombre", e.target.value)}
            isInvalid={!!errors.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            required
            value={form.apellido}
            onChange={(e) => setField("apellido", e.target.value)}
            isInvalid={!!errors.apellido}
          />
          <Form.Control.Feedback type="invalid">
            {errors.apellido}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="submit">
          <div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="my-2"
              variant="secondary"
            >
              Registrarse
            </Button>
          </div>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default Register;
