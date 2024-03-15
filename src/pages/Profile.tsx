import React from 'react';
import ProfilePage from '../components/UserProfile';
import { Session } from 'next-auth';

interface ProfilePageProps {
  session: Session | null;
}

const ProfilePageWrapper: React.FC<ProfilePageProps> = ({ session }) => {
  return (
    <div>
      <ProfilePage session={session} />
    </div>
  );
};

export default ProfilePageWrapper;
