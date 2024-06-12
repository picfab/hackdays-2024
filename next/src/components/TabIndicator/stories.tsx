import React, { useState } from 'react';

import { ImageTab } from '../../layouts/ImageTabs/ImageTab';

import { TabIndicator } from '.';

export default {
  title: '2. Components/TabIndicator',
  component: TabIndicator,
};

const Template = (args: { data: any[] }) => {
  const [index, setindex] = useState(0);

  return (
    <TabIndicator selectedIndex={index}>
      {args?.data?.map((item, i) => (
        <ImageTab
          key={i}
          {...item}
          selected={index === i}
          onClick={() => setindex(i)}
        />
      ))}
    </TabIndicator>
  );
};

const data = [
  {
    title: 'Paye et déclaration',
    text: 'Générez vos fiches de paie et vos déclarations en seulement quelques minutes par mois.',
    picto: 'Integration',
    selected: true,
    ctaButton: {
      color: 'blue',
      title: 'En savoir plus',
      size: 'small',
      isAnimated: true,
    },
    imageBackgroundColor: 'blue',
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
    ctaButton: {
      color: 'blue',
      title: 'En savoir plus',
      size: 'small',
      isAnimated: true,
    },
    imageBackgroundColor: 'mint',
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
    text: 'Fluidifiez les démarches et la communication au sein de votre organisation grâce à notre logiciel SIRH complet.',
    ctaButton: {
      color: 'blue',
      title: 'En savoir plus',
      size: 'small',
      isAnimated: true,
    },
    imageBackgroundColor: 'purple',
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
    imageBackgroundColor: 'coral',
    ctaButton: {
      color: 'blue',
      title: 'En savoir plus',
      size: 'small',
      isAnimated: true,
    },
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1665047051-expense-management-fr.png',
      width: 768,
      height: 500,
    },
  },
  {
    title: 'Gestion des temps et activités',
    text: 'BIENTÔT - Suivez le temps de travail de vos employés et indemnisez les heures réellement travaillées.',
    picto: 'Integration',
    ctaButton: {
      color: 'blue',
      title: 'En savoir plus',
      size: 'small',
      isAnimated: true,
    },
    imageBackgroundColor: 'azur',
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
    ctaButton: {
      color: 'blue',
      title: 'En savoir plus',
      size: 'small',
      isAnimated: true,
    },
    imageBackgroundColor: 'yellow',
    image: {
      alt: '',
      src: 'https://www.datocms-assets.com/50397/1665047183-1-1-fr.png',
      width: 768,
      height: 500,
    },
  },
];

export const Default = Template.bind({});
Default.args = {
  data,
  selectedIndex: 0,
};
