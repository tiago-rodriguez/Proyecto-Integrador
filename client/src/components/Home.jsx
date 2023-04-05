import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "../styles/home.css";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="home_bg_dos">
        <h1 className="texto">
          Hola bienvenido a House of Dev Para una mejor experiencia Ingresa o
          registrate!!
          <br />
          <div>
            {user.id ? null : (
              <>
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
              </>
            )}
          </div>
        </h1>

        <div className="home_bg"></div>
      </div>
    </div>
  );
}

export default Home;
