var express = require('express')
var router = express.Router()

router.get('/'(req, res)=> {
	res.render('users/index')
})

router.get('/new',(req,res)=>{
	res.render('users/new')
})