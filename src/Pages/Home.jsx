import React from 'react';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-3xl mt-24">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
