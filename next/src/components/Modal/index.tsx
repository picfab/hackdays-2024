import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { lockScroll } from '@/utils/lockScroll';
import { classNames } from '@/utils/classNames';
import Image from 'next/image';

export const Modal = ({
  open,
  toggleModal,
  disableCross,
  children,
  className,
  classNameContent,
}: any) => {
  const [_open, set_Open] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const refCloseButton = useRef<HTMLDivElement>(null);

  const launchClose = useCallback(() => {
    set_Open(false);
    // wait for the close animation to finish
    setTimeout(() => {
      lockScroll(false);
      toggleModal && toggleModal();
    }, 450);
  }, [toggleModal]);

  useEffect(() => {
    if (open && !_open) {
      lockScroll(true);
      set_Open(true);
    }
    if (!open && _open) {
      launchClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClickOutside = (event: any) => {
    if (
      !ref?.current?.contains(event.target) &&
      !refCloseButton?.current?.contains(event.target)
    ) {
      launchClose();
    }
  };

  return (
    <>
      {open &&
        createPortal(
          <div
            className={classNames(
              'Modal',
              'overflow-scroll fixed inset-0 z-30 w-screen p-[24px]',
              'flex justify-center items-center',
              'bg-black/[.55]',
              'transition-all duration-300 delay-150',
              !_open && 'opacity-0 ',
              _open && 'opacity-1 ',
              className
            )}
            onClick={handleClickOutside}
          >
            {!disableCross && (
              <div
                ref={refCloseButton}
                role={'button'}
                aria-label='Close modal'
                tabIndex={0}
                className={classNames(
                  'CloseButton',
                  'fixed right-[24px] top-[24px] cursor-pointer text-neutral-1 z-10 md:text-40 md:leading-48 text-28 leading-32 font-sans'
                )}
                onClick={launchClose}
                onKeyDown={(e) => {
                  if (e.code === 'enter') launchClose();
                }}
              >
                <Image
                  src='/cross.svg'
                  alt='Close modal'
                  className='dark:invert'
                  width={100}
                  height={24}
                  priority
                />
              </div>
            )}
            <div
              className={classNames('ModalContent w-full', classNameContent)}
              ref={ref}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
