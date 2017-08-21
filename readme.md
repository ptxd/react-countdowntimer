This is a simple Countdown Timer using react.
I have made some breaking changes to this library from v0.0.3 to v0.1.8.
React in essence is not 'styling' friendly hence a lot of react libraries out there come with pre-determined styles which usually requires overriding the css styling.
To solve this problem I have broken down the time calculation to 4 different components.
Current library only support days, hours, minutes and seconds calculations. Will add months and years at a later date before V1.0.0.

To use simply follow the steps below:

1. npm i --save react-countdowntimer

2. In your file simply call the components(they are not exported by default hence the need for curly braces):
    
            import {Days,Hours,Minutes,Seconds} from 'react-countdowntimer';

3. Use the component as you please anywhere in your project(you will need to set the deadline in each component!)
    the components do not come prestyled hence it will inherit its parent elements style

            eg:

            return {  
                    <div className-"somestyle"><Days deadline="December 27,2017"/></div>
                    <div className-"somestyle"><Hours deadline="December 27,2017"/></div>
                    <div className-"somestyle"><Minutes deadline="December 27,2017"/></div>
                    <div className-"somestyle"><Seconds deadline="December 27,2017"/></div>
            }

**you can use any Javascript supported time format as the prop in deadline**
                
            eg:
            
            return {
                        <div className="test"><Days deadline="2018-03-25"/></div>
                        <div className="test"><Hours deadline="2018-03-25"/></div>
                        <div className="test"><Minutes deadline="2018-03-25"/></div>
                        <div className="test"><Seconds deadline="2018-03-25"/></div>
            }


**style it as you want and reach out if you find a bug or have suggestions for improvement.
