import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { message } from "antd";

function Appointment({ show, handleClose }) {
  const user = useSelector((state) => state.user);
  const [messageApi, contextHolder] = message.useMessage();
  const { id } = useParams();

  const [date, setDate] = useState("");

  //   Esta función handleSubmit es un controlador de eventos que se utiliza para enviar un formulario de citas
  //   a través de una solicitud POST utilizando la biblioteca Axios.
  //  En resumen, la función toma los datos del formulario, incluyendo la fecha y el ID del usuario,
  //  y los envía al servidor como un objeto JSON.
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");

    axios
      .post(`http://localhost:3001/api/appointments/new/${id}`, {
        date: date,
        userId: user.id,
        token,
      })
      .then((res) => res.data);
    handleClose(); //Se cierra el modal.
    messageApi
      .open({
        type: "success",
        content: "Cita agendada con éxito",
      })

      .catch((error) => console.log(error));
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  //Estas 3 lineas inferiores fueron movidas al componente Property.jsx

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {contextHolder}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agenda una visita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingresa fecha y hora </Form.Label>
              <Form.Control
                required
                type="datetime-local"
                autoFocus
                onChange={handleChangeDate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {date.length > 15 ? (
            <Button variant="primary" onClick={handleSubmit}>
              Agendar
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              Agendar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Appointment;
