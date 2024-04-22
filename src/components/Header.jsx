import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Links from './Links';

const Header = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const myDate = new Date();
      const hrs = myDate.getHours();
      const mins = myDate.getMinutes();
      let timeOfDay = 'AM';

      if (hrs >= 12) {
        timeOfDay = 'PM';
      }

      const hour = hrs % 12 || 12; 
      const time = `${hour}:${mins < 10 ? '0' + mins : mins} ${timeOfDay}`;
      setCurrentTime(time);

      if (hrs < 12) {
        setGreeting('Good Morning');
      } else if (hrs >= 12 && hrs < 17) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex items-center justify-between p-5 w-full">
      <img src={logo} alt="Logo" className="w-40 hover:scale-110 transition-transform duration-300 ease-in-out" />

      <div className="flex items-center gap-16">
        <Links/>

        <div className="text-blue-500">{currentTime && <p>{`${greeting}, it's ${currentTime}`}</p>}</div>
      </div>
    </nav>
  );
};

export default Header;
