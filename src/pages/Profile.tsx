import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchUserProfile, UserProfile } from '../services/userService';

const ProfilePage: React.FC = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await fetchUserProfile();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Error fetching user data');
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    {/* Display other user data as needed */}
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
