const express = require('express')
const app = express()
const mongoose = require('mongoose');



app.listen(9002,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});


