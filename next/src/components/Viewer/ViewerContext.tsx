import { createContext } from 'react';
export interface ViewerContextType {
  indexSelected?: number;
  indexPrevious?: number | null;
  reverse?: boolean;
  way?: string;
}

export const ViewerContext = createContext<ViewerContextType>({});
