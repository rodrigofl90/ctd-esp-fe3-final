
import { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleEmail = (e) => {
    setPerson({ ...person, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const hasNumber = /\d/;
    const hasSpecialChar = /[@]/;

    if (
      person.name.trim().length > 2 &&
      person.email.trim().length > 0 &&
      hasNumber.test(person.email) &&
      hasSpecialChar.test(person.email)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={person.name} onChange={handleName} />
        <label>Email</label>
        <input type="text" value={person.email} onChange={handleEmail} />
        <button type="submit">Submit</button>
      </form>

      {show && (
        <div>
          <p>Form submitted successfully!</p>
          <p>Name: {person.name}</p>
          <p>Email: {person.email}</p>
        </div>
      )}

      {error && <p>Please enter valid information!</p>}
    </>
  );
};

export default Form;

