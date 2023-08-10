function navigation() {
  var navbar = document.getElementById('headermaindiv');
  if (document.getElementById('checkcheckbox').checked == true) {
    navbar.style.left = '0';
  } else {
    navbar.style.transition = 'all 0.5s';
    navbar.style.left = '-100%';
  }
}
const dynamicText = document.querySelector('h1 span');
const words = [
  'Front End Developer',
  'UI UX Designer',
  'Freelancer',
  'API Integrator',
  'SEO Analyst',
];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blinking');

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove('stop-blinking');
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 800);
  }
};

typeEffect();

function bydefaultcheck() {
  let check = document.getElementById('toggle');
  check.checked = true;
}
bydefaultcheck();

function changenavcolor() {
  let navbar = document.getElementById('headermaindiv');
  let scrollvalue = window.scrollY;
  if (scrollvalue > 270) {
    navbar.classList.add('scrollcolor');
  }
  if (scrollvalue < 270) {
    navbar.classList.remove('scrollcolor');
  }
}
window.addEventListener('scroll', changenavcolor);

function tohirepage() {
  setTimeout(() => {
    window.location.assign('hiremepage.html');
  }, 1000);
}

function closeheader() {
  if (window.innerWidth <= 700) {
    var navbar = document.getElementById('headermaindiv');

    setTimeout(() => {
      navbar.style.left = '-100%';
    }, 700);

    let check = (document.getElementById('checkcheckbox').checked = false);
    check.checked = false;
  } else {
    return true;
  }

  // var navbar = document.getElementById('headermaindiv');

  // setTimeout(() => {
  //   navbar.style.left = '-100%';
  // }, 700);

  // let check = (document.getElementById('checkcheckbox').checked = false);
  // check.checked = false;
}

// enabling the dark mode

function darklightmode() {
  let navbarmain = document.getElementById('headermaindiv');
  let checkboxheader = document.getElementById('checkbox');
  let toggle = document.getElementById('toggle').checked;
  if (toggle == true) {
    document.getElementById('page1').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page2').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page3').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page4').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page5').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page6').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page7').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page8').style.backdropFilter = 'invert(0.98)';
    document.getElementById('namepage1').style.color = 'white';
    document.getElementById('tophead').style.color = 'grey';
    document.getElementById('mouse').style.filter = 'invert(1)';
    document.getElementById('aboutuscontent').style.filter = 'invert(1)';
    document.getElementById('hlink1').style.color = 'white';
    document.getElementById('hlink2').style.color = 'white';
    document.getElementById('hlink3').style.color = 'white';
    document.getElementById('hlink4').style.color = 'white';
    document.getElementById('hlink5').style.color = 'white';
    document.getElementById('cardbutton1').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('cardbutton2').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('cardbutton3').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec1').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec2').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec3').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec4').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec5').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec6').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec7').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec8').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('desc1').style.color = 'white';
    document.getElementById('desc2').style.color = 'white';
    document.getElementById('desc3').style.color = 'white';
    document.getElementById('desc4').style.color = 'white';
    document.getElementById('desc5').style.color = 'white';
    document.getElementById('desc6').style.color = 'white';
    document.getElementById('desc7').style.color = 'white';
    document.getElementById('desc8').style.color = 'white';
    document.getElementById('projectcard1').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('projectcard2').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('projectcard3').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('projectcard4').style.backgroundColor =
      'rgb(26, 26, 26)';

    document.getElementById('input1').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('input2').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('input3').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('input4').style.backgroundColor = 'rgb(26, 26, 26)';

    document.getElementById('label1').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('label2').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('label3').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('label4').style.backgroundColor = 'rgb(26, 26, 26)';
  }

  if (toggle == false) {
    document.getElementById('page1').style.backdropFilter = 'invert(0)';
    document.getElementById('page2').style.backdropFilter = 'invert(0)';
    document.getElementById('page3').style.backdropFilter = 'invert(0)';
    document.getElementById('page4').style.backdropFilter = 'invert(0)';
    document.getElementById('page5').style.backdropFilter = 'invert(0)';
    document.getElementById('page6').style.backdropFilter = 'invert(0)';
    document.getElementById('page7').style.backdropFilter = 'invert(0)';
    document.getElementById('page8').style.backdropFilter = 'invert(0)';
    document.getElementById('namepage1').style.color = '#6d6d6d';
    document.getElementById('tophead').style.color = 'black';
    document.getElementById('mouse').style.filter = 'invert(0)';
    document.getElementById('aboutuscontent').style.filter = 'invert(0)';
    document.getElementById('hlink1').style.color = 'black';
    document.getElementById('hlink2').style.color = 'black';
    document.getElementById('hlink3').style.color = 'black';
    document.getElementById('hlink4').style.color = 'black';
    document.getElementById('hlink5').style.color = 'black';
    document.getElementById('cardbutton1').style.backgroundColor = 'white';
    document.getElementById('cardbutton2').style.backgroundColor = 'white';
    document.getElementById('cardbutton3').style.backgroundColor = 'white';
    document.getElementById('mainsec1').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec2').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec3').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec4').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec5').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec6').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec7').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec8').style.backgroundColor = '#ECECEC';
    document.getElementById('desc1').style.color = 'black';
    document.getElementById('desc2').style.color = 'black';
    document.getElementById('desc3').style.color = 'black';
    document.getElementById('desc4').style.color = 'black';
    document.getElementById('desc5').style.color = 'black';
    document.getElementById('desc6').style.color = 'black';
    document.getElementById('desc7').style.color = 'black';
    document.getElementById('desc8').style.color = 'black';

    document.getElementById('projectcard1').style.backgroundColor = '#c6c6c6';
    document.getElementById('projectcard2').style.backgroundColor = '#c6c6c6';
    document.getElementById('projectcard3').style.backgroundColor = '#c6c6c6';
    document.getElementById('projectcard4').style.backgroundColor = '#c6c6c6';

    document.getElementById('input1').style.backgroundColor = 'white';
    document.getElementById('input2').style.backgroundColor = 'white';
    document.getElementById('input3').style.backgroundColor = 'white';
    document.getElementById('input4').style.backgroundColor = 'white';

    document.getElementById('label1').style.backgroundColor = 'white';
    document.getElementById('label2').style.backgroundColor = 'white';
    document.getElementById('label3').style.backgroundColor = 'white';
    document.getElementById('label4').style.backgroundColor = 'white';
  }
}

darklightmode();
