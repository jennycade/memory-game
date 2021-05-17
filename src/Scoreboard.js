import { useState } from 'react';

const Scoreboard = (props) => {
  const [score, setScore] = useState(0);

  return (
    <div className="Scoreboard">
      Score: { score }
    </div>
  );
}

export default Scoreboard;
