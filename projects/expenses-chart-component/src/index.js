// 🚀 Images
// 🚀 Styles
import './style.css';

// 🚀 Mock Data
const mockData = [
  {
    'day': 'mon',
    'amount': 17.45,
  },
  {
    'day': 'tue',
    'amount': 34.91,
  },
  {
    'day': 'wed',
    'amount': 52.36,
  },
  {
    'day': 'thu',
    'amount': 31.07,
  },
  {
    'day': 'fri',
    'amount': 23.39,
  },
  {
    'day': 'sat',
    'amount': 43.28,
  },
  {
    'day': 'sun',
    'amount': 25.48,
  },
];

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='header'>
      <div class='balance'>
        <span class='balance__text'>My balance</span>
        <p class='balance__value'>$921.48</p>
      </div>
      <img class='balance__ico' src='./assets/images/logo.svg' alt='My balance'>
    </div>

    <div class='main'>
      <h2 class='title'>Spending - Last 7 days</h2>
      <ul class='days'>
        ${mockData.map(({ day, amount }) => `
          <li class='days__item days-item ${day}'>
            <div class='days-item__tooltip'>$${amount}</div>
            <div class='days-item__bar'></div>
            <p class='days-item__day'>${day}</p>
          </li>
        `).join('')}
      </ul>
      <div class='summary'>
        <div class='summary__current'>
          <p class='summary__title'>Total this month</p>
          <p class='summary__amount'>$478.33</p>
        </div>
        <div class='summary__last'>
          <p class='summary__plus'>+2.4%</p>
          <span class='summary__label'>from last month</span>
        </div>
      </div>
    </div>
  </div>
`;

// ==========================
// 🚀 Query Selectors
// ==========================
const maxAmount = Math.max(...mockData.map(i => i.amount));
const maxDay = mockData.find(i => i.amount === maxAmount).day;
console.log(maxDay);
const maxHeight = 150;
// ==========================
// 🚀 Query Selectors
// ==========================
function renderBar(item) {
  const day = document.querySelector(`.${item.day}`);
  // Set active max day class name
  document.querySelector(`.${maxDay}`).classList.add('max');
  // Set height
  setTimeout(() => {
    day.querySelector('.days-item__bar').style.height = `${(item.amount * maxHeight) / maxAmount}px`;
  }, 800);
  // Show tooltip
  day.addEventListener('click', ({ target }) => {
    document.querySelector('.open')?.classList.remove('open');
    target.closest('li').querySelector('.days-item__tooltip').classList.add('open');
  });
}

// ==========================
// 🚀 Events
// ==========================
mockData.forEach(renderBar);
