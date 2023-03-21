import type { NextPage } from 'next';

const Sample: NextPage = () => {
  return (
    <div className='grid min-h-screen gap-10 px-20 py-20 xl:place-content-center lg:grid-cols-3 bg-slate-400'>
      <div className='p-6 bg-white shadow-xl landscape:bg-red-900 md:bg-teal-400 xl:bg-yellow-300 2xl:bg-red-300 lg:bg-indigo-500 sm:bg-red-400 rounded-3xl xl:col-span-1 lg:col-span-2'>
        <span className='text-2xl font-semibold'>Select Item</span>
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className='flex justify-between my-2'>
              <span className='text-gray-500'>Herman Miller</span>
              <span className='font-semibold'>235,400円</span>
            </li>
          ))}
        </ul>
        <div className='flex justify-between pt-2 mt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>368,800円</span>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          Checkout
        </div>
      </div>
      <div className='p-6 bg-white shadow-xl md:bg-teal-400 xl:bg-yellow-300 2xl:bg-red-300 lg:bg-indigo-500 sm:bg-red-400 rounded-3xl'>
        <span className='text-2xl font-semibold'>Select Item</span>
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className='flex justify-between my-2'>
              <span className='text-gray-500'>Herman Miller</span>
              <span className='font-semibold'>235,400円</span>
            </li>
          ))}
        </ul>
        <div className='flex justify-between pt-2 mt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>368,800円</span>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          Checkout
        </div>
      </div>
      <div className='p-6 bg-white shadow-xl rounded-3xl'>
        <div className='flex items-center justify-between mb-5'>
          <span>⬅️</span>
          <div className='space-x-3'>
            <span>⭐️ 4.9</span>
            <span className='p-2 rounded-md shadow-xl'>💖</span>
          </div>
        </div>
        <div className='mb-5 bg-zinc-400 h-72' />
        <div className='flex flex-col'>
          <span className='text-xl font-medium'>Herman Miller</span>
          <span className='text-xs text-gray-500'>アーロンチェア</span>
          <div className='flex items-center justify-between mt-3 mb-5'>
            <div className='space-x-2'>
              <button
                title='button'
                className='w-5 h-5 transition bg-yellow-500 rounded-full focus:ring-2 ring-offset-2 ring-yellow-300'
              ></button>
              <button
                title='button'
                className='w-5 h-5 transition bg-gray-600 rounded-full focus:ring-2 ring-offset-2 ring-black-300'
              ></button>
              <button
                title='button'
                className='w-5 h-5 transition bg-red-500 rounded-full focus:ring-2 ring-offset-2 ring-red-300'
              ></button>
            </div>
            <div className='flex items-center space-x-5'>
              <button className='flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square'>
                -
              </button>
              <span>1</span>
              <button className='flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square'>
                +
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-medium'>450,000円</span>
            <button className='px-8 py-2 text-xs text-center text-white bg-blue-500 rounded-lg'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
