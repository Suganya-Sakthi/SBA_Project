

var display = function (){
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var date=document.myform.date.value;
    var zip=document.myform.zip.value;
    var country=document.myform.country.value;

    var e = document.createElement("p");
    e.className="h4";
    e.setAttribute('style','color:Blue');
    e.innerText="Please check your information";

    var para =document.getElementById("para");
    para.appendChild(e);
    
    var list = document.getElementById("list");

    var lname = document.createElement("p");
    lname.innerText="Name:"+name;
    list.appendChild(lname);

    var lemail = document.createElement("p");
    lemail.innerText="Email ID:"+email;
    list.appendChild(lemail);

    var lzip = document.createElement("p");
    lzip.innerText="Zip Code:"+zip;
    list.appendChild(lzip);

    var ldate = document.createElement("p");
    ldate.innerText="Date:"+date;
    list.appendChild(ldate);

    var lcountry = document.createElement("p");
    lcountry.innerText="Country:"+country;
    list.appendChild(lcountry);
    
}
var btn = document.getElementById("mybutton");

btn.onclick = display;


