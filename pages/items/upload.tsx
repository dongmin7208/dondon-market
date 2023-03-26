import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <div className='px-4 py-10'>
      <div>
        <div>
          <label className='flex items-center justify-center w-full h-48 py-6 text-gray-600 border-2 border-gray-300 border-dashed cursor-pointer hover:border-orange-500 hover:text-orange-500 rouned-md'>
            <svg
              className='w-12 h-12'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 48 48'
              aria-hidden='true'
            >
              <path
                d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <input className='hidden' placeholder='file' type='file' />
          </label>
        </div>
      </div>
      <div className='my-5'>
        <label
          className='block mb-1 text-sm font-medium text-gray-700'
          htmlFor='price'
        >
          Price
        </label>
        <div className='relative flex items-center rounded-md shadow-sm'>
          <div className='absolute left-0 flex items-center justify-center pl-3 pointer-events-none'>
            <span className='text-sm text-gray-500'>$</span>
          </div>
          <input
            type='text'
            placeholder='0.00'
            className='w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
          />
          <div className='absolute right-0 flex items-center pr-3 pointer-events-none'>
            <span className='text-gray-500'>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className='block mb-1 text-sm font-medium text-gray-700'>
          Description
        </label>
        <textarea
          className='w-full mt-4 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none'
          placeholder='色、素材、重さ、定価、注意点など

          例) 2023年頃に1万円で購入したジャケットです。ライトグレーで傷はありません。あわせやすいのでおすすめです。
         
         #ジャケット #ジャケットコーデ'
          rows={4}
        />
      </div>
      <button>Upload product</button>
    </div>
  );
};

export default Upload;
