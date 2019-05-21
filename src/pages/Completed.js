import React from 'react';
import Element from '../components/Element';

const Completed = (props) => {
		const arrayFilter = props.tasks.filter((item)=>{
			return item.status === 'Completed';
		})
	
		return (
			<div className="container">
				<h1>Completed Tasks</h1>
				<ul>
					{arrayFilter.map(item => <Element key={item.id} item={item} onHandleChecked={props.onHandleChecked}/>)}
				</ul>
			</div>
		);
}

export default Completed;