import React from 'react';
import Element from '../components/Element';

const Active = (props) => {
		const arrayFilter = props.tasks.filter((item)=>{
			return item.status === 'Active';
		})
	
		return (
			<div className="container">
				<h1>Active Tasks</h1>
				<ul>
					{arrayFilter.map(item => <Element key={item.id} item={item} onHandleChecked={props.onHandleChecked}/>)}
				</ul>
			</div>
		);
}

export default Active;