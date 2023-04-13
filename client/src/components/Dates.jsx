import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function DatesTable() {
  useEffect(() => {
    getAllAppointments().then((citas) => {
      setNewAppointments(citas);
    });
  }, []);
  const [appointments, setNewAppointments] = useState([]);
  const getAllAppointments = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/api/appointments/getAllAppointments"
    );

    return data;
  };

  return (
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr class="table-secondary sticky-top">
            <th>#</th>
            <th>Date</th>
            <th>UserId</th>
            <th>PropertyId</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((citas) => (
            <tr>
              <th scope="row">{citas.id}</th>
              <td>{citas.date}</td>
              <td>{citas.userId}</td>
              <td>{citas.propertyId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DatesTable;
