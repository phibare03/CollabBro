import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navigation from './Navigation';
import Cards from '../Features/Cards';
import Head from '../Features/Head'
import Chall from '../Features/Chall';
import Foot from '../Features/Foot';


const Events = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-blue-200 via-teal-200 to-green-200 min-h-screen">
       <Navigation />
       <Head/>
       <Chall/>
       <Cards/>
       <Foot/>
       </div>
    </>
  );
};

export default Events;
