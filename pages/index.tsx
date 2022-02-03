import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className='h-[38rem] bg-cardinal flex flex-col items-center relative'>
        <div className='absolute left-1/2 transform -translate-x-1/2 text-white top-32 text-2xl'>Welcome to</div>
        <picture className="h-full relative top-20">
          <source srcSet={require('../images/vv_right_light_gold.png?webp')} type='image/webp' />
          <source srcSet={require('../images/vv_right_light_gold.png')} type='image/png' />
          <img src={require('../images/vv_right_light_gold.png')} alt="Vision Venture logo" />
        </picture>
      </div>
      <div className='text-xl mt-20 ml-10'>The workflow text and the icon is one wide icon. We can imitate since we are
        using Glacial Indifference as the logo font.
      </div>
      <div className='text-xl mt-8 ml-10'>As for the avatar and notification icon on the right, I doubt we are going to
        need it, but it is there just in case.
      </div>
      <div className='text-xl mt-8 ml-10'>I think the white version with underbars look better, but that is not included
        in the trial version. You can see the effects here:
        https://tailwindui.com/components/application-ui/navigation/navbars. Just scroll down. For that version, we can
        just change the purple accent color to be cardinal.
      </div>
    </>
  );
};

export default Home;
