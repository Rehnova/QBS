
// Toggle hamburger + mobile menu
function toggleMenu(menu) {
  menu.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
}

// Prevent dropdown disappearing too fast on desktop
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
  let timer;
  drop.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    drop.classList.add('active');
  });
  drop.addEventListener('mouseleave', () => {
    timer = setTimeout(() => drop.classList.remove('active'), 200);
  });
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      link.parentElement.classList.toggle('active');
    }
  });
});
// mobile nav end


let sliderUL = document.querySelector('.s-type-3 > .s-content');
let sliderLength = sliderUL.childElementCount;
let leftControl = document.querySelector('.s-type-3 .left-control');
let rightControl = document.querySelector('.s-type-3 .right-control');
let getCurrentIndex = () => Number(sliderUL.getAttribute('data-index'));
let setCurrentIndex = index => {
  console.log(index);
  sliderUL.setAttribute('data-index', index);
  sliderUL.style = `transform: translateX(-${(index - 1) * (100 / sliderLength)}%)`
}
let onControlClick = (direction) => {
  let index = getCurrentIndex();
  index = direction === 'left'
    ? (index === 1 ? sliderLength : index - 1)
    : (index === sliderLength ? 1 : index + 1)
  setCurrentIndex(index);
}

leftControl.addEventListener('click', () => onControlClick('left'));

rightControl.addEventListener('click', () => onControlClick('right'));




    document.getElementById('year2').textContent = new Date().getFullYear();
  
    document.getElementById('hamburger2').addEventListener('click', ()=>{
      document.getElementById('mainNav2').classList.toggle('open');
      document.getElementById('hamburger2').classList.toggle('active');
    });



function reloadSelf() {
  // Open the webhook submission in a hidden iframe
  const iframe = document.createElement('iframe');
  iframe.name = 'hidden_iframe';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  // Set form target to this iframe temporarily
  const form = document.getElementById('rideForm');
  form.target = 'hidden_iframe';

  // After a small delay, reload the page
  setTimeout(() => {
    window.location.reload();
  }, 500); // 0.5 second delay gives time for submission

  return true; // allow the form to submit
}
