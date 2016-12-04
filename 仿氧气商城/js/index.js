window.onload=function(){
var oList1=document.getElementById('piclist1');
   var oList2=document.getElementById('piclist2');
   var oArrow=document.getElementById('arrow');
   show(oList1);
   show(oList2);
    function show(obj){
	var oUl=obj.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++)
	{   
		aLi[i].onmouseover=function(){this.style.borderColor='#eb1d1d';}
		aLi[i].onmouseout=function(){this.style.borderColor='#9c9c9c';}
		
		}
     }
        var timer=null;
        
        var bySys=false;

        window.onscroll = function()
        {
                if(!bySys)
                {
                        clearInterval(timer)
                }
                
                bySys=false;
                var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
                scrolltop==0 ? oArrow.style.display = 'none' : oArrow.style.display = 'block';
        }
        oArrow.onclick = function()
        {
                timer = setInterval(function(){
                        var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
                        var speed=(Math.floor(-scrolltop/8));
                        
                        bySys=true;
                        document.documentElement.scrollTop=document.body.scrollTop=scrolltop+speed;
                        if(scrolltop==0)
                        {
                                clearInterval(timer)
                        }
                },30)
        }
}