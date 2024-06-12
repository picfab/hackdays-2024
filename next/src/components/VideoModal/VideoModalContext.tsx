import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';

export interface VideoModalContextProps {
  toggleVideo?: Dispatch<SetStateAction<boolean>>;
  showVideo?: boolean;
  ctaLightboxTitle?: string;
  ctaButtonLightbox?: ReactNode;
  ratio?: 'video' | 'vertical' | 'square' | '4/3' | '3/4';
  video?: string;
}

export const VideoModalContext = createContext<VideoModalContextProps>({});
