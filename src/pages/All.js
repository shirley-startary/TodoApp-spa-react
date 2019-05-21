import React from 'react';
import Element from '../components/Element';

const All = (props) => {	
	console.log(props);
	
	return (
		<div className="container">
			<h1>All Tasks</h1>
			<ul>
				{props.tasks.map((item)=> <Element key={item.id} item={item} onHandleChecked={props.onHandleChecked}/>)}
			</ul>
		</div>
	);
}

export default All;
