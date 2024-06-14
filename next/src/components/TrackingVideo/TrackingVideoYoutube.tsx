import YoutubePlayer from 'react-player/youtube';
import { useVideoProgress } from './useVideoProgress';

export const TrackingVideoYoutube = ({ onTimeUpdate, ...videoProps }: any) => {
  const { playerRef, progressHandle } = useVideoProgress(onTimeUpdate);
  return (
    <YoutubePlayer
      ref={playerRef}
      {...videoProps}
      onProgress={progressHandle}
    />
  );
};
export default TrackingVideoYoutube;
