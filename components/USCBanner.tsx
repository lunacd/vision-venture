import { NextPage } from 'next';

const USCBanner: NextPage = () => {
  return (
    <div id='usc-banner' className='bg-black overflow-auto'>
      <a className='float-right'>
        <img
          src={require('../images/usc-shield-name-white.png')}
          className='h-[38px] w-[176px] m-[11px]'
          alt='USC Logo'
        />
      </a>
    </div>
  );
};

export default USCBanner;