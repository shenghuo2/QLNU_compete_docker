
var mainDiv=document.getElementById("maindiv");
    
var startdiv=document.getElementById("startdiv");
    
var scorediv=document.getElementById("scorediv");
    
var scorelabel=document.getElementById("label");
    
var suspenddiv=document.getElementById("suspenddiv");
    
var enddiv=document.getElementById("enddiv");
    
var planscore=document.getElementById("planscore");
    
var scores=0;


function plan(hp,X,Y,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc){
    this.planX=X;
    this.planY=Y;
    this.imagenode=null;
    this.planhp=hp;
    this.planscore=score;
    this.plansizeX=sizeX;
    this.plansizeY=sizeY;
    this.planboomimage=boomimage;
    this.planisdie=false;
    this.plandietimes=0;
    this.plandietime=dietime;
    this.plansudu=sudu;


    this.planmove=function(){
        if(scores<=5000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+"px";
        }
        else if(scores>5000&&scores<=10000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+1+"px";
        }
        else if(scores>10000&&scores<=15000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+2+"px";
        }
        else if(scores>15000&&scores<=20000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+3+"px";
        }
        else if(scores>20000&&scores<=30000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+4+"px";
        }
        else if(scores>30000&&scores<=40000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+5+"px";
        }
        else if(scores>40000&&scores<=50000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+6+"px";
        }
        else if(scores>50000&&scores<=60000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+7+"px";
        }
        else if(scores>60000&&scores<=70000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+8+"px";
        }
        else{
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+15+"px";
        }
		if(scores>99999){
        selfplan.imagenode.src="image/boom.png";
        enddiv.style.display="block";
        planscore.innerHTML=scores;
        if(document.removeEventListener){
            mainDiv.removeEventListener("mousemove",yidong,true);
            bodyobj.removeEventListener("mousemove",bianjie,true);
        }
        else if(document.detachEvent){
            mainDiv.detachEvent("onmousemove",yidong);
            bodyobj.removeEventListener("mousemove",bianjie,true);
        }
        clearInterval(set);
		won();
		}
    }
    this.init=function(){
        this.imagenode=document.createElement("img");
        this.imagenode.style.left=this.planX+"px";
        this.imagenode.style.top=this.planY+"px";
        this.imagenode.src=imagesrc;
        mainDiv.appendChild(this.imagenode);
    }
    this.init();
}


function bullet(X,Y,sizeX,sizeY,imagesrc){
    this.bulletX=X;
    this.bulletY=Y;
    this.bulletimage=null;
    this.bulletattach=1;
    this.bulletsizeX=sizeX;
    this.bulletsizeY=sizeY;


    this.bulletmove=function(){
        this.bulletimage.style.top=this.bulletimage.offsetTop-20+"px";
    }
    this.init=function(){
        this.bulletimage=document.createElement("img");
        this.bulletimage.style.left= this.bulletX+"px";
        this.bulletimage.style.top= this.bulletY+"px";
        this.bulletimage.src=imagesrc;
        mainDiv.appendChild(this.bulletimage);
    }
    this.init();
}


 
function won(){
var galf = "QLNU{really_fakeflag?}";
	alert(atob(galf));
}
function oddbullet(X,Y){
    bullet.call(this,X,Y,6,14,"image/bullet1.png");
}


function enemy(hp,a,b,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc){
    plan.call(this,hp,random(a,b),-100,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc);
}

function random(min,max){
    return Math.floor(min+Math.random()*(max-min));
}


function ourplan(X,Y){
    var imagesrc="image/我的飞机.gif";
    plan.call(this,1,X,Y,66,80,0,660,0,"image/本方飞机爆炸.gif",imagesrc);
    this.imagenode.setAttribute('id','ourplan');
}


var selfplan=new ourplan(120,485);

