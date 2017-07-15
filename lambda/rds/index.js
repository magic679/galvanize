const pg = require('pg');
const config = {
  user: 'root',
  database: 'data_store_api',
  password: 'rootroot',
  host: 'galvanize-hackathno-usaspending.ckz88upkmlbp.us-east-1.rds.amazonaws.com',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
const pool = new pg.Pool(config);

exports.handler = (event, context, callback) => {
	pool.query(event.text, event.values, (err, result)=>{
	    if(err) context.fail();
	    else context.succeed(result.rows);
	});
}
//function test (text, values, callback) {
//    return pool.query(text, values, callback);
//}
//
//test("SELECT * FROM awards LIMIT $1::int", [1], (err, result)=>{
//	if(err) throw err;
//	console.log(result.rows);	
//});
