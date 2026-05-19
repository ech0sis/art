$("#crAdd").click(function () {

  // grab the value from the input
let crName = $("#crName").val();
let crColor = $("#crColor").val();
let crEyesNum = $("#crEyesNum").val();

// print things on the page
$("#creature-list").append("<div>" +crName +", "+crColor + ", " +crEyesNum +"</div>");

});