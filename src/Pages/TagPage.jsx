import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-3xl mt-24">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Back
        </button>
        <h2 className="text-2xl font-bold mb-4">Blogs tagged with <span>{tag}</span></h2>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default TagPage;
