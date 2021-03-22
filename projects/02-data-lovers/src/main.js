import { filterData, sortData } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const buildUI = (data) => {
  const root = document.querySelector('#athletes');
  root.innerHTML = '';
  const { athletes } = data;
  athletes.forEach((athlete) => {
    const node = document.createElement('article');
    node.classList.add('athlete');
    node.innerHTML = `
      <div class='athlete__circle'>${athlete.noc}</div>
      <header>
        <h2>${athlete.name} - <span>${athlete.event}</span></h2>
        <ul>
          <li>${athlete.team}</li>
          <li>${athlete.age}</li>
          <li>${athlete.height}</li>
          <li>${athlete.weight}</li>
          <li>${athlete.gender}</li>
        </ul>
      </header>
      <div class='athlete__medal'>
        <img src='/icons/medals/${athlete.medal.toLowerCase()}.svg'  height='14' />
        <p>${athlete.medal}</p>
      </div>
    `;
    root.appendChild(node);
  });
};

const setEvents = (data) => {
  let stateData = data;
  document.querySelector('.filters-button').addEventListener('click', () => {
    document.querySelector('#filters').classList.toggle('open');
  });

  document.querySelector('.close-filters').addEventListener('click', () => {
    document.querySelector('#filters').classList.remove('open');
  });

  document.querySelector('form#filters').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const controls = document.querySelectorAll('form#filters input, form#filters select');
    const filtersArr = Array.from(controls).map(control => [control.name, control.value]).filter(twoDimData => twoDimData[1] !== '');
    const conditions = Object.fromEntries(filtersArr);
    const filteredData = filterData(data, conditions);
    stateData = filteredData;
    buildUI(filteredData);
    return false;
  });

  const sortUI = () => {
    const sortOrder = document.querySelector('[name="sort-order"]').value;
    const sortBy = document.querySelector('[name="sort"]').value;
    const sortedData = sortData(stateData, sortBy, sortOrder);
    stateData = sortedData;
    buildUI(sortedData);
  };

  document.querySelector('[name="sort"]').addEventListener('change', sortUI);
  document.querySelector('[name="sort-order"]').addEventListener('change', sortUI);
};

const init = async () => {
  const response = await fetch('/data/athletes/athletes.json');
  const data = await response.json();
  buildUI(data);
  setEvents(data);
};

init();
