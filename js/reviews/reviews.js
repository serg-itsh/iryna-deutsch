const list = document.querySelector('.slider-text-and');

const textarea = document.querySelector('textarea');
// console.log(textarea);
const button = document.querySelector('.button-reviews');

button.addEventListener('click', addElement);

function addElement() {
  const text = document.createElement('p');
//   p.className = 'slider-text';
text.classList.add("slider-text");
  text.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';
 
//   list.insertAdjacentHTML('beforeend', text);
  list.after(text);
}
