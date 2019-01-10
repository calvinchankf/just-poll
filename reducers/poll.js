import {
  POLL_INIT,
  POLL_SET_CUR_IDX,
  POLL_MUTATE_POLL,
} from '../constants';

const defaultState = {
  curIdx: 0,
  polls: [],
};

const poll = (state = defaultState, action) => {
  switch (action.type) {
    case POLL_INIT: {
      const newPolls = action.payload.map(poll => {
        const newAnswer = poll.answer
        const newOptions = poll.answer.options.map(o => {
          return { ...o, count: 0 }
        })
        newAnswer.options = newOptions
        return { ...poll, answer: newAnswer }
      })
      return { ...state, polls: newPolls }
    }
    case POLL_SET_CUR_IDX:
      return { ...state, curIdx: action.payload }
    case POLL_MUTATE_POLL: {
      const newPolls = state.polls.map(poll => {
        if (poll.id == action.payload.curIdx) {
          const newAnswer = poll.answer
          const newOptions = newAnswer.options.map(o => {
            if (o.id == action.payload.optionId) {
              return { ...o, count: o.count + 1 }
            } else {
              return o
            }
          })
          newAnswer.options = newOptions
          return { ...poll, answer: newAnswer }
        } else {
          return poll
        }
      })
      return { ...state, polls: newPolls }
    }
    default:
      return state
  }
}

export default poll
