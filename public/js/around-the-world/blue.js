
$(".btn-group > .btn").click(function(){
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});

$.get("/api/around-the-world/blue", function(data){
    
    let totalScore = data[0].total != null ? data[0].total : 0
    $("#total").text(totalScore.toLocaleString()  + "/ 58,933,823");
    let percent = (totalScore / 58933823 * 100).toFixed(2);
    $("#progress").attr("data-value", percent)
  });

// Form event handlers
$('#red').click(function(){
    document.location = "/around-the-world/red"
}); 

$('#blue').click(function(){
    document.location = "/around-the-world/blue"
}); 

$('#green').click(function(){
    document.location = "/around-the-world/green"
}); 

$('#yellow').click(function(){
    document.location = "/around-the-world/yellow"
}); 

