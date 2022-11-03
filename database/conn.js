const sqls=require('mssql');
const dbsinfo={
    user:'admindb',
    password:'asdf@1234',
    server:'servidordbs.database.windows.net',
    database:'tienda',
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
}
async function getConnection(){

    try{
        const pool = await sqls.connect(dbsinfo);
        return pool;
    }catch(error){
        console.error(error);
    }
}

getConnection();

module.exports=sqls;
