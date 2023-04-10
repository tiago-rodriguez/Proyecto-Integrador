import axios from "axios";
import "../styles/userlist.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

/*
Este codigo establece el valor inicial de la variable de estado "users" como los datos de usuarios almacenados
 previamente en el almacenamiento local del navegador con la clave "UsuariosData", si existen. 
 Si no hay datos almacenados previamente, establece un valor vacío
*/
function UserList() {
  const [users, setUsers] = useState(() => {
    const saveUsers = window.localStorage.getItem("UsuariosData");
    if (saveUsers) {
      return JSON.parse(saveUsers);
    } else {
      return [];
    }
  });

  //Con  JSON.stringify convierto un objeto en cadena de texto
  useEffect(() => {
    window.localStorage.setItem("usuariosData", JSON.stringify(users));
  }, [users]);

  const getAllUsers = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/api/users/getAllUsers"
    );
    return data;
  };
  console.log(users);

  useEffect(() => {
    getAllUsers().then((usuarios) => {
      setUsers(usuarios);
    });
  }, []);

  const deleteUsers = async (id) => {
    const token = window.localStorage.getItem("token");

    if (window.confirm("¿Estás seguro que deseas eliminar este usuario?")) {
      try {
        await axios.delete(`http://localhost:3001/api/users/${id}`, {
          data: { token },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(users.filter((user) => user.id !== id));
        console.log(`User with ID ${id} has been deleted`);
      } catch (error) {
        console.error(
          `Error deleting property with ID ${id}: ${error.message}`
        );
      }
    }
  };

  return (
    <div className="list_bg">
      <div className="container">
        <div className="row">
          <h4> Usuarios registrados: ({users.length}) </h4>
          {users.map((user, index) => (
            <div key={index} className="col-md-3">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-file-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                    </svg>
                    {`${user.nombre} ${user.apellido}`}
                  </h5>
                  <p className="card-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      class="bi bi-mailbox2"
                      viewBox="0 0 18 18"
                    >
                      <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
                      <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
                    </svg>
                    {`${user.email}`}
                  </p>
                  <p className="card-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-phone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                    </svg>
                    {`${user.cellPhone}`}
                  </p>
                </div>
                <p></p>
                <p></p>

                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => deleteUsers(user.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;
