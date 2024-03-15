import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import type { Session } from 'next-auth';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/Login', 
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

interface ProfileProps {
  session: Session | null; 
}
  
function Profile({ session }: ProfileProps) {
  return (
    <div>
      <h1>Welcome, {session?.user?.name || 'Guest'}</h1>
      <p>Your email: {session?.user?.email || 'Unknown'}</p>
    </div>
  );
}

export default Profile;
