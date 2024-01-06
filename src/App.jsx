import './App.css';
import { useState } from 'react';


function App() {
return(
  <div>
  <NewTools
    name="William The Dev ."
  />
  <Tools
  name="William Castro"
  title="Junior Developer"
  tech="React, JavaScript, HTML5, CSS3, Tailwind, node.js, Django, Python, ASP.NET, C#"
  email="william.castro2000@outlook.com"
  address="101 Maple Street Road"
  age={49}
  hobbies={ ['programming', 'Web Development'] }
  />
  <Tools
  name="Alia Castro"
  title="Pain In The Ass!"
  tech="Master Digital Drawer using Figma & Pro-Create!"
  email="AliaBona@gmail.com"
  address="101 Fart Street"
  age={19}
  hobbies={ ['digital art', 'Artist']}
   />
   <Tools
    name="Carolyn Castro"
    title="Boss"
    tech="Boss Worker"
    email="msbossaholic@yahoo.com"
    address="1105 Maples New York"
    age={45}
    hobbies={ ['healthy cooking', 'Healthy Cooking']}
   />
  </div>
);
}
export default App;


export const Tools = (props) => {
  return (
    <div className="ul-container">
      <ul>
        <li>{ props.name }</li>
        <li>{ props.title }</li>
        <li>{ props.tech }</li>
        <li>{ props.email }</li>
        <li>{ props.address }</li>
        <li>{ props.age }</li>
        <li>{ props.hobbies }</li>
      </ul>
    </div>
  );
}

export const NewTools = (props) => {
  let name = props.name;
  const [count, setCount] = useState(0);
  return (
    <div className="number-container">
    <h1 className="title">{ props.name }</h1>
    <button className="btn" onClick={() => setCount(count => count + 1)}> + </button>
      <span className="count">{ count }</span>
    <button className="btn" onClick={() => setCount(count => count - 1)}> - </button>
    </div>
  )
}


