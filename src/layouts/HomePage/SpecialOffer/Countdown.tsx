import React, { useState, useEffect } from 'react';

interface CountdownProps {
  expirationDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ expirationDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expirationDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expirationDate]);

  return (
    <div className="countdown fw-bold fs-4" >
      <span>{Math.floor(timeRemaining / (1000 * 60 * 60 * 24))}d </span>
      <span>{Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h </span>
      <span>{Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))}m </span>
      <span>{Math.floor((timeRemaining % (1000 * 60)) / 1000)}s</span>
    </div>
  );
};

export default Countdown;