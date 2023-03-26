import type { NextPage } from 'next';

const Sample: NextPage = () => {
  return (
    <div className='grid min-h-screen gap-10 px-20 py-20 xl:place-content-center lg:grid-cols-3 bg-slate-400'>
      <div className='p-6 bg-white shadow-xl rounded-3xl xl:col-span-1 lg:col-span-2'>
        <span className='text-2xl font-semibold'>Weather</span>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-gray-500 shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-4 ml-2 text-left'>
            <div className='flex flex-col'>
              <span>Casius</span>
              <span>Mars, 12AM</span>
            </div>
            <div className=''>
              <span>Icon</span>
              <span className=''>85</span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-yellow-500 shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-4 ml-2 text-left'>
            <div className='flex flex-col'>
              <span>Dlacria</span>
              <span>Mars, 12AM</span>
            </div>
            <div className=''>
              <span>Icon</span>
              <span className=''>85</span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-teal-500 shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-4 ml-2 text-left'>
            <div className='flex flex-col'>
              <span>New York</span>
              <span>Mars, 12AM</span>
            </div>
            <div className=''>
              <span>Icon</span>
              <span className=''>85</span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-orange-500 shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-4 ml-2 text-left'>
            <div className='flex flex-col'>
              <span>Zomato</span>
              <span>Mars, 12AM</span>
            </div>
            <div className=''>
              <span>Icon</span>
              <span className=''>20</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center mx-auto my-auto mt-5 border rounded-3xl w-14 h-14'>
          +
        </div>
      </div>
      <div className='p-6 bg-white shadow-xlrounded-3xl'>
        <div className='flex items-center justify-center mx-auto my-auto mt-5 border rounded-3xl w-14 h-14'>
          X
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div>SIMPLE TAG</div>
          <div className='text-xl'>Work with best</div>
          <div className='text-xl'>designers</div>
        </div>
        <div className='grid flex-row justify-center grid-cols-2 gap-5 m-auto'>
          <div className='w-32 h-40 p-8 bg-yellow-400 border rounded-xl'></div>
          <div className='w-32 h-40 p-8 bg-teal-400 border rounded-xl'></div>
          <div className='w-32 h-40 p-8 bg-pink-400 border rounded-xl'></div>
          <div className='w-32 h-40 p-8 bg-red-400 border rounded-xl'></div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          lets get it done
        </div>
      </div>
      <div className='p-6 bg-yellow-500 shadow-xl rounded-3xl'>
        <div className='flex items-center justify-between mb-5'>
          <span className='flex items-center justify-center bg-white border rounded-3xl w-11 h-11'>
            ⬅
          </span>
        </div>
        <div className='flex justify-center text-xl font-bold'>Friends</div>
        <div className='w-3/4 p-1 mx-auto mt-5 text-center text-white bg-white shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-4 ml-2 text-left bg-white'>
            <div className='flex flex-col text-gray-900 '>
              <span>Search With Love ...</span>
            </div>
            <div className=''>
              <span>Icon</span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 text-center text-white bg-white shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-1 ml-1 text-gray-900'>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center mx-auto my-auto mt-5 border rounded-3xl w-14 h-14'>
                X
              </div>
              <div className='flex flex-col text-left'>
                <span>Bill Rizer</span>
                <span>Planet Designer</span>
              </div>
            </div>
            <div className='flex items-center justify-center bg-yellow-400 h-9 rounded-xl w-14'>
              <span className='flex items-center justify-center h-8 text-center border-black-700 rounded-3xl w-14'>
                Invite
              </span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 mt-6 text-center text-white bg-white shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-1 ml-1 text-gray-900'>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center mx-auto my-auto mt-5 border rounded-3xl w-14 h-14'>
                X
              </div>
              <div className='flex flex-col text-left'>
                <span>Genbei Yagy</span>
                <span>Planet Designer</span>
              </div>
            </div>
            <div className='flex items-center justify-center bg-yellow-400 h-9 rounded-xl w-14'>
              <span className='flex items-center justify-center h-8 text-center border-black-700 rounded-3xl w-14'>
                Invite
              </span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-5 mt-6 text-center text-white bg-white shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-1 ml-1 text-gray-900'>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center mx-auto my-auto mt-5 border rounded-3xl w-14 h-14'>
                X
              </div>
              <div className='flex flex-col text-left'>
                <span>Lancy Neo</span>
                <span>Rogue Corp</span>
              </div>
            </div>
            <div className='flex items-center justify-center bg-black h-9 rounded-xl w-14'>
              <span className='flex items-center justify-center h-8 text-center text-white border-black-700 rounded-3xl w-14'>
                Invited
              </span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-6 text-center text-white bg-white shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-1 ml-1 text-gray-900'>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center mx-auto my-auto mt-5 border rounded-3xl w-14 h-14'>
                X
              </div>
              <div className='flex flex-col text-left'>
                <span>Genbei Yagy</span>
                <span>Hard Cops</span>
              </div>
            </div>
            <div className='flex items-center justify-center bg-yellow-400 h-9 rounded-xl w-14'>
              <span className='flex items-center justify-center h-8 text-center border-black-700 rounded-3xl w-14'>
                Invite
              </span>
            </div>
          </div>
        </div>
        <div className='w-3/4 p-3 mx-auto mt-6 text-center text-white bg-white shadow-lg rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          <div className='flex items-center justify-between m-1 ml-1 text-gray-900'>
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center mx-auto my-auto mt-5 border rounded-3xl w-14 h-14'>
                X
              </div>
              <div className='flex flex-col text-left'>
                <span>Konami</span>
                <span>Xenon Creator</span>
              </div>
            </div>
            <div className='flex items-center justify-center bg-yellow-400 h-9 rounded-xl w-14'>
              <span className='flex items-center justify-center h-8 text-center border-black-700 rounded-3xl w-14'>
                Invite
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
