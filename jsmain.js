var map;


var styles = [{
    stylers: [
        { saturation: -100 },
        { invert_lightness: true },
        { lightness: 0 }
    ]
}, {
    featureType: "administrative",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
}, {
    featureType: "road",
    elementType: "geometry",
    stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
    ]
}, {
    featureType: "all",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
}];



var home = {
    "lat": 12.9537039,
    "lng": 77.516258
}
var winner = { "lat": 22.560724, "lng": 88.410189 }
var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.8,
    scale: 8
};


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30, lng: 10},
        zoom: 2,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    /*var collegeCircle = new google.maps.Circle({
                fillColor: '#e74c3c',
                fillOpacity: 0.75,
                strokeWeight: 0.7,
                map: map,
                center: { "lat": lat, "lng": lng },
                radius: 40000
            });
        }
        setAnimation();

    */

        /*function setAnimation() {
            var direction = 1;
            intID = setInterval(function() {
                var radius = collegeCircle.getRadius();
                if ((radius > 60000) || (radius < 20000)) {
                    direction *= -1;
                }
                collegeCircle.setRadius(radius + direction * 5000);
            }, 100);
        }*/

        /*var line2 = new google.maps.Polyline({
            path: [{ lat: legitlat, lng: legitlng - 30 }, { lat: legitlat, lng: legitlng + 30 }],
            strokeOpacity: 0,
            strokeColor: "#f1c40f",
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '15px'
            }],
            map: map
        });*/

    map.setOptions({ styles: styles });
};



var explosion = function(){
    var mainsvg = d3.select("#mainsvgDayAll").append("svg").attr("width",730).attr("height", 370).attr("class","svg-All");
  var coldep = ["rgb(231, 76, 60)","rgb(46, 204, 113)","rgb(230, 126, 34)","rgb(149, 165, 166)","rgb(52, 73, 94)","rgb(241, 196, 15)","rgb(241, 15, 107)","rgb(26, 188, 156)","rgb(155, 89, 182)","rgb(52, 152, 219)","rgb(15, 219, 241)","rgb(142, 241, 15)","rgb(184, 134, 11)","rgb(233, 150, 122)","rgb(26, 188, 156)","rgb(46, 204, 113)","rgb(52, 152, 219)","rgb(241, 196, 15","rgb(52, 73, 94)","rgb(155, 89, 182)","rgb(230, 126, 34)","rgb(231, 76, 60)","rgb(149, 165, 166)","rgb(241, 15, 107)","rgb(15, 219, 241)","rgb(142, 241, 15)","rgb(184, 134, 11)","rgb(233, 150, 122)"];
  var tempdata = [10,20,30,10,30,20];
  //console.log(tempdata);
    var arc_b_1 = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(80)
    .startAngle(function(d,i){

        return i*12.857*pi;
    })
    .endAngle(function(d,i){
        return (i+1)*pi*12.857;
    });
    var arc_b_2 = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(function(d){
        return 80+d[18][2]*2;
    })
    .startAngle(function(d,i){

        return i*12.857*pi;
    })
    .endAngle(function(d,i){
        return (i+1)*pi*12.857;
    });

    var arc_d_1 = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(80)
    .startAngle(function(d,i){

        return i*12.857*pi;
    })
    .endAngle(function(d,i){
        return (i+1)*pi*12.857;
    });
    var arc_d_2 = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(function(d,i){
        return 80+(d[18][2]+d[18][1])*2;
    })
    .startAngle(function(d,i){

        return i*12.857*pi;
    })
    .endAngle(function(d,i){
        return (i+1)*pi*12.857;
    });

    var arc_p_1 = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(80)
    .startAngle(function(d,i){

        return i*12.857*pi;
    })
    .endAngle(function(d,i){
        return (i+1)*pi*12.857;
    });
    var arc_p_2 = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(function(d,i){
    //console.log(d);
        return 80+(d[18][0]+d[18][1]+d[18][2])*2;
    })
    .startAngle(function(d,i){

        return i*12.857*pi;
    })
    .endAngle(function(d,i){
        return (i+1)*pi*12.857;
    });

    var arcs_p = mainsvg.append("g").attr("class","pg").attr("style","transform:translate(340px,155px)").selectAll("path")
    .data(placed_depwise).enter().append("path").attr("d",arc_p_1).attr("fill",function(d,i){
    //console.log(d);
        var color = coldep[deps[i]];
        color = color.split('(')[1].split(')')[0].split(",");
        var darker = 'rgb(' +parseInt(72*parseInt(color[0])/100)+','+parseInt(72*parseInt(color[1])/100)+','+parseInt(72*parseInt(color[2])/100)+')';   
        return darker;
    }).attr("id",function(d,i){ return deps[i]+'text';}).transition().duration(1000).attr("d",arc_p_2);

  //console.log('tempdata = ',tempdata);
  
  d3.select(".svg-All").on("mouseover",function(){
  mainsvg.append("g").attr("style","transform:translate(340px,155px)").selectAll(".deptext")
  .data(placed_depwise)
   .enter().append("text").attr("x",function(d){

    return (70+(d[18][0]+d[18][1]+d[18][2]))*0.15;
  }).attr("dy",-2)
  .attr("class", "deptext")
   .append("textPath")
  .attr("xlink:href",function(d,i){return "#"+deps[i]+"text";})
  .style("text-anchor","middle").style("font-weight",900)

  .text(function(d,i){return deps[i];});  

  }).on("mouseout",function(){
    d3.selectAll(".deptext").remove();
  })
    
    var arcs_d = mainsvg.append("g").attr("class","dual_arch").attr("style","transform:translate(340px,155px)").selectAll("path")
    .data(placed_depwise).enter().append("path").attr("d",arc_d_1).attr("fill",function(d,i){
        var color = coldep[deps[i]];
        color = color.split('(')[1].split(')')[0].split(",");
        var darker = 'rgb(' +parseInt(85*parseInt(color[0])/100)+','+parseInt(85*parseInt(color[1])/100)+','+parseInt(85*parseInt(color[2])/100)+')';   
        return darker;
    }).transition().duration(1000).attr("d",arc_d_2);

    var arcs_b = mainsvg.append("g").attr("class","btech").attr("style","transform:translate(340px,155px)").selectAll("path")
    .data(placed_depwise).enter().append("path").attr("d",arc_b_1).attr("fill",function(d,i){
        return coldep[deps[i]];
    }).transition().duration(1000).attr("d",arc_b_2);



    mainsvg.append("circle").attr("cx",340).attr("cy",155).attr("r",0).attr("fill","rgb(52, 73, 94)").transition().duration(900).attr("r",76);

    mainsvg.append("text").attr("text-anchor","middle").attr("x",340).attr("y",160).attr("class","banner-text1").text("1111") ;
    mainsvg.append("text").attr("text-anchor","middle").attr("x",340).attr("y",180).attr("class","banner-text2").text("Students Hired");
    

    
};

