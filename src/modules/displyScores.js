export const displayScore = (scores) => {
  const listDOM = document.querySelector('.listOfGames');
  listDOM.innerHTML = '';
  scores.forEach(({name, score}) => {
    const li = document.createElement('li');
    li.innerHTML = `${name}:  ${score}`;
    listDOM.appendChild(li);
  });
}