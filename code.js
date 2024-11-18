function magneticButton(element) {
  const children = element.children[0];

  element.addEventListener('mousemove', (e) => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
    const left = e.pageX - offsetLeft;
    const top = e.pageY - offsetTop;
    const centerX = left - offsetWidth / 2;
    const centerY = top - offsetHeight / 2;
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);

    gsap.to(element, {
      duration: 0.5,
      x: centerX / 2.5,
      y: centerY / 2.5,
      ease: "elastic.out(1, 0.3)",
    });

    children.style.transform = `
      translate3d(${centerX / 4}px, ${centerY / 4}px, 0)
      rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)
    `;
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      duration: 3,
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.1)",
    });
    children.style.transform = '';
  });
}

// Select all <a> elements and apply the magneticButton function to each
const buttons = document.querySelectorAll('.magnetic-btn');
buttons.forEach((button) => magneticButton(button));

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},1500)


let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.querySelector('#theme_switch'); // Use a valid selector

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode'); // Corrected to remove the class
  localStorage.setItem('darkmode', 'null');
};

// Initialize theme on page load
if (darkmode === "active") enableDarkmode();

// Check if themeSwitch exists before adding event listener
if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  });
} else {
  console.error("themeSwitch element not found.");
}


