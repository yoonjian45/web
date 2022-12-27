function inform(){alert("나는 alert 입니다");}
function grade(){
    var kor1 = parseInt(document.getElementById("kor1").innerHTML);
    var kor2 = parseInt(document.getElementById("kor2").innerHTML);
    var first =document.getElementById("forst_g");
    first.innerHTML=kor1+kor2;
    first.style.color="red";

    var eng1 = parseInt(document.getElementById("eng1").innerHTML);
    var eng2 = parseInt(document.getElementById("eng2").innerHTML);
    document.getElementById("second_g").innerHTML="eng1+eng2";
    sexond.innerHTML=eng1+emg2;
    sexond.style.color="red"
   
    var math1 = parseInt(document.getElementById("math1").innerHTML);
    var math2 = parseInt(document.getElementById("math2").innerHTML);
    document.getElementById("third_g").innerHTML="math1+math2"
    third.innerHTML=math1+math2;
    third.style.color="red"
}