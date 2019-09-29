import React from 'react';
import '../stylesheets/monthly.css';
import Daily from './daily.js'

class Monthly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selector: 0,
            activeDate: new Date()
            
        }
    }

    handleRightButtonClick = () => {
        if (this.state.selector == 12) {
            this.setState({
                selector: 0
            })
        }
        else {
            this.setState({
                selector: this.state.selector + 1
            })
        }
    }

    handleLeftButtonClick = () => {
        if (this.state.selector == -1) {
            this.setState({
                selector: 11
            })
        }
        else {
            this.setState({
                selector: this.state.selector - 1
            })
        }
    }


    render() {
        const { selector } = this.state;
        const { month, numberOfDays } = this.props
        var matrix = [];
        let curYear = this.state.activeDate.getFullYear();
        let curMonth = this.state.activeDate.getMonth();
        let firstDay = new Date(curYear, curMonth, 1).getDay();
        
        let renderMonth = [];
        let x = 1;
        while (x <= numberOfDays) {
            renderMonth.push(
                <Daily 
                    day = {x} 
                    month = {month}    
                />
            );
            x += 1;
        }
        
        let emptyMonths = []
        let n = 0;
        if (month == 'April' || month == 'July') {
            emptyMonths.push(<td></td>)
        }
        else if (month == 'January' || month == 'October') {
            while (n < 2) {
                emptyMonths.push(<td></td>)
                n += 1
            }
        }
        else if (month == 'May') {
            while (n < 3) {
                emptyMonths.push(<td></td>)
                n += 1
            }
        }
        else if (month == 'August') {
            while (n < 4) {
                emptyMonths.push(<td></td>)
                n += 1
            }
        }
        else if (month == 'February' || month == 'March' || month == 'November') {
            while (n < 5) {
                emptyMonths.push(<td></td>)
                n += 1
            }
        }
        else if (month == 'June') {
            while (n < 6) {
                emptyMonths.push(<td></td>)
                n += 1
            }
        }
         
        return ( 
            <tr id='weeks'>
                {emptyMonths}
                {renderMonth}
            </tr>    
        )
    }
}

export default Monthly;