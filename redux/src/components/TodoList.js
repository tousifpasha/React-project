import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.renderList = this.renderList.bind(this);
        this.addItem= this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    renderList() {
        return this.props.items.map((item, index) => {
            return(
                <div key={index}>
                    {item.title}<br/>
                <button onClick={(event) => this.deleteItem(index)}>Delete</button>
                </div>
            );
        });
    }
    
    addItem() {
        if(this.state.text !== '')
        {
        const newList = [...this.props.items,{title:this.state.text}];
        console.log(newList);
        this.props.createTodo(newList);
        }
    }


    deleteItem(index) { 
        const deletelist = this.props.items.filter((i,j) => j !== index);
        this.props.createTodo(deletelist);
    }


    render() {
        return (
            <div className="todo">
                <textarea value={this.state.text} onChange={(event) => this.setState({text:event.target.value})}>

                </textarea><br/>
            <button onClick={() => this.addItem()}>
                Add
            </button>
            <button onClick={()=> this.props.createTodo([])}>Reset</button>
            {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        items: state.todo.items
    };
}


export default connect(mapStateToProps,{
    createTodo,
})(TodoList);