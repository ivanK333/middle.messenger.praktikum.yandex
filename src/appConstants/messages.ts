import { Message } from '../components';

const message = 'Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа '
  + 'Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа '
  + 'Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа '
  + 'Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа '
  + 'Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла'
  + ' блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа Бла блаааа'
  + ' Бла блаааа Бла блаааа Бла блаааа';

const data = {
  message,
  date: '12:12',
};

export const MESSAGES = [
  {
    id: '0',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
  {
    id: '1',
    message: new Message(data).render(),
  },
  {
    id: '2',
    message: new Message(data).render(),
  },
  {
    id: '3',
    message: new Message(data).render(),
  },
  {
    id: '4',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
  {
    id: '5',
    message: new Message(data).render(),
  },
  {
    id: '6',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
  {
    id: '7',
    message: new Message(data).render(),
  },
  {
    id: '8',
    message: new Message(data).render(),
  },
  {
    id: '9',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
  {
    id: '10',
    message: new Message(data).render(),
  },
  {
    id: '11',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
  {
    id: '12',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
  {
    id: '13',
    message: new Message(data).render(),
  },
  {
    id: '14',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
  {
    id: '15',
    message: new Message(data).render(),
  },
  {
    id: '16',
    message: new Message(data).render(),
  },
  {
    id: '17',
    message: new Message({ ...data, isOutgoing: true }).render(),
  },
];
