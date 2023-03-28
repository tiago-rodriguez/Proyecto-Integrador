import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <div className="home_bg_dos">
        <h1 className="texto">
          Hola bienvenido a House of Dev!!! Para una mejor experiencia Ingresa o
          registrate!!
          <p></p>
          <Nav className="me-auto">
            <Nav.Link href="/login">
              <Button variant="info">Ingresar</Button>
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/register">
              <Button variant="info"> Registrarse </Button>
            </Nav.Link>
          </Nav>
        </h1>

        <div className="home_bg"></div>
      </div>
    </div>
  );
}

export default Home;
