import React from 'react';
import { connect } from 'react-redux';
import simpleAction from '../actions/simpleAction';
import { bindActionCreators } from 'redux';

class MainComponent extends React.Component{

	constructor(props){
		super(props);
		this.clickFunction = this.clickFunction.bind();		
	}
	state = {
		first_name : '',
		last_name : '',
		user : []
	}

	 
	clickFunction(e){
		//this.props.simpleAction();	
	}

	changeValue(e){
		this.setState({[e.target.name]: e.target.value})
		this.setState({error: ''})
	}

	
	simpleAction = (event) => {	

		let firstname = this.state.first_name;
		let lastname = this.state.last_name;	
		
	if( firstname !='' && lastname !='')
		{
			this.props.simpleAction(firstname, lastname);
			this.setState({first_name: '', last_name : ''})
		}
	else{
			this.setState({error: 'Please enter first and last name first'})
		}


	}


	componentWillReceiveProps(props){		 
		this.setState({ user : this.state.user.concat(props.finalData.result)}); 
	}

	render(){

			return( 
				   <div>
						<h1>Add User Form</h1>						

						<input 
							  type="text" 
							  name="first_name" 
							  placeholder="First Name" 
							  value={this.state.first_name} 
							  onChange={(e) => this.changeValue(e)}
					    />
						<br/>

						<input 
							  type="text" 
							  name="last_name" 
							  placeholder="Last Name"  
							  value={this.state.last_name} 
							  onChange={ (e) => this.changeValue(e) }
					    />
						<br/>

						<button 
							  onClick={this.simpleAction}
						>
							  Click Here to + ADD
						</button><br/>

						<p className="error">{this.state.error}</p>
						

						<hr/>

						<h2>Here are our users :</h2> <br/>

							{/* { this.state.user} */}
							<ul>
								{console.log("---users state---",this.state.user)}
								{
									this.state.user.map((item, key) =>
											<li key={key}>{item}</li>
										)
								}
							</ul>
				    </div> 
				  )
			
			}
		
}

 

const mapStateToProps = (state) => {
	console.log(state);
  return {
    finalData: state.simpleReducer
  };
};


const mapDispatchToProps = dispatch => {
	// return{
	// 	simpleAction: () => dispatch(simpleAction)		
	// }

	return bindActionCreators({  simpleAction }, dispatch) 

}



export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);