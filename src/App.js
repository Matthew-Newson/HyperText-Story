// App.jsx
import React from 'react';
import './App.css';
import {
  showGameMenu,
  showMainMenu,
  showSettings,
  startCityAdventure,
  startForestAdventure,
  exploreCityStreets,
  encounterHiddenBase,
  findAlienWeakness,
  searchForItems,
  fightAlienLeader,
  negotiateWithAlienLeader,
  retreatToStart,
  winNegotiation,
  loseBattle,
  discoverAncientMap,
  exploreSecretPassage,
} from './script';
import hero from './Hero.png';
import villian from './Villian.png';
import city from './city.png';
import forest from './Forest.png';
import lobby from './Lobby.png';


function App() {
  return (
    <div className="app-container">
      <div className="game-section" id="mainMenu">
        <h1>Alien Invasion</h1>
        <div className="character-container">
          <img src={hero} alt="Hero Character" className="character" />
          <img src={villian} alt="Alien Character" className="character" />
        </div>
        <button onClick={showGameMenu}>Start Mission</button>
        <button onClick={showSettings}>Settings</button>
      </div>

      <div className="game-section" id="settingsMenu" style={{ display: 'none' }}>
        <h1>Settings</h1>
        <div className="settings-controls">
          <div className="setting-item">
            <label htmlFor="volume">Sound Effects:</label>
            <input type="range" id="volume" min="0" max="100" defaultValue="50" />
          </div>
          <div className="setting-item">
            <label htmlFor="musicVolume">Music Volume:</label>
            <input type="range" id="musicVolume" min="0" max="100" defaultValue="50" />
          </div>
        </div>
        <button onClick={showMainMenu}>Return to Menu</button>
      </div>

      <div className="game-section" id="gameMenu" style={{ display: 'none' }}>
        <h1>Choose Your Path</h1>
        <img src={lobby} alt="Mission Briefing" className="scene-image" />
        <div className="story-text">
          Earth is under alien invasion. Choose your approach to investigate:
        </div>
        <button onClick={startCityAdventure}>Investigate City</button>
        <button onClick={startForestAdventure}>Scout Forest Base</button>
      </div>

      <div className="game-section" id="cityAdventure" style={{ display: 'none' }}>
        <h1>City Mission</h1>
        <img src={city} alt="City Scene" className="scene-image" />
        <div className="story-text">
          The city is eerily quiet. Choose your next move:
        </div>
        <button onClick={exploreCityStreets}>Search the Streets</button>
        <button onClick={encounterHiddenBase}>Follow Strange Signals</button>
      </div>

      <div className="game-section" id="forestAdventure" style={{ display: 'none' }}>
        <h1>Forest Operation</h1>
        <img src={forest} alt="Forest Scene" className="scene-image" />
        <div className="story-text">
          The forest conceals alien activity. Your next move:
        </div>
        <button onClick={discoverAncientMap}>Track Energy Readings</button>
        <button onClick={exploreSecretPassage}>Follow Hidden Trail</button>
      </div>

      <div className="game-section" id="alienBase" style={{ display: 'none' }}>
        <h1>Alien Facility</h1>
        <img src={villian} alt="Alien Base" className="scene-image" />
        <div className="story-text">
          You've infiltrated the alien command center. Choose your strategy:
        </div>
        <button onClick={findAlienWeakness}>Gather Intelligence</button>
        <button onClick={searchForItems}>Search for Technology</button>
      </div>

      <div className="game-section" id="alienChallenge" style={{ display: 'none' }}>
        <h1>Final Confrontation</h1>
        <div className="story-text">
          Face to face with the alien commander. Your choice matters:
        </div>
        <button onClick={fightAlienLeader}>Engage in Combat</button>
        <button onClick={negotiateWithAlienLeader}>Attempt Diplomacy</button>
        <button onClick={retreatToStart}>Strategic Retreat</button>
      </div>

      <div className="game-section" id="battleOutcome" style={{ display: 'none' }}>
        <h1>Mission Status</h1>
        <p id="battleResult" className="outcome-text"></p>
        {/* <button onClick={winNegotiation}>Continue...</button>
        <button onClick={loseBattle}>Accept Defeat</button> */}
      </div>

      <div className="game-section" id="finalResult" style={{ display: 'none' }}>
        <h1>Mission Complete</h1>
        <p id="finalResultText" className="outcome-text"></p>
        <button onClick={showMainMenu}>Return to Base</button>
      </div>
    </div>
  );
}

export default App;