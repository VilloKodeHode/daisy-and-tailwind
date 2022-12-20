import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

//components:
import Carosuel from "./components/Carosuel/carosuel";
import FooterComponent from "./components/Footer/footercomponent";
import Navbar from "./components/Navbar/navbar";
import BmiCalculator from "./components/BMIcalculator/bmiCalculator";
import Participents from "./components/KodeHodeParticipents/participents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div
        className="hero min-h-screen bg-cover bg-"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80")`,
          // backgroundImage: `url(src/assets/Buffdude.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-10 text-8xl font-bold text-info">
              <span className="text-accent">V</span>{" "}
              <span className="text-secondary">S</span>trength{" "}
              <span className="text-primary">F</span>
              ormula
            </h1>
            <p className="mb-5">Made by</p>
            <div className="m-10">
              <h2 className="mb-5 text-3xl font-bold">Joakim Villo</h2>
              <p className="mb-5">Bachelor's degree in nutrition</p>
              <p className="mb-5">18 years experience of resistance training</p>
              <div
                className="tooltip tooltip-right"
                data-tip="Gainz garanteed!"
              ></div>
              <button className="btn">Click here for gainz!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="stats shadow my-10">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total pound of muscle gained</div>
          <div className="stat-value text-primary">26.6K KG</div>
          <div className="stat-desc">30% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Peoples lives changed this week</div>
          <div className="stat-value text-secondary">13k</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://loremflickr.com/g/1000/800/power" />
              </div>
            </div>
          </div>
          <div className="stat-value">101%</div>
          <div className="stat-title">Satisfaction</div>
          <div className="stat-desc text-secondary">UwU</div>
        </div>
      </div>
      <Carosuel
        image1="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        image2="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        image3="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        image4="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />

      <div className="flex justify-center my-10">
        <div className="card w-96 bg-secondary shadow-xl">
          <div className="card-body">
            <BmiCalculator />
          </div>
        </div>
      </div>

      <Participents />
      <FooterComponent />
    </div>
  );
}

export default App;