var ourPlan=document.getElementById('ourplan');
var yidong=function(){
    var oevent=window.event||arguments[0];
    var chufa=oevent.srcElement||oevent.target;
    var selfplanX=oevent.clientX-500;
    var selfplanY=oevent.clientY;
    ourPlan.style.left=selfplanX-selfplan.plansizeX/2+"px";
    ourPlan.style.top=selfplanY-selfplan.plansizeY/2+"px";


}

var number=0;
var zanting=function(){
    if(number==0){
        suspenddiv.style.display="block";
        if(document.removeEventListener){
            mainDiv.removeEventListener("mousemove",yidong,true);
            bodyobj.removeEventListener("mousemove",bianjie,true);
        }
        else if(document.detachEvent){
            mainDiv.detachEvent("onmousemove",yidong);
            bodyobj.detachEvent("onmousemove",bianjie);
        }
        clearInterval(set);
        number=1;
    }
    else{
        suspenddiv.style.display="none";
        if(document.addEventListener){
            mainDiv.addEventListener("mousemove",yidong,true);
            bodyobj.addEventListener("mousemove",bianjie,true);
        }
        else if(document.attachEvent){
            mainDiv.attachEvent("onmousemove",yidong);
            bodyobj.attachEvent("onmousemove",bianjie);
        }
        set=setInterval(start,20);
        number=0;
    }
}

var bianjie=function(){
    var oevent=window.event||arguments[0];
    var bodyobjX=oevent.clientX;
    var bodyobjY=oevent.clientY;
    if(bodyobjX<505||bodyobjX>815||bodyobjY<0||bodyobjY>568){
        if(document.removeEventListener){
            mainDiv.removeEventListener("mousemove",yidong,true);
        }
        else if(document.detachEvent){
            mainDiv.detachEvent("onmousemove",yidong);
        }
    }
    else{
        if(document.addEventListener){
            mainDiv.addEventListener("mousemove",yidong,true);
        }
        else if(document.attachEvent){
            mainDiv.attachEvent("nomousemove",yidong);
        }
    }
}






var bodyobj=document.getElementsByTagName("body")[0];
if(document.addEventListener){
    
    mainDiv.addEventListener("mousemove",yidong,true);
    
    selfplan.imagenode.addEventListener("click",zanting,true);
    
    bodyobj.addEventListener("mousemove",bianjie,true);
    
    suspenddiv.getElementsByTagName("button")[0].addEventListener("click",zanting,true);

    
    suspenddiv.getElementsByTagName("button")[2].addEventListener("click",jixu,true);
}
else if(document.attachEvent){
    
    mainDiv.attachEvent("onmousemove",yidong);
    
    selfplan.imagenode.attachEvent("onclick",zanting);
    
    bodyobj.attachEvent("onmousemove",bianjie);
    
    suspenddiv.getElementsByTagName("button")[0].attachEvent("onclick",zanting);

    
    suspenddiv.getElementsByTagName("button")[2].attachEvent("click",jixu,true);
}

selfplan.imagenode.style.display="none";


var enemys=[];


var bullets=[];
var mark=0;
var mark1=0;
var backgroundPositionY=0;

