const express=require('express');
const router=express.Router();

const conexion=require('./database/conn')

router.get('/',(req, resp)=>{
   
    conexion.query('select * from fabricante',(error,results)=>{
        if(error){
            throw error;
        }
        else{
            resp.render('index.ejs',{results:results.recordset});
            
        }
    });
})

router.get('/create',(req, resp)=>{
    resp.render('create');
})

const crud=require('./controllers/crud');

router.post('/save',crud.save);

module.exports=router;