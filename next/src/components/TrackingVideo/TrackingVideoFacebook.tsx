import FacebookPlayer from 'react-player/facebook';
import { useVideoProgress } from './useVideoProgress';

export const TrackingVideoFacebook = ({ onTimeUpdate, ...videoProps }: any) => {
  const { playerRef, progressHandle } = useVideoProgress(onTimeUpdate);
  return (
    <FacebookPlayer
      ref={playerRef}
      {...videoProps}
      onProgress={progressHandle}
    />
  );
};
export default TrackingVideoFacebook;
