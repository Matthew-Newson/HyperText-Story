function getRandomOutcome() {
  return Math.random() < 0.5;
}

export function showGameMenu() {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('gameMenu').style.display = 'block';
}

export function showMainMenu() {
  document.getElementById('settingsMenu').style.display = 'none';
  document.getElementById('gameMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
  document.getElementById('finalResult').style.display = 'none';
}

export function showSettings() {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('settingsMenu').style.display = 'block';
}

export function encounterHiddenBase() {
  alert('You find a hidden alien base!');
  document.getElementById('cityAdventure').style.display = 'none';
  document.getElementById('alienBase').style.display = 'block';
}

export function findAlienWeakness() {
  const success = getRandomOutcome();
  alert(success ? 'You successfully discover the alien leader\'s weakness!' : 'You find some information, but the alien\'s weakness remains unclear.');
  document.getElementById('alienBase').style.display = 'none';
  document.getElementById('alienChallenge').style.display = 'block';
}

export function searchForItems() {
  const success = getRandomOutcome();
  alert(success ? 'You find a powerful alien weapon!' : 'You find some basic supplies, but nothing special.');
  document.getElementById('alienBase').style.display = 'none';
  document.getElementById('alienChallenge').style.display = 'block';
}

export function fightAlienLeader() {
  const success = getRandomOutcome();
  document.getElementById('alienChallenge').style.display = 'none';
  document.getElementById('battleOutcome').style.display = 'block';
  
  if (success) {
    document.getElementById('battleResult').innerText = 'You engage in a fierce fight with the alien leader and gain the upper hand!';
    setTimeout(() => winBattle(), 2000);
  } else {
    document.getElementById('battleResult').innerText = 'The alien leader proves to be a formidable opponent...';
    setTimeout(() => loseBattle(), 2000);
  }
}

export function negotiateWithAlienLeader() {
  const success = getRandomOutcome();
  document.getElementById('alienChallenge').style.display = 'none';
  document.getElementById('battleOutcome').style.display = 'block';
  
  if (success) {
    document.getElementById('battleResult').innerText = 'The alien leader seems receptive to your diplomatic approach...';
    setTimeout(() => winNegotiation(), 2000);
  } else {
    document.getElementById('battleResult').innerText = 'The negotiations are breaking down...';
    setTimeout(() => loseBattle(), 2000);
  }
}

export function startCityAdventure() {
  document.getElementById('gameMenu').style.display = 'none';
  document.getElementById('cityAdventure').style.display = 'block';
}

export function startForestAdventure() {
  document.getElementById('gameMenu').style.display = 'none';
  document.getElementById('forestAdventure').style.display = 'block';
}

export function exploreCityStreets() {
  const success = getRandomOutcome();
  alert(success ? 'You successfully navigate the streets and find valuable intel!' : 'The streets are dangerous, but you manage to proceed...');
  document.getElementById('cityAdventure').style.display = 'none';
  document.getElementById('alienBase').style.display = 'block';
}

export function winNegotiation() {
  document.getElementById('battleOutcome').style.display = 'none';
  document.getElementById('finalResult').style.display = 'block';
  document.getElementById('finalResultText').innerText = 'Through skillful diplomacy, you convince the aliens to retreat. Peace is restored!';
}

export function winBattle() {
  document.getElementById('battleOutcome').style.display = 'none';
  document.getElementById('finalResult').style.display = 'block';
  document.getElementById('finalResultText').innerText = 'Victory! Your combat skills prevail, and the alien invasion is thwarted!';
}

export function loseBattle() {
  document.getElementById('battleOutcome').style.display = 'none';
  document.getElementById('finalResult').style.display = 'block';
  document.getElementById('finalResultText').innerText = 'Despite your efforts, the aliens overpower you. The invasion continues...';
}

export function retreatToStart() {
  const success = getRandomOutcome();
  alert(success ? 'You manage to retreat safely!' : 'Your retreat is spotted, but you barely escape!');
  document.getElementById('alienChallenge').style.display = 'none';
  document.getElementById('cityAdventure').style.display = 'block';
}

export function discoverAncientMap() {
  const success = getRandomOutcome();
  alert(success ? 'You discover a detailed map revealing the alien\'s secret paths!' : 'You find an old map that might be useful...');
  document.getElementById('forestAdventure').style.display = 'none';
  document.getElementById('alienBase').style.display = 'block';
}

export function exploreSecretPassage() {
  const success = getRandomOutcome();
  alert(success ? 'You find a secret passage leading directly to the alien command center!' : 'The passage is treacherous, but you press on...');
  document.getElementById('forestAdventure').style.display = 'none';
  document.getElementById('alienChallenge').style.display = 'block';
}