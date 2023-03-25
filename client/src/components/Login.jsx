import React, { useState } from "react";
import axios from "axios";
import FormContainer from "./FormContainer";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import "../styles/login.css";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [field, setField] = useState({
    password: "",
    email: "",
  });

  const handleInput = (e) => {
    //Cuando escribo en el input genero un evento.
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //Hago un copypaste del form pero modificare cierto elemento.
  };

  const [errors, setErrors] = useState({});

  const validateUser = () => {
    const { password, email } = field;
    const newErrors = {};
    if (!password || password === "")
      newErrors.password = "Porfavor ingresa tu contraseña";
    if (!email || email === "")
      newErrors.email = "Porfavor ingresa un email valido";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userErrors = validateUser();
    if (Object.keys(userErrors).length > 0) {
      setErrors(userErrors);
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/users/login",
          field,
          {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            withCredentials: true,
          }
        );
        window.localStorage.setItem("token", data[1]);
        dispatch(setUser(data[0]));
        navigate("/home");
        console.log("Usuario logueado con exito", field.email);
      } catch (error) {
        console.log("ERROR DE USUARIO Y/O CONTRASEÑA");
      }
    }
  };

  return (
    <div className="bg ">
      <FormContainer>
        <div class="position-absolute top-50 start-50 translate-middle bg-light shadow-lg size">
          <h3>Iniciar sesión</h3>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                required
                placeholder="Ingrese su email..."
                value={field.email}
                onChange={handleInput}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Ingrese su password..."
                required
                value={field.password}
                onChange={handleInput}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
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
                  Ingresar
                </Button>
              </div>
            </Form.Group>

            <div>
              <span>
                ¿No tenés una cuenta? Registrate aca!
                <a href="/register">Registrarse </a>
              </span>
            </div>
          </Form>
        </div>
      </FormContainer>
    </div>
  );
};

export default Login;
