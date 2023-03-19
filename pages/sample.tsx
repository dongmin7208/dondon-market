import type { NextPage } from 'next';

const Sample: NextPage = () => {
  return (
    <div className='grid min-h-screen gap-10 px-20 py-20 bg-slate-400'>
      <div className='p-6 bg-white shadow-xl rounded-3xl'>
        <span className='text-2xl font-semibold'>Select Item</span>
        {/* <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Herman Miller</span>
          <span className='font-semibold'>235,400円</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500'>AKRACING</span>
          <span className='font-semibold'>43,400円</span>
        </div> */}
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className='flex justify-between my-2'>
              <span className='text-gray-500'>Herman Miller</span>
              <span className='font-semibold'>235,400円</span>
            </li>
          ))}
        </ul>
        <ul>
          {['AKRACING', 'AKRACING', 'AKRACING', 'AKRACING', 'AKRACING', ''].map(
            (_, i) => (
              <li key={i} className='flex justify-between my-2'>
                <span className='text-gray-500'>AKRACING</span>
                <span className='font-semibold'>43,400円</span>
              </li>
            )
          )}
          {['a', 'b', 'c', ''].map((c, i) => (
            <li key={i} className='py-2 bg-red-500 empty:hidden'>
              {c}
              {/* <span className='text-gray-500'>AKRACING</span>
              <span className='font-semibold'>43,400円</span> */}
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
      <div className='overflow-hidden bg-white shadow-xl rounded-3xl'>
        <div className='p-6 bg-blue-500 pb-14'>
          <span className='text-2xl text-white'>Profile</span>
        </div>
        <div className='relative p-6 bg-white rounded-3xl -top-5'>
          <div className='relative flex items-end justify-between -top-16'>
            <div className='flex flex-col items-center'>
              <span className='text-xs text-gray-500'>注文</span>
              <span className='font-medium'>368,800</span>
            </div>
            <div className='w-24 h-24 rounded-full bg-zinc-300' />
            <div className='flex flex-col items-center'>
              <span className='text-xs text-gray-500'>払う</span>
              <span className='font-medium'>$368,800</span>
            </div>
          </div>
          <div className='relative flex flex-col items-center -mb-5 -mt-14'>
            <span className='text-lg font-medium'>Park miller</span>
            <span className='text-sm text-gray-500'>korean</span>
          </div>
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
      <form className='flex flex-col p-5 space-y-2 '>
        <input
          type='text'
          required
          placeholder='Username'
          className='p-1 border border-gray-400 rounded-md peer '
        />
        <span className='hidden peer-invalid:block peer-invalid:text-red-500'>
          This input is invalid
        </span>
        <span className='hidden peer-valid:block peer-valid:text-teal-500'>
          Awesome username
        </span>
        {/* <span className='hidden peer-hover:block peer-hover:text-amber-500'>
          Hello
        </span> */}
        <input type='submit' value='Login' className='bg-white' />
      </form>
    </div>
  );
};

export default Sample;
