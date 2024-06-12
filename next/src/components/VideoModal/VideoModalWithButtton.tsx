import React, { ReactNode, useState } from 'react';
import { ModalVideoContent } from './ModalVideoContent';
import { VideoModalContext } from './VideoModalContext';
import { lockScroll } from '@/utils/lockScroll';

export interface VideoModalProps {
  VideoPlayer?: ReactNode;
  ctaLightboxTitle?: string;
  ctaButtonLightbox?: ReactNode;
  ratio?: 'video' | 'vertical' | 'square' | '4/3' | '3/4';
}

export const VideoModalWithButtton = ({
  VideoPlayer,
  ctaLightboxTitle,
  ctaButtonLightbox,
  ratio = 'video',
}: VideoModalProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () =>
    setShowVideo((p) => {
      lockScroll(!p);

      return !p;
    });

  return (
    <VideoModalContext.Provider
      value={{
        toggleVideo,
        showVideo,
        ctaLightboxTitle,
        ctaButtonLightbox,
        // video,
        ratio,
      }}
    >
      {/* <ButtonV2 {...customPlayButton} onClick={toggleVideo} /> */}
      <ModalVideoContent />
    </VideoModalContext.Provider>
  );
};
