var D1 = document.getElementById("data1")
var D2 = document.getElementById("data2")
var D3 = document.getElementById("data3")
var D4 = document.getElementById("data4")

var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")
var p4 = document.getElementById("p4")

var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var c4 = document.getElementById("c4")

var r1 = document.getElementById("rec1");
var r2 = document.getElementById("rec2");
var r3 = document.getElementById("rec3");
var r4 = document.getElementById("rec4");

var cir1 = document.getElementById("circle1");
var cir2 = document.getElementById("circle2");
var cir3 = document.getElementById("circle3");
var cir4 = document.getElementById("circle4");

var div1 = document.getElementById("1");
var div2 = document.getElementById("2");
var div3 = document.getElementById("3");
var div4 = document.getElementById("4");

var span1 = document.getElementById("s1");
var span2 = document.getElementById("s2");
var span3 = document.getElementById("s3");
var span4 = document.getElementById("s4");

var l1 = document.getElementById("line1");
var l2 = document.getElementById("line2");
var l3 = document.getElementById("line3");

var chose1 = document.getElementById("linechar")
var chose2 = document.getElementById("barchar")

function calc() {
    return parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value) + parseInt(p4.value);;
}

document.getElementById("button").onclick = function () {

    if (D1.value == "" || D2.value == "" || D3.value == "" || D4.value == "" || p1.value == "" || p2.value == "" || p3.value == "" || p4.value == "") {
        alert("plz enter all of data to drawing your char")
    } else {

        if (chose1.checked) {
            document.getElementById("svg1").style.display = "block";
        }

        if (chose2.checked) {
            document.getElementById("svg2").style.display = "block";
        } 
        if(chose1.checked == false && chose2.checked == false)
        {
            alert("plez chose linechar or bar char or both")
        }

        document.getElementById("text1").innerHTML = D1.value;
        document.getElementById("text2").innerHTML = D2.value;
        document.getElementById("text3").innerHTML = D3.value;
        document.getElementById("text4").innerHTML = D4.value;

        document.getElementById("text21").innerHTML = D1.value;
        document.getElementById("text22").innerHTML = D2.value;
        document.getElementById("text23").innerHTML = D3.value;
        document.getElementById("text24").innerHTML = D4.value;

        div1.style.backgroundColor = c1.value;
        div2.style.backgroundColor = c2.value;
        div3.style.backgroundColor = c3.value;
        div4.style.backgroundColor = c4.value;

        r1.style.fill = c1.value;
        r2.style.fill = c2.value;
        r3.style.fill = c3.value;
        r4.style.fill = c4.value;

        cir1.style.fill = c1.value;
        cir2.style.fill = c2.value;
        cir3.style.fill = c3.value;
        cir4.style.fill = c4.value;

        var y1 = 370 - (parseInt(p1.value) / calc()) * 100 * 3.58;
        span1.innerHTML = D1.value + " ( " + ((parseInt(p1.value) / calc()) * 100).toFixed(2) + " % )";
        r1.setAttribute("y", y1)
        cir1.setAttribute("cy", y1)
        r1.style.height = 370 - parseInt(y1);

        var y2 = 370 - (parseInt(p2.value) / calc()) * 100 * 3.58;
        span2.innerHTML = D2.value + " ( " + ((parseInt(p2.value) / calc()) * 100).toFixed(2) + " % )";
        r2.setAttribute("y", y2)
        cir2.setAttribute("cy", y2)
        r2.style.height = 370 - parseInt(y2);


        var y3 = 370 - (parseInt(p3.value) / calc()) * 100 * 3.58;
        span3.innerHTML = D3.value + " ( " + ((parseInt(p3.value) / calc()) * 100).toFixed(2) + " % )";
        r3.setAttribute("y", y3)
        cir3.setAttribute("cy", y3)
        r3.style.height = 370 - parseInt(y3);

        var y4 = 370 - (parseInt(p4.value) / calc()) * 100 * 3.58;
        span4.innerHTML = D4.value + " ( " + ((parseInt(p4.value) / calc()) * 100).toFixed(2) + " % )";
        r4.setAttribute("y", y4)
        cir4.setAttribute("cy", y4)
        r4.style.height = 370 - parseInt(y4);

        l1.setAttribute("y1", y1);
        l1.setAttribute("y2", y2);

        l2.setAttribute("y1", y2);
        l2.setAttribute("y2", y3);

        l3.setAttribute("y1", y3);
        l3.setAttribute("y2", y4);
    }

}