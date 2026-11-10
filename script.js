/*
 * StandWithUs UK Explore Activity Hub
 *
 * Add future activities by copying an object in the ACTIVITIES array.
 * Available tags for category filters: history, decisions, peace, classroom.
 * Each image lives inside the assets folder and can be changed independently.
 */
const ACTIVITIES = [
  {
    title: '61: Build the Coalition',
    keywords: 'Israeli elections Knesset parties parliamentary coalition government Netanyahu politics seats',
    description: 'Can you build a stable Israeli government? Negotiate with parties and reach 61 seats.',
    image: 'assets/coalition.png',
    imageAlt: '61 Build the Coalition game artwork',
    category: 'POLITICS SIMULATION',
    details: 'Politics · Strategy',
    tags: ['classroom', 'decisions'],
    url: 'https://yehuda-swu.github.io/coalition-builder/'
  },
  {
    title: 'The Gaza Dilemma',
    keywords: 'Gaza withdrawal 2005 Hamas rockets security cabinet operations prime minister',
    description: 'You are Israel’s Prime Minister. Consider the briefings and make the call.',
    image: 'assets/gaza.png',
    imageAlt: 'The Gaza Dilemma game artwork',
    category: 'HISTORICAL SIMULATION',
    details: 'History · Leadership',
    tags: ['history', 'decisions'],
    url: 'https://yehuda-swu.github.io/gazadilemma/'
  },
  {
    title: 'The Price of Peace',
    keywords: 'Camp David 1978 1979 peace treaty Egypt Israel Anwar Sadat Menachem Begin Jimmy Carter',
    description: 'Navigate five tough decisions in the negotiations between Israel and Egypt.',
    image: 'assets/price_of_peace.png',
    imageAlt: 'The Price of Peace game artwork',
    category: 'PEACE & DIPLOMACY',
    details: '1978 · Negotiation',
    tags: ['peace', 'decisions'],
    url: 'https://yehuda-swu.github.io/thepriceofpeace/'
  },
  {
    title: 'Six Days of Decisions',
    keywords: '1967 Six Day War Jerusalem Sinai Golan intelligence war room Israel',
    description: 'Step into the war room during the 1967 Six Day War. Your choices shape the journey.',
    image: 'assets/six_days.png',
    imageAlt: 'Six Days of Decisions game artwork',
    category: 'HISTORY SIMULATION',
    details: '1967 · Decisions',
    tags: ['history', 'decisions'],
    url: 'https://yehuda-swu.github.io/6-day-war-game/'
  },
  {
    title: '1948: Hold the Line',
    keywords: 'war of independence 1947 1948 1949 Israel strategy survival military fronts',
    description: 'Manage scarce resources across several fronts during the 1948 war.',
    image: 'assets/hold_the_line.png',
    imageAlt: '1948 Hold the Line game artwork',
    category: 'STRATEGY GAME',
    details: '1948 · Strategy',
    tags: ['history', 'decisions'],
    url: 'https://yehuda-swu.github.io/1948holdtheline/'
  },
  {
    title: 'The Land for Peace Question',
    keywords: 'territory settlements negotiations diplomacy Sinai withdrawal peace proposals',
    description: 'Examine territorial proposals, discuss the choices and reveal what happened.',
    image: 'assets/land_for_peace.png',
    imageAlt: 'The Land for Peace Question activity artwork',
    category: 'HISTORY & DIPLOMACY',
    details: 'Diplomacy · Timeline',
    tags: ['history', 'peace'],
    url: 'https://yehuda-swu.github.io/landforpeace/'
  },
  {
    title: 'The October Decision',
    keywords: '1973 Yom Kippur War October war intelligence military Egypt Syria',
    description: 'Read the intelligence briefings and face difficult choices in October 1973.',
    image: 'assets/october_decision.png',
    imageAlt: 'The October Decision game artwork',
    category: 'HISTORICAL SIMULATION',
    details: '1973 · Decisions',
    tags: ['history', 'decisions'],
    url: 'https://yehuda-swu.github.io/octoberdecision/'
  },
  {
    title: 'Connect Four',
    keywords: 'quiz classroom game knowledge challenge teams questions board',
    description: 'Two teams. One board. Answer questions and connect four squares to win.',
    image: 'assets/connect_four.png',
    imageAlt: 'Explore Connect Four game artwork',
    category: 'CLASSROOM CHALLENGE',
    details: 'Teams · Quiz',
    tags: ['classroom'],
    url: 'https://yehuda-swu.github.io/explore_connect_four/'
  }
];

const grid = document.querySelector('#activity-grid');
const search = document.querySelector('#search-activities');
const buttons = [...document.querySelectorAll('[data-filter]')];
const resultsLabel = document.querySelector('#results-label');
const empty = document.querySelector('#empty-state');
let selectedFilter = 'all';

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'activity-card';
  const link = document.createElement('a');
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Launch ${item.title} in a new tab`);

  const imageArea = document.createElement('div');
  imageArea.className = 'card-image-area';
  imageArea.style.setProperty('--cover-image', `url("${item.image}")`);
  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.imageAlt;
  image.loading = 'lazy';
  image.decoding = 'async';
  imageArea.append(image);

  const body = document.createElement('div');
  body.className = 'card-body';
  const kicker = document.createElement('span');
  kicker.className = 'card-kicker';
  kicker.textContent = item.category;
  const title = document.createElement('h3');
  title.textContent = item.title;
  const description = document.createElement('p');
  description.textContent = item.description;
  const bottom = document.createElement('div');
  bottom.className = 'card-bottom';
  const details = document.createElement('span');
  details.className = 'card-details';
  details.textContent = item.details;
  const launch = document.createElement('span');
  launch.className = 'card-button';
  launch.innerHTML = '<span aria-hidden="true">▶</span> Launch activity <span aria-hidden="true">↗</span>';
  bottom.append(details, launch);
  body.append(kicker, title, description, bottom);
  link.append(imageArea, body);
  card.append(link);
  return card;
}

function render() {
  const query = search.value.trim().toLocaleLowerCase('en-GB');
  const filtered = ACTIVITIES.filter(item => {
    const matchesFilter = selectedFilter === 'all' || item.tags.includes(selectedFilter);
    const searchText = [item.title, item.description, item.category, item.details, item.keywords || '', ...item.tags].join(' ').toLocaleLowerCase('en-GB');
    return matchesFilter && searchText.includes(query);
  });
  grid.replaceChildren(...filtered.map(createCard));
  empty.hidden = filtered.length > 0;
  resultsLabel.textContent = filtered.length === ACTIVITIES.length
    ? `Showing all ${ACTIVITIES.length} activities`
    : `Showing ${filtered.length} of ${ACTIVITIES.length} activities`;
}

function chooseFilter(value) {
  selectedFilter = value;
  buttons.forEach(button => {
    const selected = button.dataset.filter === value;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  render();
}

buttons.forEach(button => button.addEventListener('click', () => chooseFilter(button.dataset.filter)));
search.addEventListener('input', render);
document.querySelector('#reset-filters').addEventListener('click', () => {
  search.value = '';
  chooseFilter('all');
  search.focus();
});
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    search.focus();
  }
  if (event.key === 'Escape' && document.activeElement === search) {
    search.value = '';
    render();
    search.blur();
  }
});

document.querySelector('#hero-count').textContent = `${ACTIVITIES.length} experiences`;
document.querySelector('#large-count').textContent = String(ACTIVITIES.length).padStart(2, '0');
document.querySelector('#all-count').textContent = ACTIVITIES.length;
document.querySelector('#year').textContent = new Date().getFullYear();
render();
