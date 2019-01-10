// constants
import {
  POLL_INIT,
  POLL_SET_CUR_IDX,
  POLL_MUTATE_POLL,
} from '../constants';

import { fetchPollData } from 'api'

export const init = data => ({
  type: POLL_INIT,
  payload: data
})

export const setCurIdx = idx => ({
  type: POLL_SET_CUR_IDX,
  payload: idx
})

export const mutatePoll = (curIdx, optionId) => {
  return {
    type: POLL_MUTATE_POLL,
    payload: {
      curIdx,
      optionId
    }
  }
};

export const fetchPoll = async dispatch => {
  try {
    const result = await fetchPollData()
    dispatch(init(result))
  } catch (error) {
    console.error(error); // for now just log and ignore
  }
}