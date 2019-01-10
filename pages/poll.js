import {
  fetchPoll,
  setCurIdx,
  mutatePoll,
} from 'actions/poll'
import { connect } from "react-redux"
import moment from 'moment'
// components
import { Layout } from 'antd'
import { Row, Col } from 'antd'
import { Button } from 'antd'
import MyChart from 'components/MyChart'
// page component
class Poll extends React.Component {

  static async getInitialProps({ query, store }) {
    await fetchPoll(store.dispatch)
    return { query }
  }

  componentDidMount = () => {
    const { polls, query, dispatchSetCurIdx } = this.props
    dispatchSetCurIdx(query && query.id ? parseInt(query.id) : polls[0].id)
  }

  render = () => {
    const {
      curIdx,
      polls,
      dispatchMutatePoll,
    } = this.props;

    if (polls.length == 0) {
      return <div></div>
    }

    const targetPoll = polls.find(p => p.id == curIdx)
    if (targetPoll === undefined) {
      return <div></div>
    }
    const options = targetPoll.answer.options

    const buttonColors = ["yellow", "blue", "red", "green", "orange", "lightblue"]

    const optionButtons = options.map((o, idx) =>
      <div key={idx}>
        <Button
          style={{ backgroundColor: buttonColors[idx] }}
          onClick={() => dispatchMutatePoll(curIdx, o.id)}>{o.label}
        </Button>
      </div>
    )

    let total = 0
    options.forEach(o => {
      total += o.count
    });

    const date = moment(targetPoll.publishedDate * 1000).format("DD MMM YYYY");

    return (
      <Layout style={{ margin: 32 }}>
        <Row>
          <Col span={16}>
            <div style={{ fontSize: 20 }}> {targetPoll.title} </div>
            <div> {date} </div>
            {optionButtons}
            <div> total votes: {total} </div>
          </Col>
          <Col span={8}>
            <MyChart
              buttonColors={buttonColors}
              options={options}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    curIdx: state.poll.curIdx,
    polls: state.poll.polls,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchSetCurIdx: idx => {
      return dispatch(setCurIdx(idx));
    },
    dispatchMutatePoll: (idx, optionId) => {
      return dispatch(mutatePoll(idx, optionId));
    },
  }
}

// export default Index
export default connect(mapStateToProps, mapDispatchToProps)(Poll);