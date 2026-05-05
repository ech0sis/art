// click counter
let count=0;
//click variable

$("#needy-button") .click( function() {
    count = count + 3; //add three click to count
    $("#needy-button") .html("You Are " + count + " Years Older") ;
} );

  