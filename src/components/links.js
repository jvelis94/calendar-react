import React from 'react'
import { Link } from 'react-router-dom';

function Links(props) {
    return (
        <div>
            {props.months.map(month => {
                return (
                    <ul> 
                        <li><Link to={`/${month.name}`}>{month.name}</Link></li>
                    </ul>
                    )
            })}
        </div>
    )
}

export default Links