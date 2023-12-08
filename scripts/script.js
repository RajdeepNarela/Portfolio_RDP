
window.onload = function() {
  

  var currentYear = new Date().getFullYear();

  // Footer
  document.getElementById('footer').innerHTML = '&copy; ' + currentYear + ' Rajdeep Narela. All rights reserved.';
};
// Alert 
document.getElementById('btn-alert').addEventListener('click', () => {
  alert('Hello Professor!');
});


document.getElementById('btn-hover').addEventListener('mouseover', () => {
  // Hover
  document.getElementById('btn-hover').innerText = 'New Button Label';
});


document.getElementById('btn-hover').addEventListener('mouseleave', () => {

  document.getElementById('btn-hover').innerText = 'Default Button Label';
});
// count button
let count = 1;

document.getElementById('btn-counter').onclick = () => {
  count = count + 1;
  const counterText = document.getElementById('txt-counter');

  
  counterText.innerHTML = `Number: ${count}`;

  
  if (count % 2 === 0) {
    counterText.classList.remove('odd');
    counterText.classList.add('even');
  } else {
    counterText.classList.remove('even');
    counterText.classList.add('odd');
  }
};


//loop
const numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {
  
  const listItem = document.createElement('li');

  
  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

  
  numbersList.appendChild(listItem);
}
