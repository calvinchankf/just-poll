import { Doughnut } from 'react-chartjs-2'

class MyChart extends React.Component {
  render() {
    const {
      buttonColors,
      options,
    } = this.props
    const chartData = {
      datasets: [{
        backgroundColor: buttonColors,
        data: options.map(o => o.count)
      }],
      labels: options.map(o => o.label)
    }
    return (<Doughnut data={chartData} />)
  }
}

export default MyChart