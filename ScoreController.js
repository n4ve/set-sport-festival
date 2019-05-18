module.exports = function(app, db, jsonParser){
    
    // account_id Text NOT_NULL,
    // fullname Text NOT_NULL,
    // team TEXT NOT_NULL,
    // date TEXT NOT_NULL,
    // score TEXT
    
  
    console.log("Registering endpoint: /api/score/red");
    app.get('/api/score/red', function(req, res){ 
        let startDate = "\'" + req.query.startDate + "\'";
        let endDate = "\'" + req.query.endDate + "\'";

        let startDateCondition = startDate != "\'\'" ? (" AND date >= " + startDate) : ""
        let endDateCondition = endDate != "\'\'" ? (" AND date <= " + endDate) : ""
        let sql = "SELECT * FROM score WHERE team == \"RED\""  + startDateCondition + endDateCondition
        db.all(sql, function(err, rows) {
            res.json(rows); 
        });                       
    });

    console.log("Registering endpoint: /api/score/blue");
    app.get('/api/score/blue', function(req, res){ 
        let startDate = req.query.startDate;
        let endDate = req.query.endDate;

        let startDateCondition = startDate != "" ? ("AND date >= " + startDate) : ""
        let endDateCondition = endDate != "" ? ("AND date <= " + endDate) : ""
        db.all("SELECT * FROM score WHERE team == \"BLUE\""  + startDateCondition + endDateCondition, function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/score/green");
    app.get('/api/score/green', function(req, res){ 
        let startDate = req.query.startDate;
        let endDate = req.query.endDate;

        let startDateCondition = startDate != "" ? ("AND date >= " + startDate) : ""
        let endDateCondition = endDate != "" ? ("AND date <= " + endDate) : ""
        let sql = "SELECT * FROM score WHERE team == \"GREEN\""  + startDateCondition + endDateCondition
        db.all(sql, function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/score/yellow");
    app.get('/api/score/yellow', function(req, res){ 
        let startDate = req.query.startDate;
        let endDate = req.query.endDate;

        let startDateCondition = startDate != "" ? ("AND date >= " + startDate) : ""
        let endDateCondition = endDate != "" ? ("AND date <= " + endDate) : ""
        db.all("SELECT * FROM score WHERE team == \"YELLOW\""  + startDateCondition + endDateCondition, function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/score");
    app.get('/api/score', function(req, res){ 
        let startDate = req.query.startDate;
        let endDate = req.query.endDate;

        let startDateCondition = startDate != "" ? ("AND date >= " + startDate) : ""
        let endDateCondition = endDate != "" ? ("AND date <= " + endDate) : ""
        let sql = "SELECT * FROM score"  + startDateCondition + endDateCondition;
        console.log(sql);
        db.all(sql , function(err, rows) {
            res.json(rows); 
        });                        
    });
}