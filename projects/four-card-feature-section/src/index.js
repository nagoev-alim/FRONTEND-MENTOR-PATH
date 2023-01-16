// 🚀 Images
import calculator from '/assets/images/icon-calculator.svg';
import karma from '/assets/images/icon-karma.svg';
import supervisor from '/assets/images/icon-supervisor.svg';
import team from '/assets/images/icon-team-builder.svg';

// 🚀 Styles
import './style.css';

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='section'>
    <div class='header'>
      <h2>
        <span>Reliable, efficient delivery</span>
        <span>Powered by Technology</span>
      </h2>
      <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </div>
    <ul>
      <li>
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
        <img src='${supervisor}' alt='Supervisor'>
      </li>
      <li>
        <h3>Team Builder</h3>
        <p>Scans our talent network to create the optimal team for your project</p>
        <img src='${team}' alt='Team Builder'>
      </li>
      <li>
        <h3>Karma</h3>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src='${karma}' alt='Karma'>
      </li>
      <li>
        <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src='${calculator}' alt='Calculator'>
      </li>
    </ul>
  </div>
`;

// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {};

// ==========================
// 🚀 Query Selectors
// ==========================

// ==========================
// 🚀 Events
// ==========================
