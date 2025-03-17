'use client';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Testino from '../components/Testino';

export default function Hme() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <Testino/>
      <Footer/>
    </div>
  );
}