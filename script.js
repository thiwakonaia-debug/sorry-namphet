function moveButton(){
 const no=document.getElementById("noBtn");
 const yes=document.getElementById("yesBtn");

 no.style.position="fixed";
 no.style.left=Math.random()*90+"vw";
 no.style.top=Math.random()*90+"vh";

 scaleNo*=0.85;
 scaleYes*=1.1;

 if(scaleYes>2.5) scaleYes=2.5;
 if(scaleNo<0.3) scaleNo=0.3;

 no.style.transform=`scale(${scaleNo})`;
 yes.style.transform=`scale(${scaleYes})`;

 progress+=10;
 if(progress>100) progress=100;

 bar.style.width=progress+"%";
 percent.innerText="ใจอ่อนแล้ว "+progress+"%";

 // 💬 เพิ่มตรงนี้
 document.getElementById("text").innerHTML =
   teasing[Math.floor(Math.random() * teasing.length)];
}