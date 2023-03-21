import type { NextPage } from 'next';

const Sample: NextPage = () => {
  return (
    <div className='grid min-h-screen gap-10 px-20 py-20 bg-slate-400'>
      <form className='flex flex-col p-5 space-y-2 bg-blue-300 focus-within:bg-blue-100'>
        <input
          type='text'
          required
          placeholder='Username'
          className='p-1 border border-yellow-500 rounded-md placeholder-shown:bg-teal-100 peer required:border-2'
        />
        <span className='hidden peer-invalid:block peer-invalid:text-red-500'>
          This input is invalid
        </span>
        <span className='hidden peer-valid:block peer-valid:text-teal-500'>
          Awesome username
        </span>
        <input type='password' required placeholder='Password' />
        <input
          type='text'
          disabled
          placeholder='text'
          className='border-red-400 bg-slate-300 disabled:opacity-10'
        />
        <input type='submit' value='Login' className='bg-white' />
        <span className='hidden peer-hover:block peer-hover:text-amber-500'>
          Hello
        </span>
      </form>
    </div>
  );
};

export default Sample;
