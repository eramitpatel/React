const simpleAction = (firstname, lastname) => dispatch => {	
   let fullname = firstname+" "+lastname;
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: fullname
 })
}


export default simpleAction;