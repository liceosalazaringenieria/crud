
const conexion=require('../database/conn');
console.log('hola5');

exports.save=(req,res)=>{

    const fab=req.body.fab;
    console.log(fab);
    conexion.query('insert into fabricante (nombre) values ?',{nombre:fab},(error,results)=>{
        if(error){
            throw error;
        }
        else{
           res.redirect('/');
            
        }
    })
}