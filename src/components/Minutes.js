import React, {Component} from 'react';
export default class Minutes extends Component {
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
         const minutes = Math.floor((time/1000/60)%60);
        this.setState({minutes});
    }
    render() {
        return (
             <div>{this.state.minutes}</div>
        );
    }
}