// data
import { polls } from './poll.json';

// simulate how to get data async
export const fetchPollData = () => {
  return Promise.resolve(polls)
}