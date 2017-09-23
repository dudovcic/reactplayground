import React, { Component } from "react";
import ReactDOM from "react-dom";

class Hello extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Saaaaaaaatate name"
		};
	}

	handleIt(name) {
		this.setState({name})
	}
	render() {
		return (
			<div>
				<h1>Hello React</h1>
				<h2>{this.state.name}</h2>
				<Another some={this.handleIt.bind(this)} word={this.state.name} />
				<button onClick={()=>{this.setState({name: "ZERO"})} } type="submit">Deeffff</button>
				<SomeOther word={this.state.name} some={this.handleIt.bind(this)} />
			</div>

	)}
}

class Another extends Component {
	constructor(props) {
		super(props);

	this.state = {name: "some"};

	}
	render() {
		return (
			<div>
				<input value={this.props.word} onChange={e => this.props.some(e.target.value) } />
			</div>
		)
	}
}

class SomeOther extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<br/>
				<input value={this.props.word} onChange={e => this.props.some(e.target.value) } />
			</div>
		)
	}
}


ReactDOM.render(<Hello />, document.getElementById('blahblah'));
