/////////////////// WAITING FOR RESPONE FROM EVENT ///////////////////////////////////////////


handleChange( value ) {
    this.setState({ message: value })
  }

  <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />

/////////////////////////////////   (.map )     ///////////////////////////////////////////////////////////////

                // WILL LOOP THOUGHT THE ARRAY AND RETURN NEW ARRAY WITH INDEX AND VALUE //

this.state = {  foods: ["spaghetti","ice cream","sushi","bologna","cheese" ] }

let foodsToDisplay = this.state.foods.map( (element, index) => {
    return (
      <h2 key={ index }>{ element }</h2>
    )
  })

<div className="App">
        { foodsToDisplay }
</div>

////////////////////////////////////////////////////////////////////////

let foodsToDisplay = this.state.foods.filter( (element, index) => {
    return element.includes( this.state.filterString );
  })
  .map( (element, index) => {
    return <h2 key={ index }>{ element }</h2>
  })


////////////////////////    THIS IS ( BIND )     ////////////////////////

this.assignAccount = this.assignAccount.bind( this );

/////////////////////////////////   USERNAME AND PASSWORD SETUP     ///////////////////////////////////////

this.assignAccount = this.assignAccount.bind( this );
}
handleUsername(name) {
    this.setState({ username: name });
}
handlePassword(pass) {
    this.setState({ password: pass });
}
assignAccount() {
   alert(`UserName: ${this.state.username}   Password: ${this.state.password} `);
}

    <h3>Login Page </h3>
    <input onChange={ (e) => this.handleUsername(e.target.value) } placeholder="Enter usename"></input>
    <input onChange={ (e) => this.handlePassword(e.target.value) } placeholder="Enter password"></input>
    <Button bsStyle="success" onClick={ this.assignAccount } >Submit</Button>
    
///////////////////////////    (prop) keyword  ////////////////////////////
// The src for the <img /> should be passed down as a prop from the parent component

//      PROP MEAN IT VALUE PASS BY REFERENCE FROM CHILDREND TO PEARENT. 
//      PEARENT WILL DECIDE TO PASS PROP. CHILDREND MUST REQUEST PROP
//  IMAGE.JS    
<img src={ props.myImage } alt="" />
//  APP.JS
<Image myImage={ "https://http.cat/409" } />

/////////////////////////////////////////////////////////////////////////////////////////

////  THIS IS HOW TO PASS (props) FROM CHILD TO PARENT 
let group = props => {      
  let groups = ["group1", "group2"]

  let link = groups.map(vaue, index => {
    
    
  })
}

////////////////////////////////////////////////////////////////////////