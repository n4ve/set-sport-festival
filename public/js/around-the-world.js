$.get("/api/around-the-world/red", function(data){
    
    let totalScore = data[0].total != null ? data[0].total : 0
    $("#total").text(totalScore + "/ 58,933,823");
  });

// Form event handlers
$('#red').click(function(){
    $.get("/api/around-the-world/red", function(data){
       
        let totalScore = data[0].total!= null ? data[0].total : 0
    $("#total").text(totalScore + "/ 58,933,823");
      });
}); 

$('#blue').click(function(){
    $.get("/api/around-the-world/blue", function(data){
        
        let totalScore = data[0].total != null ? data[0].total : 0
    $("#total").text(totalScore + "/ 58,933,823");
      });
}); 

$('#green').click(function(){
    $.get("/api/around-the-world/green", function(data){
       
        let totalScore = data[0].total != null ? data[0].total : 0
    $("#total").text(totalScore + "/ 58,933,823");
      });
}); 

$('#yellow').click(function(){
    $.get("/api/around-the-world/yellow", function(data){
        
        let totalScore = data[0].total != null ?  data[0].total : 0
    $("#total").text(totalScore + "/ 58,933,823");
      });
}); 

$(".btn-group > .btn").click(function(){
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});