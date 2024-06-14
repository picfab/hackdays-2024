import VimeoPlayer from 'react-player/vimeo';
import { useVideoProgress } from './useVideoProgress';

export const TrackingVideoVimeo = ({ onTimeUpdate, ...videoProps }: any) => {
  const { playerRef, progressHandle } = useVideoProgress(onTimeUpdate);
  return (
    <VimeoPlayer
      ref={playerRef}
      {...videoProps}
      onProgress={progressHandle}
      config={{
        playerOptions: {
          responsive: true,
          title: false,
          byline: false,
          color: '0F6FDE',
        },
      }}
    />
  );
};
export default TrackingVideoVimeo;
