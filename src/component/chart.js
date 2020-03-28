import React, { Componet, Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Confirm", "Recovered", "Death"],
        datasets: [
          {
            label: "Population",
            data: [2000, 1200, 1530, 1519, 162, 952],
            backgroundColor: [
              "rgba(255, 206,86,0.6)",
              "rgba(54, 162,235,0.6)",
              "rgba(255, 99,132,0.6)"
            ]
          }
        ]
      }
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={30}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In Massachusetts",
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
