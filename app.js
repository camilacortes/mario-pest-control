const button = document.getElementById('button');

button.addEventListener('click', e => {
  e.preventDefault();
  const goombaNum = document.getElementById('goomba-num').value;
  const bobombsNum = document.getElementById('bobombs-num').value;
  const cheepcheepsNum = document.getElementById('cheep-cheeps-num').value;

  let total = Number(goombaNum) + Number(bobombsNum) + Number(cheepcheepsNum);

  const p = document.createElement('p');
  p.innerHTML = total;

  button.appendChild(p);
});
