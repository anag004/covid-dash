import React, { Component } from 'react';
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "2d5f14ba18a2b4ca";
import { Slider } from "antd";

class Spain extends Component {
    chartRef = React.createRef();
    state = { bpoint: 119 };

    setBpoint = (event) => {
        console.log(event);
        this.setState({ bpoint: event });
    }

    componentDidMount() {
        const runtime = new Runtime();
        runtime.module(notebook, name => {
            if (name === "chart") {
                return new Inspector(this.chartRef.current);
            }

            if (name === "mutable bpoint") {
                return {
                    fulfilled: (value) => {
                        this.bpoint = value;
                    }
                };
            }
        });
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextState.bpoint != this.state.bpoint) {
            this.bpoint.value = nextState.bpoint;
        }
    }

    render() {
        return (
            <div>
                <div ref={this.chartRef}></div>
                <large>Scrub to set projection area</large>
                <br />
                {/* <input type="range" min="60" max="137" step="1" */}
                {/* value={this.state.bpoint} onChange={this.setBpoint} /> */}
                <Slider min={60} max={119} step={1} onChange={this.setBpoint} value={this.state.bpoint} tooltipPlacement="bottom"></Slider>
            </div>
        )
    }
}

export default Spain;