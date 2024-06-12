import React from 'react';
import { ImageTabLayoutProps, ImageTabs, ImageTabsLayoutProps } from '.';
import { ButtonV2 } from '../../components/ButtonV2';

export default {
  title: '3. Layouts/ImageTabs',
  component: ImageTabs,
};

const ctaButton = (
  <ButtonV2
    {...{
      type: 'minimal',
      color: 'default',
      title: 'En savoir plus',
      size: 'small',
      isAnimated: true,
    }}
  />
);

const data: ImageTabLayoutProps[] = [
  {
    title: 'Paye et déclaration',
    text: 'Générez vos fiches de paie et vos déclarations en seulement quelques minutes par mois. Générez vos fiches de paie et vos déclarations en seulement quelques minutes par mois. Générez vos fiches de paie et vos déclarations en seulement quelques minutes par mois.',
    picto: 'Integration',
    selected: true,
    ctaButton,
    background: 'blue',
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1664985090-payroll-rti-submissions.png',
      width: 768,
      height: 500,
    },
  },
  {
    title: 'Congés et absences',
    text: 'Limitez les allers-retours liés aux demandes d’absences, les collaborateurs sont autonomes et l’impact en paie immédiat.',
    picto: 'Integration',
    ctaButton,
    background: 'mint',
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1665046206-employee-361.png',
      width: 768,
      height: 500,
    },
  },
  {
    picto: 'Integration',
    title: 'Gestion du personnel',
    background: 'purple',
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1665047019-employee-360-fr.png',
      width: 768,
      height: 500,
    },
  },
  {
    title: 'Notes de frais',
    text: 'Gagnez du temps et évitez les erreurs en centralisant la gestion des notes de frais au sein de votre logiciel de paie.',
    picto: 'Integration',
    background: 'coral',
    ctaButton,
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1665047051-expense-management-fr.png',
      width: 768,
      height: 500,
    },
  },
  {
    title: 'Gestion des temps et activités',
    picto: 'Integration',
    ctaButton,
    background: 'azur',
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1665047121-time-tracking-fr.png',
      width: 768,
      height: 500,
    },
  },
  {
    title: 'Performance et engagement',
    text: "Renforcez l'engagement & la performance de vos équipes tout au long de l'année.",
    picto: 'Integration',
    background: 'yellow',
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1665047183-1-1-fr.png',
      width: 768,
      height: 500,
    },
  },
];

const Template = (args: ImageTabsLayoutProps) => (
  <div className="max-w-1000 m-auto">
    <ImageTabs {...args} />
  </div>
);

export const Primary = Template.bind(
  {},
  {
    data,
  },
);
