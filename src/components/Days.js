import React, {Component} from 'react';
export default class Days extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days:0,
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
        const days = Math.floor((time/(1000*60*60*24)));
        this.setState({days});
    }
    render() {
        return (
             <div>{this.state.days}</div>
        );
    }
}