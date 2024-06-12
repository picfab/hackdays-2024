import { useRef, useState } from 'react';

interface ProgressInfo {
  playedSeconds: number;
}

interface TimeUpdateEvent {
  /**
   * The length of the video in seconds.
   */
  duration: number;
  /**
   * The amount of the video, in seconds, that has played from the current playback position.
   */
  seconds: number;
  /**
   * The amount of the video that has played from the current playback position in comparison to the length of the video; multiply by 100 to obtain the percentage.
   */
  percent: number;
}

export const onProgressHandle = (
  event: ProgressInfo,
  playerRef: any,
  timePlayed: any,
  setTimePlayed: any,
  onTimeUpdate: any = null,
) => {
  if (playerRef.current) {
    const duration = playerRef.current?.getDuration();
    const { playedSeconds } = event;
    const percent = playedSeconds / duration;
    const preventTime = 0.01; // On vimeo sometime we never arrive to 100% progress
    const timeUpdate: TimeUpdateEvent = {
      seconds: playedSeconds,
      duration,
      percent: percent + preventTime,
    };

    const currentQuarter = Math.floor(4 * percent);

    if (currentQuarter !== timePlayed) {
      setTimePlayed(currentQuarter);
      // track('Video viewed', {
      //   videoProgress: currentQuarter / 4,
      //   pageTitle: document.title,
      // });
    }
    if (onTimeUpdate) onTimeUpdate(timeUpdate);
  }
};

export const useVideoProgress = (
  onTimeUpdate: (timeUpdateArguments: TimeUpdateEvent) => void,
) => {
  const playerRef = useRef<any | null>(null);
  const [timePlayed, setTimePlayed] = useState<number | null>(null);

  const progressHandle = (event: ProgressInfo) => {
    onProgressHandle(event, playerRef, timePlayed, setTimePlayed, onTimeUpdate);
  };

  return { playerRef, progressHandle };
};
