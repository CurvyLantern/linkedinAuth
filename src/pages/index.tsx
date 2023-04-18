import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useSession, signIn, signOut } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  console.log({ session });

  return (
    <main>
      <div className='p-10'>
        {session ? (
          <button
            onClick={() => {
              signOut();
            }}
            className='text-white bg-green-700 px-5 py-3 rounded-lg'>
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              signIn('linkedin');
            }}
            className='text-white bg-green-700 px-5 py-3 rounded-lg'>
            login with linkedin
          </button>
        )}
      </div>
      {loading ? (
        <div>loading ...</div>
      ) : session ? (
        <div>
          <div>username : {session.user?.name}</div>
          <div>email : {session.user?.email}</div>
          <div>phone : </div>
          <div>
            <img
              src={session.user?.image || ''}
              alt='image'
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}

