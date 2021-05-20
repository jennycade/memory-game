const Scoreboard = (props) => {

  return (
    <div className="Scoreboard">
      Score: { props.score } out of { props.max }
    </div>
  );
}

export default Scoreboard;
