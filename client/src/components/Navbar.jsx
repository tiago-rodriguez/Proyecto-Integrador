import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { setUser } from "../store/user";
import "../styles/navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

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
  // const handleSumbit = () => {
  //   axios
  //     .get(`http://localhost:3001/api/properties/search/${search}`)
  //     .then((res) => dispatch(setSearch(res.data)))
  //     .then(() => navigate("/search"))
  //     .catch((error) => console.error(error));
  // };
  const navigate = useNavigate();
  return (
    <>
      {contextHolder}

      <Navbar.Brand className="brand">
        <nav className="navbar navbar-expand-lg shadow-lg">
          <div class="container-fluid">
            <Link to="/">
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
              {!user.admin ? (
                <>
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <Nav className="me-auto">
                        <Nav.Link href="/">
                          <div className="list_item text-white ">Home</div>
                        </Nav.Link>
                      </Nav>
                    </li>

                    <li class="nav-item">
                      <Nav className="me-auto">
                        <Nav.Link>
                          <div className="list_item text-white ">
                            Nuestros servicios
                          </div>
                        </Nav.Link>
                      </Nav>
                    </li>

                    <li class="nav-item">
                      <Nav className="me-auto">
                        <Nav.Link>
                          <div className="list_item text-white">Nosotros</div>
                        </Nav.Link>
                      </Nav>
                    </li>

                    <li class="nav-item">
                      <Nav className="me-auto">
                        <Nav.Link href="/propiedades">
                          <div className="list_item text-white">
                            Propiedades
                          </div>
                        </Nav.Link>
                      </Nav>
                    </li>

                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    ></div>
                  </ul>

                  {!user.nombre ? (
                    <></>
                  ) : (
                    <>
                      <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                          <Nav className="me-auto">
                            <Nav.Link href="/userDate">
                              <div className="list_item text-white">
                                Mis citas
                              </div>
                            </Nav.Link>
                          </Nav>
                        </li>

                        <Nav className="me-auto">
                          <Nav.Link href="/profile">
                            <div className="list_item text-white ">
                              Mi perfil
                            </div>
                          </Nav.Link>
                        </Nav>

                        <div className="usuario_navbar">
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
                            </svg>
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
              ) : (
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <Nav className="me-auto">
                      <Nav.Link href="/">
                        <div className="list_item text-white ">Home</div>
                      </Nav.Link>
                    </Nav>
                  </li>

                  <li class="nav-item">
                    <Nav className="me-auto">
                      <Nav.Link href="/propiedades">
                        <div className="list_item text-white">Propiedades</div>
                      </Nav.Link>
                    </Nav>
                  </li>

                  <li class="nav-item">
                    <Nav className="me-auto">
                      <Nav.Link href="/dates">
                        <div className="list_item text-white">Ver Citas</div>
                      </Nav.Link>
                    </Nav>
                  </li>

                  <li class="nav-item">
                    <Nav className="me-auto">
                      <Nav.Link href="/properties">
                        <div className="list_item text-white ">
                          Agregar o eliminar Propiedades
                        </div>
                      </Nav.Link>
                    </Nav>
                  </li>

                  <li class="nav-item">
                    <Nav className="me-auto">
                      <Nav.Link href="/usersView">
                        <div className="list_item text-white ">
                          Ver perfiles
                        </div>
                      </Nav.Link>
                    </Nav>
                  </li>

                  <li class="nav-item">
                    <Nav className="me-auto">
                      <Nav.Link href="/profile">
                        <div className="list_item text-white ">Mi perfil</div>
                      </Nav.Link>
                    </Nav>
                  </li>

                  <div className="usuario_navbar">
                    <h6>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                      Bienvenido {user.nombre}
                    </h6>
                  </div>
                  <Link to="/">
                    <button
                      class="btn btn-outline-light"
                      onClick={handleLogOut}
                    >
                      Cerrar sesion
                    </button>
                  </Link>
                </ul>
              )}
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
