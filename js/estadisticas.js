function unanimidadChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:400},drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}],xAxes:[{drawOnChartArea:!1,drawBorder:!1,drawTicks:!1}]},legend:{display:!1},tooltips:!1},data:{labels:["Unanimidad","Disconformidad"],datasets:[{data:[181,275],backgroundColor:["#36B287","#D0577C"]}]}})}function repeticionChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:25}}]},legend:{display:!1}},data:{labels:["PP + PSOE + C'S","ZEC + PSOE + CHA","PP + ZEC + CHA"],datasets:[{data:[55,53,5],backgroundColor:["rgba(32, 159, 105, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"]}]}})}function masMocionesChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:80}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[74,43,75,76,63],backgroundColor:["rgba(0, 128, 184, 1)","rgba(154, 22, 34, 1)","rgba(227, 6, 19, 1)","rgba(240, 122, 54, 1)","rgba(239, 176, 39, 1)"]}]}})}function abstenidoChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:60}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[37,52,24,45,44],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function encontraChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[93,98,48,38,63],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function afavorChart(){var e=document.getElementById("chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{plugins:{datalabels:configDataLabels},scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:70}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[96,77,143,149,113],backgroundColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"]}]}})}function handleResize(){var e=Math.floor(.75*window.innerHeight);step.style.height=e+"px";var a=step.getBoundingClientRect(),t=container.getBoundingClientRect().width;console.log(t);a.width,t.width;var r=t-64,n=Math.floor(window.innerHeight/2);Math.floor(n/2);graphic.style.width=r,graphic.style.height=n,scroller.resize()}function handleStepEnter(e){0===e.index?unanimidadChart():1===e.index?repeticionChart():2===e.index?masMocionesChart():3===e.index?abstenidoChart():4===e.index?encontraChart():5===e.index&&afavorChart()}function init(){handleResize(),scroller.setup({container:"#scroll",graphic:".scroll__graphic",text:".scroll__text",step:".scroll__text .step",offset:.63}).onStepEnter(handleStepEnter),window.addEventListener("resize",handleResize)}var configDataLabels={color:"black",font:{size:"20",weight:"bold"}},container=document.getElementById("scroll"),step=document.querySelector(".step"),graphic=document.querySelector(".scroll__graphic"),text=document.querySelector(".scroll__text"),scroller=scrollama();init();