/* eslint-disable linebreak-style */
const closeBtn = document.querySelector('.close-container');
const hambager = document.querySelector('.nav_bars');
const mobNav = document.querySelector('.mobile_menu');
const mobLinks = document.querySelectorAll('.mobile-link');
const modal = document.querySelector('.project_modal');
const modalbtn = document.querySelector('.mod-btn');
const cardContainer = document.querySelector('.works_card_container');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const userName = document.querySelector('#name');
const message = document.querySelector('#message');
const messageBox = document.querySelector('.message-box');
// get all projects
const projects = [
  {
    id: 1,
    name: '',
    mobilName: 'Profesional Art Printing Data',
    description:
      '',
    mobileDescription: `A daily selection of privately personalized reads; accounts
    or sign-ups required. has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a
    standard dummy text.`,
    imageUrl: './assets/images/second-card.jpg',
    mobileTech: ['html', 'bootstrap', 'Ruby'],
    technologies: ['', '', '', ''],
    cardClass: 'second_card',
  },
  {
    id: 2,
    name: 'Website Protfolio',
    mobilName: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    mobileDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: './assets/images/third-card.jpg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    mobileTech: ['html', 'bootstrap', 'Ruby'],
    cardClass: 'third_card',
  },
  {
    id: 3,
    name: 'Professional Art Printing Data',
    mobilName: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    mobileDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: './assets/images/fourth-card.jpg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    mobileTech: ['html', 'bootstrap', 'Ruby'],
    cardClass: 'fourth_card',
  },
  {
    id: 4,
    name: 'Website Protfolio',
    mobilName: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    mobileDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: './assets/images/second-card.jpg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    mobileTech: ['html', 'bootstrap', 'Ruby'],
    cardClass: 'fifth_card',
  },
  {
    id: 5,
    name: 'Professional Art Printing Data',
    mobilName: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    mobileDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: './assets/images/third-card.jpg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    mobileTech: ['html', 'bootstrap', 'Ruby'],
    cardClass: 'sixth_card',
  },
  {
    id: 6,
    name: 'Data Dashboard Healthcare',
    mobilName: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    mobileDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    imageUrl: './assets/images/fourth-card.jpg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    mobileTech: ['html', 'bootstrap', 'Ruby'],
    cardClass: 'seventh_card',
  },
];

// add projects dynamically

window.addEventListener('DOMContentLoaded', () => {
  // get local storage form data
  if (localStorage.getItem('user') === null) {
    email.value = '';
    message.value = '';
    userName.value = '';
  } else {
    const localData = localStorage.getItem('user');
    const data = JSON.parse(localData);

    // set localstorage data to the input values
    email.value = data.email;
    message.value = data.message;
    userName.value = data.name;
  }
  let result = '';
  projects.forEach((project) => {
    const {
      id,
      name,
      description,
      technologies,
      cardClass,
      mobilName,
      mobileDescription,
      mobileTech,
    } = project;
    result += `
          <div id='card' class='card' data-id=${id}>
          <div class="inner_card_container">
            <div class="card_title">
              <h3>${mobilName}</h3>
            </div>
            <div class="card_description">
              <p>
               ${mobileDescription}
              </p>
            </div>
            <div class="card_skill">
              <ul class="card_skill_list">
                <li>${mobileTech[0]}</li>
                <li>${mobileTech[1]}</li>
                <li>${mobileTech[2]}</li>
              </ul>
            </div>
          </div>
          <button type="button" class="card_btn modal-btn" data-id=${id}>See project</button>
        </div>
        <!-- desktop view -->
        <div class="${cardClass}">
          <div class="inner_card_container">
            <div class="card_title">
              <h3>${name}</h3>
            </div>
            <div class="card_description">
              <p>
              ${description}
              </p>
            </div>
            <div class="card_skill">
              <ul class="card_skill_list">
              <li>${technologies[0]}</li>
              <li>${technologies[1]}</li>
              <li>${technologies[2]}</li>
              </ul>
            </div>
          </div>
          <button type="button" class="card_btn modal-btn" data-id=${id}>See project</button>
        </div>
    `;
  });
  cardContainer.innerHTML = result;
});

closeBtn.addEventListener('click', () => {
  mobNav.style.cssText = `
  position: fixed;
  top: -9999px;
  left: -9999px;
  transition: all ease-out 0.5s;
`;
});

hambager.addEventListener('click', () => {
  mobNav.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  `;
});

mobLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobNav.style.cssText = `
    position: fixed;
    top: -999px;
    left: -999px;
  `;
  });
});

// listen for modal open click
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-btn')) {
    const data = e.target.getAttribute('data-id');
    const modalData = projects.find((project) => project.id === parseInt(data, 10));
    const {
      name,
      description,
      imageUrl,
      mobileDescription,
      mobilName,
    } = modalData;
    const info = `
      <div class="modal-content">
      <span class="close-btn"><i class="fa-solid fa-xmark"></i></span>
      <h4 class="modal-header">
        ${name === '' ? mobilName : name}
      </h4>
      <div class="modal-skills">
        <ul class="modal-skill-list">
          <li>css</li>
          <li>html</li>
          <li>bootstrap</li>
          <li>Ruby</li>
        </ul>
      </div>
      <div class="skill-info">
        <div class="skill-img-container" style="background-image:url(${imageUrl === '' ? imageUrl : imageUrl})">
        <img src="./assets/images/third-card.jpg" alt="" class="modal-img"/>
        </div>
        <div class="text-container">
          <p>
            ${description === '' ? mobileDescription : description}
          </p>
          <div class="modal-btns">
            <button class="txt-container-btn">
              See Live
              <img src="./assets/images/icons/live.png" alt="" />
            </button>
            <button class="txt-container-btn">
              See Source
              <i class="fa-brands fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
    modal.innerHTML = info;
    modal.style.display = 'block';
  }

  // listen for modal close click
  if (e.target.classList.contains('fa-xmark')) {
    modal.style.display = 'none';
  }
});

// listen for outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

modalbtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// form validation
const similarTask = () => {
  setTimeout(() => {
    messageBox.innerHTML = '';
  }, 3000);
  messageBox.style.visibility = 'visible';
};

// local storage function
const storeToLocalStorage = () => {
  const data = {
    name: userName.value,
    email: email.value,
    message: message.value,
  };
  const storageData = JSON.stringify(data);
  localStorage.setItem('user', storageData);
};

const formValidation = () => {
  if (email.value !== email.value.toLowerCase()) {
    messageBox.classList.remove('success');
    messageBox.classList.add('error');
    messageBox.innerHTML = '<p>All email input values should be in lowercase </p>';
    email.value = '';
    similarTask();
  } else {
    // store data in local storage
    storeToLocalStorage();
    // submit the form
    messageBox.classList.remove('error');
    messageBox.classList.add('success');
    messageBox.innerHTML = '<p>Form submited successfully</p>';
    similarTask();
    form.submit();
  }
};
// submit for event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});
