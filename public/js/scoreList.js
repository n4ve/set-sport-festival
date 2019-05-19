var mode = 'red' 
var start = null
var end = null

function getStart() {
    console.log(start);
    if (start == null || start == false) {
        return null;
    }
    console.log( moment(start).format('YYYY-MM-DD'))
    return  moment(start).format('YYYY-MM-DD')
}

function getEnd() {
    console.log(end);
    if (end == null || end == false) {
        return null;
    }
    console.log(moment(end).format('YYYY-MM-DD'))
    return moment(end).format('YYYY-MM-DD')
}

var table = $('#scoreTable').DataTable( {
    searching: false,
    dataSrc : "",
    ajax : {
        url : "/api/score/red",
        data : function( d )  {
            d.startDate = getStart();
            d.endDate = getEnd();
        },
        dataSrc : ""
    },
    columns: [
        { data: 'team' },
        { data: 'fullname' },
        { data: 'score' },
        { data: 'date' }
    ]
} );


// Form event handlers
$('#red').click(function(){
    mode = 'red'
    table.ajax.url("/api/score/red").load();
}); 

$('#blue').click(function(){
    mode = 'blue'
    table.ajax.url("/api/score/blue").load();
}); 

$('#green').click(function(){
    mode = 'green'
    table.ajax.url("/api/score/green").load();
}); 

$('#yellow').click(function(){
    mode = 'yellow'
    table.ajax.url("/api/score/yellow").load();
}); 

$('#all').click(function(){
    mode = 'all'
    console.log('all');
    table.ajax.url("/api/score").load();
}); 

$(".btn-group > .btn").click(function(){
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});


$('#datetimePickerStart').datetimepicker({
    format: 'YYYY-MM-DD',
    useCurrent: false
    //minDate: '05-10-2019'
});
$('#datetimePickerEnd').datetimepicker({
    format: 'YYYY-MM-DD',
    useCurrent: false 
});

$("#datetimePickerStart").on("dp.change", function (e) {
    $('#datetimePickerEnd').data("DateTimePicker").minDate(e.date);
    start = e.date
    console.log('Start Picker' + start)
    console.log(mode)
    table.ajax.reload();
    switch(mode) {
        case 'red':
            table.ajax.url("/api/score/red").load();
            break;
        case 'blue':
            table.ajax.url("/api/score/blue").load();
            break;
        case 'green':
            table.ajax.url("/api/score/green").load();
            break;
        case 'yellow':
            table.ajax.url("/api/score/yellow").load();
            break;
        case 'all':
            table.ajax.url("/api/score").load();
            break;
        default:
      }
});
$("#datetimePickerEnd").on("dp.change", function (e) {
    $('#datetimePickerStart').data("DateTimePicker").maxDate(e.date);
    end = e.date
    console.log('End Picker' + end)
    console.log(mode)
    table.ajax.reload();
    switch(mode) {
        case 'red':
            table.ajax.url("/api/score/red").load();
            break;
        case 'blue':
            table.ajax.url("/api/score/blue").load();
            break;
        case 'green':
            table.ajax.url("/api/score/green").load();
            break;
        case 'yellow':
            table.ajax.url("/api/score/yellow").load();
            break;
        case 'all':
            table.ajax.url("/api/score").load();
            break;
        default:
      }
});
