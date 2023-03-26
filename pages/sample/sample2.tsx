import type { NextPage } from 'next';

const Sample: NextPage = () => {
  const Icon = () => {
    return (
      <svg
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
        ></path>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
        ></path>
      </svg>
    );
  };
  return (
    <div className='min-h-screen px-20 py-20 bg-white grid gap-10 '>
      <div className='p-6 bg-yellow-400 shadow-xl rounded-3xl'>
        <span className='flex mt-72'></span>
        <span className='text-2xl font-semibold mt-11'>Select Destination</span>
        <ul className='border-t-2 border-black border-solid'>
          {[
            'Vancouver',
            'Seattle',
            'Portland',
            'Seattle',
            'San Francisco',
            'Los Angeles',
            'San Diego',
          ].map((a, i) => (
            <li key={i} className='flex my-2 hover:text-white'>
              <span className='flex w-8'>
                <Icon />
              </span>
              <span className='text-black-500 hover:text-white'>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sample;
