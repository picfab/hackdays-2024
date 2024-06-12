export const BannerDraftMode = () => {
  return (
    <div
      className='inline-flex mb-3 items-center rounded-lg px-6 py-5 text-base bg-neutral-800 text-neutral-50 transition duration-300 ease-in-out motion-reduce:transition-none w-full opacity-100'
      role='alert'
    >
      Prewiew mode is activated.{' '}
      <button className='ml-3 underline'>Disable</button>
    </div>
  );
};
