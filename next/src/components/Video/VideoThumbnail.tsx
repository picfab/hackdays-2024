import React from 'react';

import { classNames } from '@/utils/classNames';
import { ImageWp } from '../image';
import { VideoOpenButton } from './VideoOpenButton';

export interface VideoThumbnailProps {
  toggleVideo: any;
  imageData?: string | number;
  logoData?: string | number;
  gradient?: boolean;
  classnameThumbnail?: string;
  classnameBoxThumbnail?: string;
  imagePriority?: boolean;
}

export const VideoThumbnail = ({
  toggleVideo,
  imageData,
  logoData,
  gradient,
  classnameThumbnail,
  classnameBoxThumbnail,
  imagePriority = false,
}: VideoThumbnailProps) => {
  return (
    <div
      role='button'
      tabIndex={0}
      className={classNames(
        'VideoThumbnail',
        'relative overflow-hidden group',
        'flex items-center justify-center',
        'h-full cursor-pointer w-full',
        classnameBoxThumbnail
      )}
      onClick={toggleVideo}
      onKeyDown={(e) => {
        if (e.key === 'enter') {
          toggleVideo();
        }
      }}
    >
      {imageData && (
        <ImageWp
          imageData={imageData}
          className={classNames(
            'object-cover w-full h-full rounded-18',
            classnameThumbnail
          )}
          priority={imagePriority}
          loading={imagePriority ? 'eager' : 'lazy'}
        />
      )}
      {gradient && (
        <div
          className={classNames(
            'absolute w-full h-full rounded-18',
            'bg-thumbnail-overlay'
          )}
        />
      )}
      {logoData && (
        <div
          className={classNames(
            'absolute flex justify-end',
            'h-24 overflow-hidden md:h-48 lg:h-64',
            'bottom-2 right-2 md:bottom-3 md:right-3',
            'lg:bottom-24 lg:right-24 rounded-6'
          )}
        >
          <ImageWp logoData={logoData} className='w-full h-full rounded-18' />
        </div>
      )}
      <VideoOpenButton />
    </div>
  );
};
