import React, {Component} from 'react';
export default class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours:0,
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
        const hours = Math.floor((time/(1000*60*60))%24);
        this.setState({hours});
    }
    render() {
        return (
             <div>{this.state.hours}</div>
        );
    }
}