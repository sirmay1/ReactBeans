import { useState } from "react";
import "./App.css";


const App = () => {
  const [count, setCount] = useState(0);

  const basket = ["Limes", "Lemons", "Apples", "Cherries", "Pineapples", "Mangos", "Oranges", "Peaches", "Plums"];

  const CountFruits = (max) => {
    return Math.ceil(Math.random() * (max + 1));
  }

  return (
    <>
      <div className="container">
        <h1>Counter Header!</h1>
        <div>I count <span className="number">{count}</span> fruit called <span className="fruit">{basket[CountFruits(7)]}</span> and placing it in my basket</div>
       <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
};
export default App;



/*import './App.css';


import './App.css';
//import CoreConcept from './data.js';
import { CORE_CONCEPTS, CoreConcept } from './data.js';
//import { CORE_CONCEPTS } from './data.js';
import reactImg from './assets/react-core-concepts.png';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept({image, title, description}) {
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return(
    <div>
    <Header />
    <main>
    <section id="core-concepts">

    </section>
    <h1>Time To Get Started With, React!</h1>
    </main>
    <CoreConcept {...CORE_CONCEPTS}/>
    <CoreConcept
    title={CORE_CONCEPTS[1].title}
    description={CORE_CONCEPTS[1].description}
    image={CORE_CONCEPTS[1].image}
    />
    </div>
  );
}

export default App;*/




/*import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;*/




