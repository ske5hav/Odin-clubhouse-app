
import React from 'react';

const UserCard = ( {userData}) => {
  return (
    <div className="w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
          K
        </div>
         {userData.map((user)=>{
           return(
        <div className="min-w-0">
          <h1 className="text-lg font-bold text-gray-800">
           Name : {user.name}
          </h1>

          <h2 className="break-all text-sm text-gray-500">
            Gmail : {user.email}
          </h2>
        </div>
      
         )})}

      <hr className="mb-5 border-gray-200" />

      <button className="w-full rounded-lg bg-red-50 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-600 hover:text-white active:scale-95">
        Delete User
      </button>
    </div>
    </div>
  );
};

export default UserCard;
