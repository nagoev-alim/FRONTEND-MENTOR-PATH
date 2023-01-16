// 🚀 Images
import arrow from '/assets/images/icon-arrow-down.svg';

// 🚀 Styles
import './style.css';

// 🚀 Mock
const mock = [
  {
    title: 'How many team members can I invite?',
    text: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    title: 'What is the maximum file upload size?',
    text: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    title: 'How do I reset my password?',
    text: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },
  {
    title: 'Can I cancel my subscription?',
    text: 'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    title: 'Do you provide additional support?',
    text: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

// 🚀 Render Skeleton
const root = document.querySelector('#app');
root.innerHTML = `
  <div class='component'>
    <div class='content'>
      <h2>FAQ</h2>
      <ul>
        ${mock.map(({ title, text }) => `
          <li data-container=''>
            <div data-header=''>
               <button>
                <span>${title}</span>
                <img data-icon='' src='${arrow}' alt=''>
              </button>
            </div>
            <div data-body=''>
              <p>${text}</p>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  </div>
`;

// ==========================
// 🚀 Query Selectors
// ==========================
const DOM = {
  accordionItems: document.querySelectorAll('[data-container]'),
};

// ==========================
// 🚀 Query Selectors
// ==========================
function onClick({ target }) {
  const parent = target.closest('[data-container]');
  const body = parent.querySelector('[data-body]');

  if (parent.classList.contains('open')) {
    parent.classList.remove('open');
    body.style.height = body.style.paddingBottom = `0px`;
  } else {
    DOM.accordionItems.forEach((i, elementIdx) => {
      i.classList.remove('open');
      const body = i.querySelector('[data-body]');
      body.style.height = body.style.paddingBottom = `0px`;
    });

    parent.classList.add('open');
    body.style.height = parent.classList.contains('open') ? `${body.scrollHeight + 15}px` : `0px`;
    body.style.paddingBottom = parent.classList.contains('open') ? `15px` : `0px`;
  }
}

// ==========================
// 🚀 Events
// ==========================
DOM.accordionItems.forEach(i => i.querySelector('[data-header]').addEventListener('click', onClick));
