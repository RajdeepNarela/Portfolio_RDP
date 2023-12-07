document.addEventListener('DOMContentLoaded', function () {
  // Intersection Observer for fade-in effect
  const sections = document.querySelectorAll('section');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Alert Button
  const alertButton = document.getElementById('btn-alert');
  alertButton.addEventListener('click', function () {
    alert('Hello world!');
  });

  // Hover Button
  const hoverButton = document.getElementById('btn-hover');
  hoverButton.addEventListener('mouseover', function () {
    hoverButton.innerText = 'New button label';
  });

  hoverButton.addEventListener('mouseleave', function () {
    hoverButton.innerText = 'Default button label';
  });

  // Incrementing Button
  let count = 1;
  const incrementButton = document.getElementById('btn-counter');
  const counterText = document.getElementById('txt-counter');

  incrementButton.addEventListener('click', function () {
    count++;
    counterText.innerHTML = 'Number: ' + count;

    // Check for even or odd and update text color
    if (count % 2 === 0) {
      counterText.classList.remove('odd');
      counterText.classList.add('even');
    } else {
      counterText.classList.remove('even');
      counterText.classList.add('odd');
    }
  });

  // For Loops
  const orderedList = document.getElementById('numbers');

  for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    orderedList.appendChild(listItem);
  }
});
