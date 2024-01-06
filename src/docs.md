Started Udemy on the 3rd week of December on 2023. BUT started the React portion of the course section: #3 on December 28th of 2023. Chapter 1 was an intro, chapter 2 was a refresher of JavaScript and now chapter 3 is the start of React.






COPY:

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {

  const tech = ['React.js', 'Vue.js', 'Angular.js', 'Svelte.js', 'Solid.js', 'React-Native.js', 'Next.js', 'Nuxt.js', 'Express.js'];
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const techStack = tech[getRandomInt(8)];

  const [count, setCount] = useState(0);

  const [count1, setCount1] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Home />
      </div>
      <div className="card">
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          New count is {count1}!
        </button>
        <button onClick={() => setCount1((count1) => {
          return count1.reset();
        })}>
          Reset Value:
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and <span className="tech">{techStack}</span> logos to learn more
      </p>
    </>
  )
}

export default App


index.css


:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}



App.css

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
body {
  background: lightskyblue;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

.tech {
  color: deeppink;
  font-size: 1.6rem;
  font-family: Apple Chancery;
  font-weight: 700;
  text-decoration: underline 3px solid deeppink;
}


