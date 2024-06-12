import React from 'react';
import { textBody, textTitle1, textTitle3 } from '../../styles/typography';
import { classNames } from '../../utils/style';

import { ValueProposition } from '.';
import { ButtonV2 } from '../../components/ButtonV2';

export default {
  title: '4. Templates/Value proposition',
  component: ValueProposition,
};

const Template = (args: any) => <ValueProposition {...args} />;

const paragrapheWithTitle = {
  title: 'Gain de temps',
  paragraph: (
    <p className={classNames(textBody)}>
      Utior, et mage pollens. Qui continuo rerum simulacra secuntur quae sit
      nequimus propterea quia posterior caligin oculorum, ne simulacra.
    </p>
  ),
  picto: { name: 'automation', background: true },
};

const contentTextParagraphe = (css = textTitle3) => (
  <p className={classNames(css)}>
    La prime exceptionnelle de pouvoir d&apos;achat (PEPA) ou &quot;prime
    Macron&quot; est une prime exonérée de cotisations, de contributions
    sociales et d&apos;impôt sur le revenu.
  </p>
);

export const Text = Template.bind(
  {},
  {
    surtitle: 'Leurs fonctionnalités préférées',
    title: 'Leurs fonctionnalités préférées',
    subtitle: (
      <p className={classNames(textTitle3, 'max-w-[624px] mt-24')}>
        Utior, et mage pollens. Qui continuo rerum simulacra secuntur quae sit
        nequimus propterea quia posterior caligin oculorum, ne simulacra.
      </p>
    ),
    columns: 1,
    columnsItems: [
      paragrapheWithTitle,
      paragrapheWithTitle,
      paragrapheWithTitle,
    ],
    contentText: {
      paragraph: contentTextParagraphe(textTitle1),
    },
    contentRight: true,
    backgroundColor: 'white',
  },
);

export const TextTitle = Template.bind(
  {},
  {
    columns: 1,
    columnsItems: [
      paragrapheWithTitle,
      paragrapheWithTitle,
      paragrapheWithTitle,
    ],
    contentText: {
      title: 'Title-1-M',
      paragraph: contentTextParagraphe(),
    },
    contentRight: true,
    backgroundColor: 'white',
  },
);

export const TextTitleCta = Template.bind(
  {},
  {
    columns: 1,
    columnsItems: [
      {
        title: 'Gain de temps',
        paragraph: (
          <p className={classNames(textBody, 'text-neutral-101')}>
            Utior, et mage pollens. Qui continuo rerum simulacra secuntur quae
            sit nequimus propterea quia posterior caligin oculorum, ne
            simulacra.
          </p>
        ),
        picto: { name: 'automation', background: true },

        cta: (
          <ButtonV2
            {...{
              variant: 'minimal',
              color: 'blue',
              isAnimated: true,
              title: 'Minimal Primary',
              size: 'small',
            }}
          />
        ),
      },
    ],
    contentText: {
      title: 'Title-1-M',
      paragraph: contentTextParagraphe(),
    },
    contentCta: (
      <ButtonV2
        {...{
          variant: 'minimal',
          color: 'blue',
          title: 'Retrouver nos témoignages clients',
          size: 'small',
          isAnimated: true,
        }}
      />
    ),
    contentRight: true,
    backgroundColor: 'white',
  },
);

export const Image = Template.bind(
  {},
  {
    columns: 1,
    columnsItems: [
      paragrapheWithTitle,
      paragrapheWithTitle,
      paragrapheWithTitle,
      paragrapheWithTitle,
      paragrapheWithTitle,
    ],
    contentImage: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1632148263-dbb1479-1.png',
      width: 768,
      height: 500,
    },
    contentRight: true,
    backgroundColor: 'white',
  },
);

export const NoContent = Template.bind(
  {},
  {
    columns: 2,
    columnsItems: [
      paragrapheWithTitle,
      paragrapheWithTitle,
      paragrapheWithTitle,
      paragrapheWithTitle,
    ],
    contentRight: true,
    backgroundColor: 'white',
  },
);
