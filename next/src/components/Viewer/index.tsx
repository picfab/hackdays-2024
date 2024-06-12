import React from 'react';

import { ViewerContent } from './ViewerContent';
import { ViewerContext } from './ViewerContext';
import { ViewerElement } from './ViewerElement';

export interface ViewerComponentProps {
  way?: 'horizontal' | 'vertical';
  reverse?: boolean;
  indexSelected?: number;
  children: React.ReactNode;
}

export const ViewerComponent = ({
  children,
  reverse = false,
  way = 'horizontal',
  indexSelected = 0,
}: ViewerComponentProps) => {
  return (
    <ViewerContext.Provider
      value={{
        indexSelected,
        reverse,
        way,
      }}
    >
      {children}
    </ViewerContext.Provider>
  );
};

export const Viewer = Object.assign(ViewerComponent, {
  Content: ViewerContent,
  Element: ViewerElement,
});
