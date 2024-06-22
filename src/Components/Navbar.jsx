import { useNavigate, Link } from 'react-router-dom'; 
import styled from 'styled-components';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({ children}) => {
  const navigate = useNavigate();
 
 
  
  return (
  
    <Nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Button handleClick={() => navigate(-1)}>🔙</Button>
      <Link to= "/">
        <h4>Home</h4>
      </Link>
      <Link to= "/contact">
        <h4>Contact</h4>
      </Link>
      <Link to= "/favs">
        <h4>Favs</h4>
      </Link>
      <Link to= "/detail/:id">
        <h4>Detail</h4>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      {children}
    </Nav>
    
  )
}

export default Navbar;

const Nav = styled.nav`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;
