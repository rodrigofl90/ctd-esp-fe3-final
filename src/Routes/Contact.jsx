import Form from '../Components/Form'
import Button from '../Components/Button';
import { useState } from 'react';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = ({ onClick }) => {
  const [estado, setEstado] = useState("");

  return (
    <div>
      <h2>Want to know more?</h2>
      
      <Form/>
      <p>Send us your questions and we will contact you</p>
      <input
        type="text"
        data-testid="consulta"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      />
      <Button onClick={onClick}>Enviar</Button>
    </div>
  )
}

export default Contact