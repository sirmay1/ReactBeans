import './App.css';


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

export default App;






