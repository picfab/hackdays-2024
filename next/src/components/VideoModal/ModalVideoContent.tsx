import React, { ReactNode, useContext } from 'react';
import { Modal } from '../../components/Modal';
import { VideoModalContext } from './VideoModalContext';
import { classNames } from '@/utils/classNames';
import { TrackingVideo } from '../TrackingVideo';

export interface ModalVideoContentProps {
  ctaLightboxTitle?: string;
  ctaButtonLightbox?: ReactNode;
  ratio?: 'video' | 'vertical' | 'square' | '4/3' | '3/4';
  showVideo?: boolean;
}

export const ModalVideoContent = () => {
  const context = useContext<any>(VideoModalContext);

  return (
    <Modal
      open={context.showVideo}
      toggleModal={context.toggleVideo}
      classNameContent={classNames(
        'mx-auto',
        'max-w-[800px] xl:max-w-[1000px]'
      )}
    >
      <div className='VideoContentModal'>
        {context?.video && context.showVideo && (
          <TrackingVideo url={context?.video} />
        )}
      </div>
    </Modal>
  );
};
