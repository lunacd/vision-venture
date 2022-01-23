import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
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
