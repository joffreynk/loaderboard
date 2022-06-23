const displayScore = (scores) => {
  const listDOM = document.querySelector('.listOfGames');
  listDOM.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.innerHTML = `${user}: ${score}`;
    listDOM.appendChild(li);
  });
};

export default displayScore;
