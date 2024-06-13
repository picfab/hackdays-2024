'use client';
import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Viewer } from '../../../components/Viewer';
import { TabIndicator } from '../../../components/TabIndicator';

import { ImageTab } from '../ImageTab/ImageTab';
import { classNames } from '@/utils/classNames';
import { ImageWp } from '../../image';
import ImageTabsText from './ImageTabsText';

const ImageTabCta = forwardRef<HTMLDivElement, any>(function ImageTabCta(
  { label, url, isSelected },
  ref
) {
  return (
    <div className={classNames(!isSelected && 'hidden')} ref={ref}>
      <a
        href={url}
        className='items-center group flex  cursor-pointer text-primary-1 hover:text-black'
      >
        {label}
      </a>
    </div>
  );
});

export const ImageTabsComponent = ({ className, tabs }: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [heightDescription, setHeightDescription] = useState(0);
  const descriptionRef = useRef(null);

  const textRefs = useRef<any[]>([]);
  const ctaBoxRef = useRef<any>();
  const ctasRef = useRef<any[]>([]);

  useEffect(() => {
    const heightText = textRefs.current?.[selectedIndex]?.clientHeight || 0;
    const heightCta = ctasRef.current?.[selectedIndex]?.clientHeight || 0;
    const height = heightText + heightCta;

    if (!Number.isNaN(height))
      setHeightDescription(heightCta + heightText === 0 ? 0 : height + 40);
  }, [selectedIndex]);

  const handleCtaPositon = useCallback(
    (initialRender = false) => {
      if (ctaBoxRef.current && textRefs.current) {
        const ctaTopMargin = 16;
        const textHeight: number = textRefs.current[selectedIndex].offsetHeight;
        const ctaOffset = textHeight + ctaTopMargin;

        // Position should be initialy relative and absolute after to handle the translation transition
        ctaBoxRef.current.style.transform = `translateY(${ctaOffset}px)`;
        if (
          !initialRender &&
          !ctaBoxRef.current.classList.contains('transition-all')
        ) {
          ctaBoxRef.current.classList.add(
            'transition-all',
            'ease-bounce',
            'duration-500'
          );
        }
      }
    },
    [selectedIndex]
  );

  return (
    <div className={classNames('ImageTabs w-full', className)}>
      <TabIndicator selectedIndex={selectedIndex}>
        {tabs?.map((item: any, index: number) => (
          <ImageTab
            {...item}
            key={index}
            className='max-w-max'
            selected={selectedIndex === index}
            onClick={(e) => {
              setSelectedIndex(index);
              item?.onClick && item?.onClick(e);
            }}
          />
        ))}
      </TabIndicator>

      <div className='mt-24'>
        <Viewer indexSelected={selectedIndex}>
          <div
            ref={descriptionRef}
            style={{ height: `${heightDescription}px` }}
            className='relative transition-all duration-500'
          >
            <div className='relative'>
              {tabs.map((item: any, index: number) => {
                return (
                  item.content && (
                    <ImageTabsText
                      ref={(el: HTMLDivElement | null) =>
                        (textRefs.current[index] = el as any)
                      }
                      key={index}
                      {...item}
                      isSelected={index === selectedIndex}
                      onSelection={handleCtaPositon}
                    />
                  )
                );
              })}
            </div>
            <div className='absolute inset-0' ref={ctaBoxRef}>
              {tabs.map((item: any, i: number) => {
                return (
                  item.button_label &&
                  item.button_url && (
                    <ImageTabCta
                      key={i}
                      ref={(el) => (ctasRef.current[i] = el as any)}
                      label={item.button_label}
                      url={item.button_url}
                      isSelected={i === selectedIndex}
                    />
                  )
                );
              })}
            </div>
          </div>
          <Viewer.Content>
            {tabs.map((elt: any, key: number) => {
              return (
                <Viewer.Element key={key} index={key}>
                  {elt.image && <ImageWp imageData={elt.imageData} />}
                </Viewer.Element>
              );
            })}
          </Viewer.Content>
        </Viewer>
      </div>
    </div>
  );
};
