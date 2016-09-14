function toRad (angle) { return angle * (Math.PI / 180)};

$(function(){
    /* Variables */
    var vw = $(window).width();
    var vh = $(window).height();
    var vmax = Math.max(vw,vh);
    var vmin = Math.min(vw,vh);
    var $body = $(".body");
    var $cube = $(".cube");
    var roy = 0;
    var rox = 0;
    
    /* Init */
    $(document).on('pointermove', function(event) {event.preventDefault()});
    
    /* Touch */
    /*//swipe up
	if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){}
	//swipe right
	if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){}
	//swipe down
	if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){}
	//swipe left
	if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){}*/

    $body.on('swipeend', function(e){
        e.preventDefault();
        //console.log(e);
        var theta =  Math.round(e.angle);
        var delta = e.length / vmax * 360;
        //console.log(delta);
        roy += delta * Math.cos(toRad(theta));
        rox += delta * Math.sin(toRad(theta));
        $cube.css("transform","rotateY("+roy+"deg) rotateX("+rox+"deg)");
        console.log("thetaX: "+delta * Math.sin(toRad(theta)),"thetaY: "+delta * Math.cos(toRad(theta)));
        console.log("roX: "+roy,"roY: "+rox);
    });
})