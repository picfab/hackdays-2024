import { classNames } from '@/utils/classNames';
import React, { Suspense, lazy } from 'react';
const YoutubePlayer = lazy(() => import('./TrackingVideoYoutube'));
const VimeoPlayer = lazy(() => import('./TrackingVideoVimeo'));
const FacebookPlayer = lazy(() => import('./TrackingVideoFacebook'));
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

export type videoFormat = 'square' | 'video' | '4/3' | '3/4' | 'vertical';

export interface VideoPlayerProps {
  onTimeUpdate?: (timeUpdateArguments: TimeUpdateEvent) => void;
  url: string;
  className?: string;
}

export const classNameModalVideo = (ratio?: videoFormat, rounded = true) =>
  classNames(
    'max-h-[585px] w-11/12 md:w-full overflow-hidden mx-auto',
    rounded && 'rounded-18',
    ratio === 'square' && 'aspect-square',
    ratio === 'video' && 'aspect-video',
    ratio === '4/3' && 'aspect-4/3',
    ratio === '3/4' && 'aspect-3/4',
    ratio === 'vertical' && 'aspect-9/16',
    !ratio && 'aspect-auto'
  );

export const TrackingVideo = ({
  url,
  onTimeUpdate,
  className,
}: VideoPlayerProps) => {
  const videoProps = {
    url: url,
    controls: true,
    muted: false,
    onTimeUpdate,
    className: `TrackingVideo ${classNameModalVideo('video')} ${className}`,
    width: '640',
    height: '314',
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {url?.includes('youtu') && <YoutubePlayer {...videoProps} />}
      {url?.includes('vimeo') && (
        <VimeoPlayer
          {...videoProps}
          config={{
            playerOptions: {
              responsive: true,
              title: false,
              byline: false,
              color: '0F6FDE',
            },
          }}
        />
      )}
      {url?.includes('facebook') && <FacebookPlayer {...videoProps} />}
    </Suspense>
  );
};
