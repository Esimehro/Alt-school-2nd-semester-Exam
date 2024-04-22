import React from 'react';
import smoke from '../assets/smoke.png';
import Header from './Header';

const Home = () => {
  return (
    <div class='bg-cover bg-center h-screen flex flex-col items-start justify-between' style={{ backgroundImage: `url(${smoke})` }}>
      <div class='p-6'>
       <h1 class='text-4xl font-semibold'>LOIS OMODIBO</h1>
       <h1 class='text-2xl font-semibold'>ALTSCHOOL EXAM</h1>
       <h2  class='text-1xl font-semibold'>FRONTEND ENGINEERING</h2>
       <h2  class='text-1xl font-semibold'>ALT/SOE/023/3219</h2>
      </div>

      <Header/>
    </div>
  )
}

export default Home;
