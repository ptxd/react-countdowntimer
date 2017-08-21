import React, {Component} from 'react';
export default class Seconds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes:0,
        };
    }
    
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
    }
    
    
    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        this.setState({seconds});
    }
    render() {
        return (
             <div>{this.state.seconds}</div>
        );
    }
}