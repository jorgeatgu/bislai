var configDataLabels={backgroundColor:"rgba(0, 0, 0, .6)",borderRadius:5,color:"white",padding:{top:5,right:10,bottom:5,left:10}},configDataLabelsPartidos={color:"black",font:{size:"20",weight:"bold"}},votaciones=["1979","1983","1987","1991","1995","1999","2003","2007","2011","2015"],partidos=["ZEC","PSOE","C'S","CHA"],colorPartidos=["rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"];function historico(){var a=document.getElementById("historico");new Chart(a,{type:"line",duration:300,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:31,fontColor:"#111"},gridLines:{color:"#111",lineWidth:1}}],xAxes:[{ticks:{fontColor:"#111"},gridLines:{color:"#111",lineWidth:1}}]},legend:{display:!1},tooltips:!1},data:{labels:votaciones,datasets:[{data:[0,8,5,7,15,15,11,12,15,10],backgroundColor:["#05042f"],borderColor:["#ccc"],borderWidth:[1],datalabels:{align:"end",anchor:"end"}}]}})}function enContra(){var a=document.getElementById("en-contra");new Chart(a,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabelsPartidos},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:20},drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}],xAxes:[{drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}]},legend:{display:!1},tooltips:!1},data:{labels:partidos,datasets:[{data:[57,29,5,44],backgroundColor:["rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}function aFavor(){var a=document.getElementById("a-favor");new Chart(a,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabelsPartidos},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:20},drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}],xAxes:[{drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}]},legend:{display:!1},tooltips:!1},data:{labels:partidos,datasets:[{data:[6,35,57,13],backgroundColor:["rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}function Abstencion(){var a=document.getElementById("abstencion");new Chart(a,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabelsPartidos},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:20},drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}],xAxes:[{drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}]},legend:{display:!1},tooltips:!1},data:{labels:partidos,datasets:[{data:[13,12,14,19],backgroundColor:["rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}function votandoEnContra(){var a=document.getElementById("votando-en-contra");new Chart(a,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabelsPartidos},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:20},drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}],xAxes:[{drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}]},legend:{display:!1},tooltips:!1},data:{labels:partidos,datasets:[{data:[40,16,10,30],backgroundColor:["rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}function votandoAFavor(){var a=document.getElementById("votando-a-favor");new Chart(a,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabelsPartidos},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:20},drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}],xAxes:[{drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}]},legend:{display:!1},tooltips:!1},data:{labels:partidos,datasets:[{data:[3,39,27,5],backgroundColor:["rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}historico(),enContra(),aFavor(),Abstencion(),votandoEnContra(),votandoAFavor();