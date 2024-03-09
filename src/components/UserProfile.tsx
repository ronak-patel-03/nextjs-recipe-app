import React from 'react';

const UserProfile: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                <p className="text-gray-700">This is the user profile page. You can display user information here.</p>
            </div>
        </div>
    );
};

export default UserProfile;
