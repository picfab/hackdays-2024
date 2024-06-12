import React, { FC, ReactNode, useRef } from 'react';



import { classNames } from '@/utils/classNames';

export interface ValuePropositionColumnsItemsProps {
  title?: ReactNode;
  paragraph?: ReactNode;
  cta?: ReactNode;
}

export interface ValuePropositionProps {
  surtitle?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  columns: number;
  columnsItems?: ValuePropositionColumnsItemsProps[];
  contentText?: {
    title: ReactNode;
    paragraph: ReactNode;
  };
  contentCta?: ReactNode;
  contentRight?: boolean;
  isDark?: boolean;
  className?: string;
  iconBackground?: boolean;
  id?: string;
  disabledAnimation?: boolean;
  forceBgCodeColor?: 21 | 51 | 101 | 301;
}

export const ValueProposition: FC<ValuePropositionProps> = ({
  surtitle,
  title,
  subtitle,
  columns,
  contentText,
  contentCta,
  columnsItems,
  contentRight,
  isDark = false,
  className = '',
  id = '',
  disabledAnimation = true,
  forceBgCodeColor,
}) => {
  const refTitle = useRef(null);



  return (
    <div
      className={classNames(
        'ValueProposition',
        className,
      )}
      id={id}
    >
      <div
        ref={refTitle}
        className={classNames(
          'flex flex-col items-center',
          !disabledAnimation && 'slideInUp-30 wait',
        )}
      >
        {(title || subtitle || surtitle) && (
          <div
            className={classNames(
              'max-w-[624px] flex flex-col item-start md:items-center',
              'pb-48 text-left md:text-center lg:pb-64',
            )}
          >
            {title && (
              <h2
                className={classNames(
                  isDark ? 'text-neutral-1' : 'text-neutral-301',
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <div
                className={classNames(
                  isDark ? 'text-neutral-1' : 'text-neutral-101',
                )}
              >
                {subtitle}
              </div>
            )}
          </div>
        )}
        <div
          className={classNames(
            'flex flex-wrap md:flex-nowrap',
          )}
        >
          {(contentText?.title ||
            contentText?.paragraph ||
            contentCta 
            ) && (
            <div
              className={classNames(
                'mb-32',
                isDark ? 'text-neutral-1' : 'text-neutral-101',
              )}
            >
              {contentText?.title &&
                (!title ? (
                  <h2
                    className={classNames(
                      isDark ? 'text-neutral-1' : 'text-neutral-301',
                      'font-medium pb-24',
                    )}
                  >
                    {contentText.title}
                  </h2>
                ) : (
                  <p
                    className={classNames(
                      isDark ? 'text-neutral-1' : 'text-neutral-301',
                      'font-medium pb-24',
                    )}
                  >
                    {contentText?.title}
                  </p>
                ))}
              {contentText?.paragraph && contentText.paragraph}

              {contentCta && <div className="mt-24">{contentCta}</div>}
            </div>
          )}
          <div className={``}>
            <div
              className={`flex gap-y-48 justify-center  ${
                columns !== 1 ? 'flex-wrap' : 'flex-col'
              }`}
            >
              {columnsItems?.map((columnItem, columnKey) => {
                return (
                  <div
                    className={classNames(
                      columns === 5 ? 'flex-col items-start' : '',
                      'flex',
                      isDark ? 'text-neutral-1' : 'text-neutral-101',
                    )}
                    key={columnKey}
                  >
                    <div className={`text-left`}>
                      {columnItem?.title && (
                        <p
                          className={classNames(
                            isDark ? 'text-neutral-21' : 'text-neutral-301',
                            'font-medium mb-8 ',
                          )}
                        >
                          {columnItem.title}
                        </p>
                      )}
                      {columnItem?.paragraph && columnItem.paragraph}
                      {columnItem?.cta && (
                        <div className="mt-48">{columnItem.cta}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
