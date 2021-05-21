const Scoreboard = (props) => {

  const drawProgressBar = (score, max) => {
    let progressBar = '';
    if (score === max) {
      for (let i=0; i<score; i++) {
        progressBar += '⭐️';
      }
    }
    else {
      for (let i=0; i<score; i++) {
        progressBar += '█';
      }
      for (let i=0; i<max-score; i++) {
        progressBar += '░';
      }
    }
    return progressBar;
  }

  return (
    <div className="Scoreboard" > { /* add className when game is won—show it in green? */ }
      <p>Score: { props.score } out of { props.max }</p>
      <p>{drawProgressBar(props.score, props.max)}</p>
    </div>
  );
}

export default Scoreboard;
