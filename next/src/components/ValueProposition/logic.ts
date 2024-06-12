export const applyContainerSize = (columns: number, noContent: boolean) => {
  switch (columns) {
    case 1:
      return 'xl:w-10/12';
    case 2:
      return noContent ? 'xl:w-10/12' : '';
    default:
      return '';
  }
};

export const applyContentSize = (columns: number, noContent: boolean) => {
  switch (columns) {
    case 2:
      return !noContent ? 'md:w-4/12' : '';
    default:
      //1 column
      return 'w-full md:w-1/2';
  }
};
export const applyColumnSize = (columns: number, noContent: boolean) => {
  switch (columns) {
    case 2:
      return !noContent && 'lg:w-8/12';
    // return noContent
    //   ? 'md:-mx-12 lg:-mx-32'
    //   : 'lg:w-8/12 md:-mx-12 xl:-mx-32';
    case 3:
      return;
    // return 'md:-mx-12 lg:-mx-32';
    case 4:
      return;
    case 5:
      // return;
      return 'md:-mx-12 lg:-mx-24';
    default:
      //1 column
      return 'md:w-1/2';
  }
};

export const applyValuePropSize = (columns: number, noContent: boolean) => {
  switch (columns) {
    case 2:
      return noContent
        ? 'w-full md:w-1/2 md:px-12 lg:px-32'
        : 'w-full md:w-1/2 md:px-12 xl:px-32';
    case 3:
      return 'w-full md:w-1/3 md:px-12 lg:px-32';
    case 4:
      return 'w-full md:w-1/4 md:px-12 lg:px-24';
    case 5:
      return 'w-full md:w-1/5 md:px-12 lg:px-24';
    default:
      //1 column
      return 'w-full';
  }
};
