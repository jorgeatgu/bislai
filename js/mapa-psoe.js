function loadJSON(s){var a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET","mociones.json",!0),a.onreadystatechange=function(){4==a.readyState&&"200"==a.status&&s(a.responseText)},a.send(null)}function init(){loadJSON(function(s){var a=JSON.parse(s);console.log(a[0].fecha)})}$(function(){d3.json("mapas/distritos-psoe-zaragoza.geojson",function(s,a){!function(s){mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cj9opzumt4m782sov13cumd8w",center:[-.850431,41.651729],zoom:11.5});a.addControl(new mapboxgl.Navigation);var o=a.getCanvasContainer(),t=d3.select(o).append("svg"),p=(t.append("g").attr("class","distritos"),d3.geo.transform({point:function(s,o){var t=a.project(new mapboxgl.LngLat(s,o));this.stream.point(t.x,t.y)}})),e=d3.geo.path().projection(p),n=d3.select("#map").append("div").attr("class","tooltip tooltip-psoe"),l=t.selectAll("path").data(s.features).enter().append("path").attr("class","distritosPSOE").on("mouseover",function(s){n.style("display","block").html('<h4 class="tooltipTitulo">'+s.properties.distrito+'</h4><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:'+1.65*s.properties.quince_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.quince_p+'%</span><span class="resultadoVotos">'+s.properties.quince_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2011</span><span style="width:'+1.65*s.properties.once_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span  class="resultadoVotos"> '+s.properties.once_p+'%</span><span class="resultadoVotos">'+s.properties.once_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2007</span><span style="width:'+1.65*s.properties.siete_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.siete_p+'%</span> <span class="resultadoVotos">'+s.properties.siete_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2003</span><span style="width:'+1.65*s.properties.tres_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.tres_p+'%</span> <span class="resultadoVotos">'+s.properties.tres_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1999</span><span style="width:'+1.65*s.properties.nueve_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.nueve_p+'%</span> <span class="resultadoVotos"> '+s.properties.nueve_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1995</span><span style="width:'+1.65*s.properties.cinco_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.cinco_p+'%</span> <span class="resultadoVotos"> '+s.properties.cinco_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1991</span><span style="width:'+1.65*s.properties.uno_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.uno_p+'%</span> <span class="resultadoVotos"> '+s.properties.uno_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1987</span><span style="width:'+1.65*s.properties.ochosiete_p+'%" class="bgc-psoe"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.ochosiete_p+'%</span> <span class="resultadoVotos"> '+s.properties.ochosiete_v+" votos</span><p/></div>").transition().duration(200)}).transition().duration(200);a.scrollZoom.disable(),l.attr("d",e)}(a)})});