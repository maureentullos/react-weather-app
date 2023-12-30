
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          This project was coded by Maureen Tullos and is
          <a
            href="https://github.com/maureentullos/react-weather-app.git"
            target="_blank" rel="noopener noreferrer"
          >
            {" "}
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}


