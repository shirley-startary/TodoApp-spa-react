import React from 'react';

import Form from '../components/Form';
import All from '../pages/All';
import Active from '../pages/Active';
import Completed from '../pages/Completed';

class TodoNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			inputText:''
		}
		// this.onHandleChange = this.onHandleChange.bind(this)
		// this.onHandleSubmit = this.onHandleSubmit.bind(this)

	}

	onHandleChange = (texto) => {
			this.setState({inputText: texto})
	}

	onHandleSubmit = (e) => {
		e.preventDefault();
		const objTask = {
			id: `${new Date().getTime()}`,
			value: this.state.inputText,
			status: "Active"
		};
		const newArray = [...this.state.tasks, objTask];
		this.setState({
			tasks: newArray,
			inputText: ''
		})
		localStorage.setItem('tasks',JSON.stringify(newArray));		
		
	}

	onHandleChecked = (e) => {
		console.log(e.target.id, e.target.tagName);
	  let arrayTask = this.state.tasks;

		if (e.target.tagName === 'INPUT') {
			if (e.target.checked) {
				arrayTask = arrayTask.map(item => {
					if (item.id === e.target.id) {
						item.status = "Completed";
					}
					return item;
				});
			} else {
				arrayTask = arrayTask.map(item => {
					if (item.id === e.target.id) {
						item.status = "Active";
					}
					return item;
				});
			}
		}
		localStorage.setItem("tasks", JSON.stringify(arrayTask))
		this.setState({
			tasks: arrayTask
		})
	}
	componentDidMount(){
		console.log(this.state.tasks);
		
		if (localStorage.getItem('tasks')){

			this.setState({
				tasks:JSON.parse(localStorage.getItem('tasks')) 
			})
		} else {
			this.setState({
				tasks:JSON.parse(localStorage.setItem('tasks', '[]'))
			})
		}
	}

	render () {
		console.log(this.state.tasks);
		
		const Formulario = (<Form onChange={this.onHandleChange} onSubmit={this.onHandleSubmit} inputText={this.state.inputText}/>)
		if (this.props.location.pathname.slice(1) === "") {
			return (
				<div>
				{Formulario}
				<All tasks={this.state.tasks} onHandleChecked={this.onHandleChecked}/>
			</div>
			);
		} else if (this.props.location.pathname.slice(1) === "active") {
			return (
				<div>
					{Formulario}
					<Active tasks={this.state.tasks} onHandleChecked={this.onHandleChecked}/>
				</div>
			);

		} else if (this.props.location.pathname.slice(1) === "completed") {
			return (
				<div>
					{Formulario}
					<Completed tasks={this.state.tasks} onHandleChecked={this.onHandleChecked}/>
				</div>
			);
		} 
	}
}

export default TodoNew;
