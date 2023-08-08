import { useState } from "react";
import "./Contact.css";

function Contactlist() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      setError("Both name and phone number are required.");
      return;
    }

    // console.log(...contacts);
    setContacts([...contacts, { name, number }]);
    setName("");
    setNumber("");
    setError("");
  };

  return (
    <div className="App">
      <h1>Contact List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name..."
          />
        </div>
        <div>
          <input
            type="text"
            value={number}
            onChange={handlePhoneNumberChange}
            placeholder="Your Phone Number..."
          />
        </div>
        <button type="submit">Add Contact</button>
        {error && <div className="error">{error}</div>}
      </form>
      <div className="contact">
        <h2 style={{ textAlign: "center" }}>Contact List:</h2>
        <table border={1} align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((cval, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{cval.name}</td>
                    <td>{cval.number}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contactlist;
