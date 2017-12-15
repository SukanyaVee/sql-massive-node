const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./products_controller')


massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const APIurl = '/api/product'
app.get(`${APIurl}s`, ctrl.getAll)
app.get(`${APIurl}/:id`, ctrl.getOne)
app.put(`${APIurl}/:id`, ctrl.update)
app.post(APIurl, ctrl.create)
app.delete(`${APIurl}/:id`, ctrl.delete)


app.listen (process.env.PORT, () => { console.log(`Server listening on port ${process.env.PORT}`); } )