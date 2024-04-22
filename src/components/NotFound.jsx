import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gray-100 h-[calc(100vh-4rem)] flex items-center justify-center bg-dark-yellow">
      <main className="px-0">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl">Page not found</p>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
