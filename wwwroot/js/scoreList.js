                           
var table = $('#scoreTable').DataTable( {
    searching: false,
    dataSrc : "",
    ajax : {
        url : "/api/score/red",
        dataSrc : ""
    },
    columns: [
        { data: 'account_id' },
        { data: 'score' },
        { data: 'fullname' },
        { data: 'team' },
        { data: 'date' }
    ]
} );


// Form event handlers
$('#red').click(function(){
    table.ajax.url("/api/score/red").load();
}); 

$('#blue').click(function(){
    table.ajax.url("/api/score/blue").load();
}); 

$('#green').click(function(){
    table.ajax.url("/api/score/green").load();
}); 

$('#yellow').click(function(){
    table.ajax.url("/api/score/yellow").load();
}); 