import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";

function UserDate() {
  const [properties, setProperties] = useState([]);
  const [appointments, setNewAppointments] = useState([]);
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getAllProperties().then((propiedades) => {
      setProperties(propiedades);
    });
  }, []);

  const getAllProperties = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/api/properties/getAllProperties"
    );
    //SetProperties
    //La linea 14 en la 9

    return data;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/appointments/${user.id}`)
      .then((res) => {
        setNewAppointments(res.data);
      });
  }, [user.id]);

  console.log(appointments);
  console.log(properties);
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center text-center">
      <Card className="mt-5">
        <Card.Header>Detalle de Cita/s</Card.Header>
        {appointments.map((citas) => (
          <Card.Body>
            <Card.Title>
              Nombre: {user.nombre} {user.apellido}
            </Card.Title>

            <Card.Text>Fecha de Cita: {citas.date} </Card.Text>

            <Nav.Link href={`/propertyDetail/${citas.propertyId}`}>
              <Card.Title>
                Propiedad : {properties[citas.propertyId].title}
              </Card.Title>
            </Nav.Link>
          </Card.Body>
        ))}
      </Card>
    </div>
  );
}

export default UserDate;
