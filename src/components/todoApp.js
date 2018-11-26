import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import TodoEntry from './todoEntry';
import TodoOverview from './todoOverview';
import TodoFooter from './todoFooter';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

import DevTool from 'mobx-react-devtools';
import coolaData from "../cooladata/cooladata";

@observer
export default class TodoApp extends React.Component {
	render() {
		const {todoStore, viewStore} = this.props;
		return (
			<div>
				<DevTool />
				<header className="header">
					<h1>todos</h1>
					<TodoEntry todoStore={todoStore} />
				</header>
				<TodoOverview todoStore={todoStore} viewStore={viewStore} />
				<TodoFooter todoStore={todoStore} viewStore={viewStore} />
			</div>
		);
	}

	componentDidMount() {
		if (__CLIENT__) {
			var { Router } = require('director/build/director');
			var viewStore = this.props.viewStore;
			var router = Router({
				'/': function() { viewStore.todoFilter = ALL_TODOS; },
				'/active': function() { viewStore.todoFilter = ACTIVE_TODOS; },
				'/completed': function() { viewStore.todoFilter = COMPLETED_TODOS; }
			});
		router.init('/');
      coolaData.sendEvent({"event_name":"page_load","user_id":this.props.todoStore.userId,"event_timestamp_epoch":Date.now(),"first_name":this.props.todoStore.firstName,"last_name":this.props.todoStore.lastName})
		}
	}
}

TodoApp.propTypes = {
	viewStore: PropTypes.object.isRequired,
	todoStore: PropTypes.object.isRequired
};
