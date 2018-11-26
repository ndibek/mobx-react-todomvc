import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import coolaData from "../cooladata/cooladata";

const ENTER_KEY = 13;

@observer
export default class TodoEntry extends React.Component {
	render() {
		return (<input
			ref="newField"
			className="new-todo"
			placeholder="What needs to be done?"
			onKeyDown={this.handleNewTodoKeyDown}
			autoFocus={true}
		/>);
	}

	handleNewTodoKeyDown = (event) => {
		if (event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();
coolaData.sendEvent({"event_name":"add_entry","user_id":this.props.todoStore.userId,"event_timestamp_epoch":Date.now(),"first_name":this.props.todoStore.firstName,"last_name":this.props.todoStore.lastName})

		var val = ReactDOM.findDOMNode(this.refs.newField).value.trim();

		if (val) {
			this.props.todoStore.addTodo(val);
			ReactDOM.findDOMNode(this.refs.newField).value = '';
		}
	};
}

TodoEntry.propTypes = {
	todoStore: PropTypes.object.isRequired
};
