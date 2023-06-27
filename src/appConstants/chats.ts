import { ChatPreview } from '../components';

const data = {
  title: 'Vadim',
  message: 'Привет, как твои дела  блаблаблалбалбалбала!',
  date: '15:12',
  count: 23,
};

export const CHATS = [
  new ChatPreview(data),
  new ChatPreview(data),
];
