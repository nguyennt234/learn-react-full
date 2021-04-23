import React, {Component} from 'react'
import classNames from 'classnames'
import './TodoItems.css'

class TodoItems extends Component{    
    
    render(){
        const {item} = this.props;        
        return(
            <div className={classNames('TodoItems', {'TodoItems-Completed': item.iscompleted})}>
                {this.props.item.title}
            </div>
        )
    }
}

export default TodoItems;