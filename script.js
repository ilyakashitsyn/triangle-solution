const triangle = document.getElementById('triangle');

let hash = '';
const ul = document.createElement('ul');

for (i = 1; i <= 7; i++) {
  hash += '#';

  console.log(hash);

  const li = document.createElement('li');
  li.textContent = hash;

  ul.appendChild(li);
}
triangle.appendChild(ul);
