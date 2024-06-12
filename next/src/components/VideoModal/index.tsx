'use client';
import { ReactNode, useState } from 'react';

import { VideoThumbnail } from '../Video/VideoThumbnail';

import { ModalVideoContent } from './ModalVideoContent';
import { VideoModalContext } from './VideoModalContext';
import { classNames } from '@/utils/classNames';

export interface VideoModalProps {
  gradient?: boolean;
  logoData?: any;
  imageData?: any;
  VideoPlayer?: ReactNode;
  customPlayButton?: any;
  ShortVideo?: ReactNode;
  ctaLightboxTitle?: string;
  ctaButtonLightbox?: ReactNode;
  ratio?: 'video' | 'vertical' | 'square' | '4/3' | '3/4';
  className?: string;
  classnameThumbnail?: string;
  classnameBoxThumbnail?: string;
  onClick?: any;
  url: string;
  imagePriority?: boolean;
}

export const VideoModal = ({
  gradient = true,
  logoData,
  imageData,
  url,
  className,
  ratio = 'video',
  classnameThumbnail,
  classnameBoxThumbnail,
  imagePriority = false,
}: VideoModalProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = (e: any) => {
    setShowVideo(!showVideo);
  };

  return (
    <VideoModalContext.Provider
      value={{
        toggleVideo,
        showVideo,
        ratio,
        video: url,
      }}
    >
      <div className={classNames('VideoModal', className)}>
        <VideoThumbnail
          toggleVideo={toggleVideo}
          imageData={imageData}
          gradient={gradient}
          logoData={logoData}
          classnameThumbnail={classnameThumbnail}
          classnameBoxThumbnail={classnameBoxThumbnail}
          imagePriority={imagePriority}
        />
        <ModalVideoContent />
      </div>
    </VideoModalContext.Provider>
  );
};