function start(){
    mainDiv.style.backgroundPositionY=backgroundPositionY+"px";
    backgroundPositionY+=0.5;
    if(backgroundPositionY==568){
        backgroundPositionY=0;
    }
    mark++;
    

    if(mark==20){
        mark1++;
        
        if(mark1%5==0){
            enemys.push(new enemy(6,25,274,46,60,500,360,random(1,3),"image/中飞机爆炸.gif","image/enemy3_fly_1.png"));
        }
        
        if(mark1==20){
            enemys.push(new enemy(12,57,210,110,164,3000,540,1,"image/大飞机爆炸.gif","image/enemy2_fly_1.png"));
            mark1=0;
        }
        
        else{
            enemys.push(new enemy(1,19,286,34,24,100,360,random(1,4),"image/小飞机爆炸.gif","image/enemy1_fly_1.png"));
        }
        mark=0;
    }


    var enemyslen=enemys.length;
    for(var i=0;i<enemyslen;i++){
        if(enemys[i].planisdie!=true){
            enemys[i].planmove();
        }

        if(enemys[i].imagenode.offsetTop>568){
            mainDiv.removeChild(enemys[i].imagenode);
            enemys.splice(i,1);
            enemyslen--;
        }
        
        if(enemys[i].planisdie==true){
            enemys[i].plandietimes+=20;
            if(enemys[i].plandietimes==enemys[i].plandietime){
                mainDiv.removeChild(enemys[i].imagenode);
                enemys.splice(i,1);
                enemyslen--;
            }
        }
    }


    if(mark%5==0){
            bullets.push(new oddbullet(parseInt(selfplan.imagenode.style.left)+31,parseInt(selfplan.imagenode.style.top)-10));
    }


    var bulletslen=bullets.length;
    for(var i=0;i<bulletslen;i++){
        bullets[i].bulletmove();

        if(bullets[i].bulletimage.offsetTop<0){
            mainDiv.removeChild(bullets[i].bulletimage);
            bullets.splice(i,1);
            bulletslen--;
        }
    }


    for(var k=0;k<bulletslen;k++){
        for(var j=0;j<enemyslen;j++){
            
            if(enemys[j].planisdie==false){
                if(enemys[j].imagenode.offsetLeft+enemys[j].plansizeX>=selfplan.imagenode.offsetLeft&&enemys[j].imagenode.offsetLeft<=selfplan.imagenode.offsetLeft+selfplan.plansizeX){
                  if(enemys[j].imagenode.offsetTop+enemys[j].plansizeY>=selfplan.imagenode.offsetTop+40&&enemys[j].imagenode.offsetTop<=selfplan.imagenode.offsetTop-20+selfplan.plansizeY){
                      
                      selfplan.imagenode.src="image/boom.png";
                      enddiv.style.display="block";
                      planscore.innerHTML=scores;
                      if(document.removeEventListener){
                          mainDiv.removeEventListener("mousemove",yidong,true);
                          bodyobj.removeEventListener("mousemove",bianjie,true);
                      }
                      else if(document.detachEvent){
                          mainDiv.detachEvent("onmousemove",yidong);
                          bodyobj.removeEventListener("mousemove",bianjie,true);
                      }
                      clearInterval(set);
                  }
                }
                
                if((bullets[k].bulletimage.offsetLeft+bullets[k].bulletsizeX>enemys[j].imagenode.offsetLeft)&&(bullets[k].bulletimage.offsetLeft<enemys[j].imagenode.offsetLeft+enemys[j].plansizeX)){
                    if(bullets[k].bulletimage.offsetTop<=enemys[j].imagenode.offsetTop+enemys[j].plansizeY&&bullets[k].bulletimage.offsetTop+bullets[k].bulletsizeY>=enemys[j].imagenode.offsetTop){
                        
                        enemys[j].planhp=enemys[j].planhp-bullets[k].bulletattach;
                        
                        if(enemys[j].planhp==0){
                            scores=scores+enemys[j].planscore;
                            scorelabel.innerHTML=scores;
                            enemys[j].imagenode.src=enemys[j].planboomimage;
                            enemys[j].planisdie=true;
                        }
                        
                        mainDiv.removeChild(bullets[k].bulletimage);
                            bullets.splice(k,1);
                            bulletslen--;
                            break;
                    }
                }
            }
        }
    }
}

var set;
function begin(){

    startdiv.style.display="none";
    mainDiv.style.display="block";
    selfplan.imagenode.style.display="block";
    scorediv.style.display="block";
    
    set=setInterval(start,20);
}

function jixu(){
	if (scores < 99999){
	alert("太菜辣");
	alert('分数大于99999就能拿到flag哦')
	alert("再来一次吧");
	}
    location.reload(true);
}

