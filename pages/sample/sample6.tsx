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
    <div className='flex flex-col p-5 bg-orange-400 space-y2'>
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
      <div className='flex flex-col p-10 bg-white-400 rounded-3xl'>
        <p className='text-center'>Hello, Bruno!</p>
        <p className='text-center'>Your Medicines for today</p>
        <div className='flex justify-around mt-6 '>
          <div className='flex flex-col p-3 hover:bg-blue-400 hover:rounded-2xl'>
            <p>16</p>
            <p>Mon</p>
          </div>
          <div className='flex flex-col p-3 hover:bg-blue-400 hover:rounded-2xl'>
            <p>17</p>
            <p>Tue</p>
          </div>
          <div className='flex flex-col p-3 hover:bg-blue-400 hover:rounded-2xl'>
            <p>18</p>
            <p>Wed</p>
          </div>
          <div className='flex flex-col p-3 hover:bg-blue-400 hover:rounded-2xl'>
            <p>19</p>
            <p>Thu</p>
          </div>
          <div className='flex flex-col p-3 hover:bg-blue-400 hover:rounded-2xl'>
            <p>20</p>
            <p>Fri</p>
          </div>
          <div className='flex flex-col p-3 hover:bg-blue-400 hover:rounded-2xl'>
            <p>21</p>
            <p>Sat</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-6 bg-yellow-400 border-8 border-r rounded-3xl'>
        <div className='flex flex-col h-7 hover:active:bg-blue-400'></div>
        <p className='first-letter:text-3xl first-letter:hover:text-purple-400'>
          Nora - BE
        </p>
        <span className='first-letter:text-2xl'>Norenthindrone - 0.35mg</span>
        <span className='mt-8'>7h30AM</span>
      </div>
      <div className='flex flex-col p-6 bg-teal-600 border-8 border-r rounded-3xl'>
        <p className='first-letter:text-3xl first-letter:hover:text-purple-400'>
          Feosol
        </p>
        <span className='first-letter:text-2xl'>Ferrous Sulfate - 600mg</span>
        <span className='mt-8'>7h30AM</span>
      </div>
    </div>
  );
};

export default Sample;
