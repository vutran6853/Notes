require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is UP and listening on port ${port}.`)
});


///////////////////////////////////////////////////////////////////////////

massive( process.env.CONNECTION_STRING )
.then( dbInstace => {   // <-- CREATE INSTACE OF OUR DATABASE AND STORE IT ON (app) VARIABLE
  console.log(dbInstace)
  app.set('db', dbInstace)  // <-- STORE INSTACE IN app AS db
});

//////////////////////////////////////////////////////////////////////

INSERT INTO products(name, description, price, image_url)
VALUES  ($1, $2, $3, $4);   // <-- $1 WILDCARD FOR VARIABLE INPUT 



//////////////  SET-UP FOR CONTROLLER FROM FRONT TO BACK END /////////////////////
module.exports = {
  create: (( req, res, next ) => {
    console.log(req)
    const dbInstance = req.app.get('db');
  }),

  getOne: (( req, res, next ) => {
    console.log(req)
    const dbInstance = req.app.get('db');
  }),
  getAll: (( req, res, next ) => {
    console.log(req)
    const dbInstance = req.app.get('db');
  }),

  update: (( req, res, next) => {
    console.log(req)
    const dbInstance = req.app.get('db');
  }),
  
  delete: (( req, res, next) => {
    console.log(req)
    const dbInstance = req.app.get('db');
  })
};

//SET-UP FOR CONTROLLER FROM FRONT TO BACK END
///////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////// LAYOUT FOR CONTROLLER FOR BACKEND ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  create: (( req, res, next ) => {
    // console.log(req)
    const dbInstance = req.app.get('db');
    const { name, desciption, price, image_url } = req.body;            // <-- OBJECT DES BY SQL 
    dbInstance.create_product( [ name, desciption, price, image_url ] ) // <-- PEMAR BY SQL 
    .then( () => {
      res.status(200)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),
  getOne: (( req, res, next ) => {
    // console.log(req)
    const dbInstance = req.app.get('db');                   // <-- GET COPY OF app(db) TO NEW OJBECT
    dbInstance.read_product( [ params.id, query.desc] )
    .then( (product) => {
      console.log(product)
      res.status(200).json(product)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),
  getAll: (( req, res, next ) => {
    // console.log(req)
    const dbInstance = req.app.get('db');
    dbInstance.read_products()
    .then( products => 
      // console.log(products)
      res.status(200).send(products)
    )
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),
  update: (( req, res, next) => {
    // console.log(req)
    const dbInstance = req.app.get('db');
    dbInstance.update_product()
    .then( () => {
      res.status(200)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),
  delete: (( req, res, next) => {
    // console.log(req)
    const dbInstance = req.app.get('db');
    dbInstance.delete_product()
    .then( () => {
      res.status(200)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  })
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