var banner = function(nu){
    var mainsvg = d3.select("#mainsvgDayAll").append("svg").attr("width",120).attr("height", 370).attr("class","hidden-xs hidden-sm svg-banner-"+nu);
    //mainsvg.append("rect").attr("x",0).attr("y",0).attr("width",120).attr("height",370).attr("fill","#DE3726");
    mainsvg.append("rect").attr("x",0).attr("y",0).attr("width",120).attr("height",370).attr("fill","rgb(173, 10, 77)");
    //mainsvg.append("path").attr("d","M 10 0 L 10 350 L 60 290 L 110 350 L 110 0 ").attr("fill","white");
    mainsvg.append("path").attr("d","M 10 0 L 10 340 L 60 285 L 110 340 L 110 0 ").attr("stroke","white").attr("stroke-width",4).attr("fill","none");
    mainsvg.append("path").attr("d","M 0 370 L 60 300 L 120 370 L 0 370").attr("fill","white");
    
};


window.onload = function(){
        banner(1);
        explosion();
        banner(2);
    d3.select(".svg-banner-1").append("text").attr("text-anchor","middle").attr("x",60).attr("y",50).attr("class","banner-text1").text("28");
        d3.select(".svg-banner-1").append("text").attr("text-anchor","middle").attr("x",60).attr("y",75).attr("class","banner-text2").text("Department");
        d3.select(".svg-banner-1").append("text").attr("text-anchor","middle").attr("x",60).attr("y",95).attr("class","banner-text2").text("Streams");

        d3.select(".svg-banner-1").append("text").attr("text-anchor","middle").attr("x",60).attr("y",155).attr("class","banner-text1").text("981");
        d3.select(".svg-banner-1").append("text").attr("text-anchor","middle").attr("x",60).attr("y",180).attr("class","banner-text2").text("Placed");

        d3.select(".svg-banner-1").append("text").attr("text-anchor","middle").attr("x",60).attr("y",250).attr("class","banner-text1").text("130");
        d3.select(".svg-banner-1").append("text").attr("text-anchor","middle").attr("x",60).attr("y",275).attr("class","banner-text2").text("PPOs");

        d3.select(".svg-banner-2").append("text").attr("text-anchor","middle").attr("x",60).attr("y",50).attr("class","banner-text1").text("250");
        d3.select(".svg-banner-2").append("text").attr("text-anchor","middle").attr("x",60).attr("y",75).attr("class","banner-text2").text("Company");
        d3.select(".svg-banner-2").append("text").attr("text-anchor","middle").attr("x",60).attr("y",95).attr("class","banner-text2").text("Profiles");

        d3.select(".svg-banner-2").append("text").attr("text-anchor","middle").attr("x",60).attr("y",155).attr("class","banner-text1").text("18");
        d3.select(".svg-banner-2").append("text").attr("text-anchor","middle").attr("x",60).attr("y",180).attr("class","banner-text2").text("Days");

        d3.select(".svg-banner-2").append("text").attr("text-anchor","middle").attr("x",60).attr("y",250).attr("class","banner-text1").text("237");
        d3.select(".svg-banner-2").append("text").attr("text-anchor","middle").attr("x",60).attr("y",275).attr("class","banner-text2").text("Hours Tests");
}