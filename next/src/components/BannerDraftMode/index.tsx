'use client';
export const BannerDraftMode = () => {
  const onCLick = () => {
    fetch('/api/disable-draft').then(() => {
      const userResponse = confirm('Disable draft mode?');
      if (userResponse) {
        window.close();
      }
    });
  };
  return (
    <div
      className='flex mb-3 items-center justify-center px-6 py-5 text-base bg-orange-400 text-black transition duration-300 ease-in-out motion-reduce:transition-none w-full opacity-100'
      role='alert'
    >
      Prewiew mode is activated.{' '}
      <button className='ml-3 underline hover:text-white' onClick={onCLick}>
        Disable
      </button>
    </div>
  );
};
