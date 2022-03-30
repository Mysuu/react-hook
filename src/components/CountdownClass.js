import React, { Component } from 'react';

class CountdownClass extends Component {
    state = {
        count: 10
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
    //prev tượng trưng cho giá trị quá khứ
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                this.props.onTimesup()
            }
        }
    }

    render() {
        return (
            <div>
                Class Countdown: {this.state.count}
            </div>
        );
    }
}
export default CountdownClass