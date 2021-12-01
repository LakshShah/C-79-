var name_student=[];
function submit(){
    var name_1=document.getElementById("name1").value;
    var name_2=document.getElementById("name2").value;
    var name_3=document.getElementById("name3").value;
    var name_4=document.getElementById("name4").value;
    name_student.push(name_1);
    name_student.push(name_2);
    name_student.push(name_3);
    name_student.push(name_4);
    documment.getElementById("display_name").innerHTML=name_student;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_student.sort();
    document.getElementById("display_name").innerHTML=name_student;

}

