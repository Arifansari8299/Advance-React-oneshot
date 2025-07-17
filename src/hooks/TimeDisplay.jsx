import { useEffect, useState } from 'react';

function TimeDisplay() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup
    return () => clearInterval(interval);
  }, []); // [] => Run only once on mount

  return <h2 className="text-xl">{time}</h2>;
}

export default TimeDisplay;
