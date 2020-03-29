import React, { Componet, Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import axios from "axios";
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWorld: { confirmed: 0, recovered: 0, deaths: 0 }
    };
  }

  getWorld = () => {
    axios({
      method: "get",
      url: "https://covid19.mathdro.id/api",
      responseType: "json"
    }).then(response => {
      const { confirmed, recovered, deaths } = response.data;
      this.setState({
        dataWorld: {
          confirmed: confirmed.value,
          recovered: recovered.value,
          deaths: deaths.value
        }
      });
    });
  };

  componentDidMount() {
    this.getWorld();
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  render() {
    const { confirmed, recovered, deaths } = this.state.dataWorld;
    const chartData = {
      labels: ["Confirm", "Recovered", "Death"],
      datasets: [
        {
          label: "Population",
          data: [confirmed, recovered, deaths],
          backgroundColor: [
            "rgba(255, 206,86,0.6)",
            "rgba(54, 162,235,0.6)",
            "rgba(255, 99,132,0.6)"
          ]
        }
      ]
    };
    return (
      <div className="chart">
        <Bar
          data={chartData}
          width={100}
          height={30}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "World Data",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
