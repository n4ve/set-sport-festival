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
        console.log(sql);
        db.all(sql, function(err, rows) {
            res.json(rows); 
        });                       
    });

    console.log("Registering endpoint: /api/score/blue");
    app.get('/api/score/blue', function(req, res){ 
        let startDate = "\'" + req.query.startDate + "\'";
        let endDate = "\'" + req.query.endDate + "\'";

        let startDateCondition = startDate != "\'\'" ? (" AND date >= " + startDate) : ""
        let endDateCondition = endDate != "\'\'" ? (" AND date <= " + endDate) : ""
        let sql = "SELECT * FROM score WHERE team == \"BLUE\""  + startDateCondition + endDateCondition
        console.log(sql);
        db.all(sql, function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/score/green");
    app.get('/api/score/green', function(req, res){ 
        let startDate = "\'" + req.query.startDate + "\'";
        let endDate = "\'" + req.query.endDate + "\'";

        let startDateCondition = startDate != "\'\'" ? (" AND date >= " + startDate) : ""
        let endDateCondition = endDate != "\'\'" ? (" AND date <= " + endDate) : ""
        let sql = "SELECT * FROM score WHERE team == \"GREEN\""  + startDateCondition + endDateCondition
        console.log(sql);
        db.all(sql, function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/score/yellow");
    app.get('/api/score/yellow', function(req, res){ 
        let startDate = "\'" + req.query.startDate + "\'";
        let endDate = "\'" + req.query.endDate + "\'";

        let startDateCondition = startDate != "\'\'" ? (" AND date >= " + startDate) : ""
        let endDateCondition = endDate != "\'\'" ? (" AND date <= " + endDate) : ""
        let sql = "SELECT * FROM score WHERE team == \"YELLOW\""  + startDateCondition + endDateCondition
        console.log(sql);
        db.all(sql, function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/score");
    app.get('/api/score', function(req, res){ 
        let startDate = "\'" + req.query.startDate + "\'";
        let endDate = "\'" + req.query.endDate + "\'";

        let startDateCondition = startDate != "\'\'" ? ("date >= " + startDate) : ""
        let endDateCondition = endDate != "\'\'" ? ( (startDate != null ? " AND " : "") + "date <= " + endDate) : ""

        var condition = ""

        if( startDateCondition != "" || endDateCondition != "") condition = " WHERE " + startDateCondition + endDateCondition
        let sql = "SELECT * FROM score"  + condition;
        console.log(sql);
        db.all(sql , function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/around-the-world/red");
    app.get('/api/around-the-world/red', function(req, res){ 
    
        let sql = "SELECT SUM(score) AS total FROM score WHERE team == \"RED\" AND date >= \"2019-04-01\" AND date <= \"2019-08-01\"";
        console.log(sql);
        db.all(sql , function(err, rows) {
            console.log(rows);
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/around-the-world/blue");
    app.get('/api/around-the-world/blue', function(req, res){ 
    
        let sql = "SELECT SUM(score) AS total FROM score WHERE team == \"BLUE\" AND date >= \"2019-04-01\" AND date <= \"2019-08-01\"";
        console.log(sql);
        db.all(sql , function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/around-the-world/green");
    app.get('/api/around-the-world/green', function(req, res){ 
    
        let sql = "SELECT SUM(score) AS total FROM score WHERE team == \"GREEN\" AND date >= \"2019-04-01\" AND date <= \"2019-08-01\"";
        console.log(sql);
        db.all(sql , function(err, rows) {
            res.json(rows); 
        });                        
    });

    console.log("Registering endpoint: /api/around-the-world/yellow");
    app.get('/api/around-the-world/yellow', function(req, res){ 
    
        let sql = "SELECT SUM(score) AS total FROM score WHERE team == \"YELLOW\" AND date >= \"2019-04-01\" AND date <= \"2019-08-01\"";
        console.log(sql);
        db.all(sql , function(err, rows) {
            res.json(rows); 
        });                        
    });



}