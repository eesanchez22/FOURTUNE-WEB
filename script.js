$("button").click(function(){
    let usrName=$(".name").val();
    let faveFood=$(".food").val();
    let time=$(".much").val();
    let old=Number($(".age").val());
    $(".awswer").append("<h2>" + usrName + " will eat " + time +" of " + faveFood + " when you turn " + old +"</h2>"  );
    $("p").hide();

});