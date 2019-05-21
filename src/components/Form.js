import React from 'react';

class Form extends React.Component {
	render(){
		return (
			<form onSubmit={this.props.onSubmit} className="container">
			<div className="form-group">
				<label>Tareas</label>
				<input 
					type="text"
					className="form-control"
					id="InputTarea"
					aria-describedby="emailHelp"
					value={this.props.inputText}
					onChange={(e) => {this.props.onChange(e.target.value)}}
					placeholder="Ingrese su texto" />
			</div>
			<button type="submit" className="btn btn-primary">Agregar</button>
		</form>
)};
}

export default Form;