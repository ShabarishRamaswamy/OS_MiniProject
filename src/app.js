const path = require('path')
const express = require('express')
const hbs= require('hbs')
const app = express()
const port = process.env.PORT || 5575
const haiku = require(__dirname+'/utils/haiku')

//Setting View Engines 
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'));

//Creating and maintaining Path Variables 
const partialsPath = path.join(__dirname+'../templates/partials')
hbs.registerPartials(partialsPath)

//Set up static directory to serve
app.use(express.static(path.join(__dirname, '../public')))


app.get('', (req, res)=>{
    res.render('index')
})

app.get('/generate', (req, res)=>{
    var generatedHaiku = haiku()
    res.send(generatedHaiku)
})


app.listen(port, ()=>{
    console.log('Listening to Port ' + port)
})