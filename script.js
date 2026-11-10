/*
 * Explore activity directory
 * To add an activity, add a new object to the GAMES array below.
 * Categories: history, peace, classroom.
 * Each cover is an SVG in the assets folder; you may reuse an existing cover.
 */
const GAMES = [
  {
    title: 'The Price of Peace',
    subtitle: 'Step inside the Camp David negotiations. Can you navigate the choices that shaped the peace treaty between Israel and Egypt?',
    category: 'peace', categoryLabel: 'PEACE & DIPLOMACY',
    type: 'Negotiation simulation', era: '1978 / 1979',
    cover: 'assets/cover-peace.svg',
    url: 'https://yehuda-swu.github.io/thepriceofpeace/'
  },
  {
    title: 'Six Days of Decisions',
    subtitle: 'Enter the decision room of 1967. Review the intelligence, choose a course of action and discover what happened.',
    category: 'history', categoryLabel: 'HISTORY & DECISIONS',
    type: 'Decision simulation', era: '1967',
    cover: 'assets/cover-1967.svg',
    url: 'https://yehuda-swu.github.io/6-day-war-game/'
  },
  {
    title: '1948: Hold the Line',
    subtitle: 'Command a simulated campaign during the War of Independence. Manage your resources and protect the fronts.',
    category: 'history', categoryLabel: 'HISTORY & DECISIONS',
    type: 'Strategy game', era: '1948',
    cover: 'assets/cover-1948.svg',
    url: 'https://yehuda-swu.github.io/1948holdtheline/'
  },
  {
    title: '61: Build the Coalition',
    subtitle: 'Explore Israeli politics. Bring parties together, navigate competing priorities and try to reach 61 seats.',
    category: 'classroom', categoryLabel: 'CLASSROOM & POLITICS',
    type: 'Politics simulation', era: 'THE KNESSET',
    cover: 'assets/cover-coalition.svg',
    url: 'https://yehuda-swu.github.io/coalition-builder/'
  },
  {
    title: 'The Gaza Dilemma',
    subtitle: 'Take a seat in Israel’s security cabinet. Consider difficult decisions during events from 2005 to 2023.',
    category: 'history', categoryLabel: 'HISTORY & DECISIONS',
    type: 'Leadership simulation', era: '2005 / 2023',
    cover: 'assets/cover-gaza.svg',
    url: 'https://yehuda-swu.github.io/gazadilemma/'
  },
  {
    title: 'The Land for Peace Question',
    subtitle: 'Explore a timeline of territorial diplomacy. Make a prediction, discuss the choices and reveal the outcome.',
    category: 'peace', categoryLabel: 'PEACE & DIPLOMACY',
    type: 'Interactive timeline', era: '1974 / 2014',
    cover: 'assets/cover-land.svg',
    url: 'https://yehuda-swu.github.io/landforpeace/'
  },
  {
    title: 'The October Decision',
    subtitle: 'Take your place in the war office. Read intelligence briefings and confront the decisions of October 1973.',
    category: 'history', categoryLabel: 'HISTORY & DECISIONS',
    type: 'Historical simulation', era: '1973',
    cover: 'assets/cover-october.svg',
    url: 'https://yehuda-swu.github.io/octoberdecision/'
  },
  {
    title: 'Explore Connect Four',
    subtitle: 'Two teams. One board. Reveal questions, think quickly and claim your squares to connect four and win.',
    category: 'classroom', categoryLabel: 'CLASSROOM & POLITICS',
    type: 'Classroom quiz game', era: 'TEAM CHALLENGE',
    cover: 'assets/cover-connect.svg',
    url: 'https://yehuda-swu.github.io/explore_connect_four/'
  }
];

const grid = document.getElementById('games-grid');
const search = document.getElementById('search');
const filters = Array.from(document.querySelectorAll('.filter-button'));
const resultsLabel = document.getElementById('results-label');
const empty = document.getElementById('empty-state');
let currentFilter = 'all';

function card(game, index) {
  const el = document.createElement('article');
  el.className = 'game-card';
  el.style.setProperty('--card-index', index);
  // All data is locally defined above and is edited by the page owner.
  el.innerHTML = `
    <a href="${game.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${game.title} in a new tab">
      <div class="game-art"><img src="${game.cover}" alt="" loading="lazy"><span class="art-top-label">EXPLORE / ${String(index + 1).padStart(2, '0')}</span><span class="art-number">${game.era}</span></div>
      <div class="game-body"><span class="game-category">${game.categoryLabel}</span><h3>${game.title}</h3><p class="game-description">${game.subtitle}</p><div class="game-bottom"><span class="game-type">${game.type}</span><span class="game-launch">Launch activity <span class="launch-icon" aria-hidden="true">↗</span></span></div></div>
    </a>`;
  return el;
}

function render() {
  const term = search.value.trim().toLocaleLowerCase('en-GB');
  const visible = GAMES.filter(game =>
    (currentFilter === 'all' || game.category === currentFilter) &&
    [game.title, game.subtitle, game.categoryLabel, game.type, game.era].join(' ').toLocaleLowerCase('en-GB').includes(term)
  );
  grid.replaceChildren(...visible.map(card));
  empty.hidden = visible.length !== 0;
  resultsLabel.textContent = visible.length === GAMES.length
    ? `Showing all ${GAMES.length} activities`
    : `Showing ${visible.length} of ${GAMES.length} activities`;
}

filters.forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  render();
}));
search.addEventListener('input', render);
document.getElementById('reset-filters').addEventListener('click', () => {
  search.value = '';
  filters[0].click();
  document.getElementById('activities').scrollIntoView({block: 'start', behavior: 'smooth'});
});
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault(); search.focus();
  }
  if (event.key === 'Escape' && document.activeElement === search) {
    search.value = ''; render(); search.blur();
  }
});
document.querySelector('.filter-count').textContent = GAMES.length;
document.getElementById('total-games').textContent = String(GAMES.length).padStart(2, '0');
document.getElementById('current-year').textContent = new Date().getFullYear();
render();
