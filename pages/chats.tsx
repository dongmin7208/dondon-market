import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <div className='py-10 '>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div
          key={index}
          className='flex items-center px-4 pb-3 mb-3 space-x-3 border-b cursor-pointer last:border-b-0'
        >
          <div className='w-10 h-10 rounded-full bg-slate-300' />
          <div>
            <p className='text-gray-700 '>Steve Jebs</p>
            <p className='text-sm text-gray-500'>
              See you tomorrow in the corner pm 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
