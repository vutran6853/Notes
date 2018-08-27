// map date api date and display on HTML

let chars = this.state.character.map((char) => {
    return (
        <div key={char.id}>
            <img src="" alt="" ></img>
            <div>
                <h6></h6>
            </div>
        </div>
    )
})

/////////////////////////////////////////////////
//  pass props from parpent to chidrend

////////////////////////////////////////////////////////////////////////////////////////////

app.get('/api/getDuded', (req, res) => {
    res.status(200).json(dudes);                //  <--- GRAB DATA FROM LOCAL FILE. RECEIVE SET-UP
})

componentDidMount() {                                //     <-- API REQUEST FROM LAST ^ 
    axios.get(`https:localhost:3001/api/getdude`)
    .then(res => {
        console.log(res)
        this.setState({ guys: res.data })
    })
}

/////////////////////////////////////// YOU CAN OBJECT DELE LIKE 

const { json } = require('body-parser');

////////////////////////////////////////////////////////    
/// in package.json file
"proxy": "http://localhost:3001"
//  THIS WILL DEFAULT SET TO ENDPOINT AUTO
////////////////////////////////////////////////

//      ...(response.data.result)     <----- WILL TAKE THE DATA AND RETURN ARRAY




