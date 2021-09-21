import {Site, Status} from '../../../types/task';

const statusFormatter = (status: Status | Site): string => {
  const statusWords = status.split('_');

  const newStatusWords = statusWords.map(
    word => {
      const lowerCased = word.toLowerCase();
      return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
    }
  );

  return newStatusWords.join(' ');
};

export default statusFormatter;
