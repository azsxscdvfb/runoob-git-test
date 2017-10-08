var cj = [{name:"学生甲-",score:92},
          {name:"学生乙-",score:67},
          {name:"学生丙-",score:78},
          {name:"学生丁-",score:45},
          {name:"学生戊-",score:88}];
var k =[0,0,0,0,0];
var x =[0,0,0,0,0];
  for(var i=0 ; i<5; i++){
     for(var o=0; o<5; o++)
         {var a = cj[i].score;
	      var b = cj[o].score;
	      if (a>b) 
              x[i]=x[i]+1;}};
  for(var i=0; i<5; i++){
	for(var j=0; j<5; j++){
		var q=x[i];
		var w=j;
		  if(q==w)
		     {k[j]=cj[i].name + cj[i].score}
          else {var d=0;}
;};}
  for (var p=0; p<5; p++)
	console.log(k[p]);