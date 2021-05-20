const Scoreboard = (props) => {

  console.log('I am a line in Scoreboard.js. I am being run.');
  return (
    <div className="Scoreboard">
      Score: { props.score } out of { props.max }
    </div>
  );
}

export default Scoreboard;
