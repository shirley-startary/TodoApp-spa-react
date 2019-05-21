import React from 'react';

const Element = (props) => {
	console.log(props);
	
	return (
	<li data-id={props.item.id}>
		<input className="form-check-input" type="checkbox" value="" onChange={props.onHandleChecked} id={props.item.id} checked={props.item.status==='Completed'}/>
		<label className="form-check-label" 	htmlFor={props.item.id}>{props.item.value}</label>
	</li>
	);
}

export default Element