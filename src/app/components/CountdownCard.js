'use client';

import { useEffect, useState } from 'react';

export default function CountdownCard({ title, date }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const future = new Date(date);
      const diff = future - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="countdown-card">
      <h3>{title}</h3>
      <p className="release-date">{new Date(date).toDateString()}</p>
      <div className="time-boxes">
        <div><strong>{time.days}</strong><span>Days</span></div>
        <div><strong>{time.hours}</strong><span>Hours</span></div>
        <div><strong>{time.minutes}</strong><span>Minutes</span></div>
      </div>
    </div>
  );
}
