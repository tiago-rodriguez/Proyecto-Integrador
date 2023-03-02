import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { message } from "antd";
import { setUser } from "../../store/user";
import "../navbar/navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NaView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    success();
    dispatch(
      //Redux vuelve a su estado inicial
      setUser({
        id: null,
        email: null,
        nombre: null,
        apellido: null,
        admin: null,
      })
    );
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Sesion cerrada",
    });
  };

  console.log(user);
  return (
    <>
      {contextHolder}

      <Navbar.Brand className="brand">
        <nav className="navbar navbar-expand-lg shadow-lg ">
          <div class="container-fluid">
            <Link to="/home">
              <img src="Logo.png" width="70" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <Nav className="me-auto">
                    <Nav.Link href="/home">
                      <div className="list_item text-white ">Home</div>
                    </Nav.Link>
                  </Nav>
                </li>

                <li class="nav-item">
                  <Nav className="me-auto">
                    <Nav.Link href="/">
                      <div className="list_item text-white ">
                        Nuestros servicios
                      </div>
                    </Nav.Link>
                  </Nav>
                </li>

                <li class="nav-item">
                  <Nav className="me-auto">
                    <Nav.Link href="/">
                      <div className="list_item text-white">Nosotros</div>
                    </Nav.Link>
                  </Nav>
                </li>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Nav className="me-auto">
                        <Nav.Link href="/alquiler">
                          <div className="list_item text-white">Alquiler</div>
                        </Nav.Link>
                      </Nav>
                    </li>
                  </ul>
                </div>
                <div>
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-dark" type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                      Buscar
                    </button>
                  </form>
                </div>
              </ul>

              <>
                {!user.nombre ? (
                  <>
                    <div className="registro">
                      <Link to="/register">
                        <button class="btn btn-outline-light" type="submit">
                          Registrarse
                        </button>
                      </Link>
                    </div>

                    <div>
                      <Link to="/login">
                        <button class="btn btn-outline-light" type="submit">
                          Ingresar
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <ul class="navbar-nav mx-auto">
                      <li class="nav-item">
                        <Nav className="me-auto">
                          <Nav.Link href="/">
                            <div className="list_item text-white">
                              Agenda tu visita
                            </div>
                          </Nav.Link>
                        </Nav>
                      </li>

                      <li class="nav-item">
                        <Nav className="me-auto">
                          <Nav.Link href="/profile">
                            <div className="list_item text-white ">
                              Mi perfil
                            </div>
                          </Nav.Link>
                        </Nav>
                      </li>

                      <div>
                        <h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                              fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                          </svg>{" "}
                          Bienvenido {user.nombre}
                        </h6>
                      </div>
                    </ul>
                    <Link to="/">
                      <button
                        class="btn btn-outline-light"
                        onClick={handleLogOut}
                      >
                        Cerrar sesion
                      </button>
                    </Link>
                  </>
                )}
              </>
            </div>
          </div>
        </nav>
      </Navbar.Brand>
    </>
  );
};

/*

                 
                 /*
                 <Navbar className="navbar" expand="lg">
                   <Container fluid>
                     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                     <Navbar.Toggle aria-controls="navbarScroll" />
                     <Navbar.Collapse id="navbarScroll">
                       <Nav
                         className="me-auto my-2 my-lg-0"
                         style={{ maxHeight: "100px" }}
                         navbarScroll
                       >
                         <Nav.Link href="#action1">Home</Nav.Link>
                         <Nav.Link href="#action2">Link</Nav.Link>
                         <NavDropdown title="Link" id="navbarScrollingDropdown">
                           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                           <NavDropdown.Item href="#action4">
                             Another action
                           </NavDropdown.Item>
                           <NavDropdown.Divider />
                           <NavDropdown.Item href="#action5">
                             Something else here
                           </NavDropdown.Item>
                         </NavDropdown>
                         <Nav.Link href="#" disabled>
                           Link
                         </Nav.Link>
                       </Nav>
                       <Form className="d-flex">
                         <Form.Control
                           type="search"
                           placeholder="Search"
                           className="me-2"
                           aria-label="Search"
                         />
                         <Button variant="outline-success">Search</Button>
                       </Form>
                     </Navbar.Collapse>
                   </Container>
                 </Navbar>
                 );
                 */
export default NaView;
