                           

// document.addEventListener("DOMContentLoaded", function(event) {
//     ajaxForm.PopulateTable (jsonToTable, handleError);  
// });      

function handleError (data) {
    $("#ajax-error-box").modal('show');
    $("#ajax-error").text("Errorcode:" + data.status + ", Message:" + data.statusText);  
    console.log(data);                           
}

function jsonToTable (data) {
    
    // Clear table
    $('#scoreTable tr').slice(1).remove();

    //if no tbody just select your table 
    var tbody = $('#scoreTable').children('tbody');                            
    var table = tbody.length ? tbody : $('#scoreTable');

    var tableString = "";

    for(var i in data) {
        var people = data[i];
        console.log(people);

        tableString += "<tr><td>" + people.account_id 
                    + "</td><td>" + people.score  
                    + "</td><td>" + people.fullname
                    + "</td><td>" + people.team
                    + "</td><td>" + people.date
                    + "</td></tr>";                            
    }

    table.append(tableString);
}    


// Form event handlers
$('#red').click(function(){
    $("#ajax-error-box").hide();
    var ajaxRedForm = new ajaxProxy("/api/score/red");  
    ajaxRedForm.PopulateTable (jsonToTable, handleError);
}); 

$('#blue').click(function(){
    $("#ajax-error-box").hide();
    var ajaxBlueForm = new ajaxProxy("/api/score/blue");
    ajaxBlueForm.PopulateTable (jsonToTable, handleError);
}); 

$('#green').click(function(){
    $("#ajax-error-box").hide();
    var ajaxGreenForm = new ajaxProxy("/api/score/green");  
    ajaxGreenForm.PopulateTable (jsonToTable, handleError);
}); 

$('#yellow').click(function(){
    $("#ajax-error-box").hide();
    var ajaxYellowForm = new ajaxProxy("/api/score/yellow");  
    ajaxYellowForm.PopulateTable (jsonToTable, handleError);
}); 