

   var r =document.getElementById("chevright2");
   r.onclick=function(){
        var v1=document.getElementById("v1");
        var v2=document.getElementById("v2");
        v1.style.opacity=0;
        v2.style.opacity=1;
        //v1.style.transform=`translateX(100%)`;
    }

    var r =document.getElementById("chevleft2");
    r.onclick=function(){
        var v1=document.getElementById("v1");
        var v2=document.getElementById("v2");
        v1.style.opacity=1;
        v2.style.opacity=0;
        v1.style.transform=`translateX(0)`;
     }


   /* var r =document.getElementById("chevleft");
    r.onclick=function(){
       var y = document.getElementById("tpm");
        y.src="tpm.png";
    var p= document.getElementById("p");
    var arr=p.childNodes;
        for(var x=0 ; x<arr.length ; x++){
            arr[x].innerHTML=arr[x].innerHTML;
      }
        var h4=document.getElementById("h4");
        h4.innerHTML="Formation lean six segma";
    }
    
    function ff1(){setInterval(f1 , 1500);} 
    function ff2(){setInterval(f2 , 2000);} 
    r.addEventListener("click",f1,true);
    r.addEventListener("click",f2,true);
    var i =1;
    function change(){
        if(i==1){
        var y = document.getElementById("tpm");
        y.src="tpm.png";
        var p= document.getElementById("p");
        var arr=p.childNodes;
        for(var x=0 ; x<arr.length ; x++){
            arr[x].innerHTML=arr[x].innerHTML ;
        }
        var h4=document.getElementById("h4");
        h4.innerHTML="Formation lean six segma";
        i=0;
         }
        else if(i==0){
            var y = document.getElementById("tpm");
            y.src="yellow.png";
            var p= document.getElementById("p");
            var arr=p.childNodes;
            for(var x=0 ; x<arr.length ; x++){
                arr[x].innerHTML=arr[x].innerHTML+".";
            }
            var h4=document.getElementById("h4");
            h4.innerHTML="yellow sig...";
            i=1;
        }
    }
      function f1(){
        var child1=document.getElementById("chevleft");
        var child2=document.getElementById("h4");
        var child3=document.getElementById("p");
        var child4=document.getElementById("ins1");
        var child5=document.getElementById("chevright");
        child1.style.display = "none";
        child2.style.display = "none";
        child3.style.display = "none";
        child4.style.display = "none";
        child5.style.display = "none";
    }
    function f2(){
        var child1=document.getElementById("chevleft");
        var child2=document.getElementById("h4");
        var child3=document.getElementById("p");
        var child4=document.getElementById("ins1");
        var child5=document.getElementById("chevright");
        child1.style.display = "inline-block";
        child2.style.display = "block";
        child3.style.display = "block";
        child4.style.display = "block";
        child5.style.display = "inline-block";
    }

     var A = document.getElementById("ins");
     A.addEventListener("click",f);
     var t1= setInterval(tpm , 1000);
     var t2= setInterval(segma , 2000);*/
     /*function tpm(){
          var arrb=["prix" , "Contacte" ];
          var arrs=["Etudint : 400dh", " Professionnel : 600dh", "email : h@gmail.com" , "whatssap : 08976555"];
          var b=document.getElementsByName("b");
          var s=document.getElementsByTagName("span");
          var h4=document.getElementById("h4");
          var photo = document.getElementById("tpm");
          for(var x=0 ; x<b.length ; x++){
               b[x].innerHTML=arrb[x];
          }
          for(var x=0 ; x<s.length ; x++){
            s[x].innerHTML=arrs[x];
         }
         h4.innerHTML="Formation lean six segma";
         photo.src="tpm.png";
     }
     function segma(){
        var arrb=["prix" , "Contacte" ];
        var arrs=["Etudint : 400dh", " Professionnel : 600dh", "email : h@gmail.com" , "whatssap : 08976555"];
        var b=document.getElementsByName("b");
        var s=document.getElementsByTagName("span");
        var h4=document.getElementById("h4");
        var photo = document.getElementById("tpm");
        for(var x=0 ; x<b.length ; x++){
             b[x].innerHTML=arrb[x];
        }
        for(var x=0 ; x<s.length ; x++){
          s[x].innerHTML=arrs[x];
       }
       h4.innerHTML="yellow segma";
       photo.src="yellow.png";
     }*/


        function str(ch){
             // L'expression régulière qui ^[a-d] pour tester si la chaîne commence par une lettre entre a et le modificateur i pour ne pas faire de différence entre majuscules et minuscules   */
               var pattern =/\d/g; 
               var res1 = document.getElementById("res1");
               
               if(ch.search(pattern)!=-1){
                   res1.innerHTML=ch+" chaîne invalide ";
               }

        }
        function strp(ch){
            var res2 = document.getElementById("res2");
            var pattern =/\d/g; 
            if(ch.search(pattern)!=-1){
                res2.innerHTML=ch+" chaîne invalide ";
            }
        }
        function srte(ch){
            var res3 = document.getElementById("res3");
            var c =ch.split('@');
           if(c.length!=2){
           	res3.innerHTML=ch+" chaîne invalide  ";
           }
        }
        function strtel(ch){
            var res4 = document.getElementById("res4");
            var pattern1 = /^\+212\d{9}$/;
            if(!ch.match(pattern1)) {
                res4.innerHTML="invalid phone number";      
            }
        }

      function verfie(){
        var name=document.getElementById("fname").value;
        var prenom=document.getElementById("fprenom").value;
        var email=document.getElementById("email").value;
        var tel=document.getElementById("tel").value;
        str(name);
        strp(prenom);
        srte(email);
        strtel(tel);
      }
        
    
