import Card from '../Components/Card'
import React, {useEffect, useState} from 'react';
import { themes } from '../Context/Context';
import { useDentistContext } from '../Context/Context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistContext(); 
  const [dentist, setDentist] = useState([]);
  
  
  const getDentist = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentist(data)
 };

 useEffect(() => {
  getDentist();
}, []);

const currentTheme = state.theme === 'light' ? themes.light : themes.dark;
  return (
    <main theme={currentTheme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.length
        ? dentist.map((dentist) => <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />)
        : null}
      </div>
    </main>
  )
}

export default Home