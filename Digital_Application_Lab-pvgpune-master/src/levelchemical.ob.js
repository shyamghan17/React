var _$_90d3=["onload","mycanvas","getElementById","2d","getContext","temp1","width","height","clearRect","beginPath","lineWidth","value","rect","fillStyle","rgba(0, 100, 255, 1)","fill","strokeStyle","black","stroke","press1","rgba(144, 100, 255, 1)","draw","outlink","xin1","moveTo","lineTo","yin1","green","grey","xin2","yin2","font","12pt Calibri","Tank A","fillText","Tank B","Level Sensor A","Level Sensor B","1/4 Level","Y=(A.B)'","setip1","setip2"];window[_$_90d3[0]]=function(){anim()};var n1= new nandgate(_$_90d3[1],400,300);var z1= new zener(_$_90d3[1],500,300);var canvas=document[_$_90d3[2]](_$_90d3[1]);var context=canvas[_$_90d3[4]](_$_90d3[3]);function anim(){sl1=document[_$_90d3[2]](_$_90d3[5]);context[_$_90d3[8]](0,0,canvas[_$_90d3[6]],canvas[_$_90d3[7]]);context[_$_90d3[9]]();context[_$_90d3[10]]=0;var a=parseInt(sl1[_$_90d3[11]]);context[_$_90d3[12]](100,240,130,-a*1.5);context[_$_90d3[13]]=_$_90d3[14];context[_$_90d3[15]]();context[_$_90d3[9]]();context[_$_90d3[10]]=3;context[_$_90d3[12]](100,240,130,-150);context[_$_90d3[16]]=_$_90d3[17];context[_$_90d3[18]]();sl2=document[_$_90d3[2]](_$_90d3[19]);context[_$_90d3[9]]();context[_$_90d3[10]]=0;var a=parseInt(sl2[_$_90d3[11]]);context[_$_90d3[12]](100,440,130,-a*1.5);context[_$_90d3[13]]=_$_90d3[20];context[_$_90d3[15]]();context[_$_90d3[9]]();context[_$_90d3[10]]=3;context[_$_90d3[12]](100,440,130,-150);context[_$_90d3[16]]=_$_90d3[17];context[_$_90d3[18]]();context[_$_90d3[9]]();context[_$_90d3[10]]=3;context[_$_90d3[12]](230,417,15,-15);context[_$_90d3[16]]=_$_90d3[17];context[_$_90d3[18]]();context[_$_90d3[9]]();context[_$_90d3[10]]=3;context[_$_90d3[12]](230,217,15,-15);context[_$_90d3[16]]=_$_90d3[17];context[_$_90d3[18]]();n1[_$_90d3[21]]();z1[_$_90d3[21]]();n1[_$_90d3[22]](z1,1,1);var b=(244+n1[_$_90d3[23]])/2;context[_$_90d3[9]]();context[_$_90d3[10]]=3;context[_$_90d3[24]](244,210);context[_$_90d3[25]](b,210);context[_$_90d3[25]](b,n1[_$_90d3[26]]);context[_$_90d3[25]](n1[_$_90d3[23]],n1[_$_90d3[26]]);if(parseInt(sl1[_$_90d3[11]])>25){context[_$_90d3[16]]=_$_90d3[27]}else {context[_$_90d3[16]]=_$_90d3[28]};context[_$_90d3[18]]();var b=(244+n1[_$_90d3[29]])/2;context[_$_90d3[9]]();context[_$_90d3[10]]=3;context[_$_90d3[24]](244,410);context[_$_90d3[25]](b,410);context[_$_90d3[25]](b,n1[_$_90d3[30]]);context[_$_90d3[25]](n1[_$_90d3[29]],n1[_$_90d3[30]]);if(parseInt(sl2[_$_90d3[11]])>25){context[_$_90d3[16]]=_$_90d3[27]}else {context[_$_90d3[16]]=_$_90d3[28]};context[_$_90d3[18]]();context[_$_90d3[31]]=_$_90d3[32];context[_$_90d3[13]]=_$_90d3[17];context[_$_90d3[34]](_$_90d3[33],125,125);context[_$_90d3[34]](_$_90d3[35],125,325);context[_$_90d3[34]](_$_90d3[36],240,190);context[_$_90d3[34]](_$_90d3[37],240,440);context[_$_90d3[34]](_$_90d3[38],240,390);context[_$_90d3[34]](_$_90d3[38],240,240);context[_$_90d3[34]](_$_90d3[39],520,350);if(parseInt(sl1[_$_90d3[11]])>25){n1[_$_90d3[40]](1)}else {n1[_$_90d3[40]](0)};if(parseInt(sl2[_$_90d3[11]])>25){n1[_$_90d3[41]](1)}else {n1[_$_90d3[41]](0)};}function clickme(){anim()}