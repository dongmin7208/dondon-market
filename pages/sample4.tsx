import type { NextPage } from 'next';

const Sample: NextPage = () => {
  const Month = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',

      'October',
      'November',
      'December',
    ];
    return months;
  };

  return (
    <div className='flex flex-col p-5 space-y2'>
      <details>
        <summary className='border-b-2 border-gray-300 border-solid cursor-pointer '>
          March 2023
        </summary>
        {Month().map((month, i) => (
          <span
            key={i}
            className='flex border-gray-300 border-solid selection:bg-teal-500 selection:text-white'
          >
            {month}
          </span>
        ))}
      </details>
      <p className='first-letter:text-7xl first-letter:hover:text-purple-400'>
        show me the money black sheep wall
      </p>
      <input
        type='file'
        title='Upload'
        className='file:cursor-pointer file:hover:text-purple-300 file:hover:bg-white file:hover:border-purple-800 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400 '
      />
    </div>
  );
};

export default Sample;
