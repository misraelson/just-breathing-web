import React from 'react';
import logo from './Assets/logo1.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <nav className="Nav">
        <p>just breathing</p>
      </nav>

      <header className="Logo-box">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <main className="Main">
        <div className="Main__content-box">
          <h1>About</h1>
          <p>
            You have the power to breathe! Take control over your autonomic nervous system through integrated breath-work. No complex user sign-ups, no push-notifications or annoying reminders, no social networking, no comparisons, JUST BREATHING.
          </p>
          <p>
            Choose long, luxurious breaths to slow your heart rate, increase your VO2 max and enter into a state of deep relaxation and zen-like calm via Theta brain wave stimulation. Or choose a quicker breath pattern to stimulate the endocrine system and saturate the blood and brain with beautiful oxygen.
          </p>
          <p>
            Focus on the breath ball to sync up your breaths per minute or close your eyes and listen to the soothing audio cues as you exercise your lungs and regain control over your prana.
          </p>
          <p>
            Just Breathing is a free app for integrated breath-work and meditation. We hope you enjoy your breathing experience and we aim to add more breathing exercises and styles in future versions.
          </p>
          <p>
            Be kind to everyone out there and enjoy the free air
          </p>
        </div>
        <div className="Main__content-box">
          <h1>Contact</h1>
          <p>Any questions regarding the Just Breathing app please contact misraelson@gmail.com</p>
        </div>
      </main>

      <footer className="Footer">
        &copy;2019 All Rights Reserved by Matthew Israelson 
      </footer>
    </div>
  );
}

export default App;
