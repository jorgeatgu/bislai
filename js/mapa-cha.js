var width=window.innerWidth>0?window.innerWidth:screen.width;function graficasCha(){var s=48,a=48,t=48,o=48,p=450-o-a,n=390-s-t,e=d3.scale.ordinal().rangeRoundBands([0,p],.2),r=d3.scale.linear().range([n,0]),i=d3.svg.axis().scale(e).tickFormat(d3.format("d")).orient("bottom"),l=d3.svg.axis().scale(r).ticks(5).tickFormat(function(s){return s+"%"}).tickSize(-p).orient("left");d3.csv("datos/elecciones-distrito-cha.csv",function(c,d){datos=d,datos.forEach(function(s){s.fecha=s.fecha,s.cantidad=+s.cantidad});var u=d3.nest().key(function(s){return s.distrito}).entries(d);e.domain(d.map(function(s){return s.fecha})),r.domain([0,30]);var h=d3.select(".graficas-cha").selectAll("svg").data(u).enter().append("svg").attr("class","distrito").attr("width",p+o+a).attr("height",n+s+t).append("g").attr("transform","translate("+o+","+s+")");h.selectAll(".bar").data(function(s){return s.values}).enter().append("rect").attr("class","bar").attr("x",function(s){return e(s.fecha)}).attr("width",e.rangeBand()).attr("y",function(s){return r(s.cantidad)}).attr("height",function(s){return n-r(s.cantidad)}).attr("fill","#52788b"),h.selectAll("text").data(function(s){return s.values}).enter().append("text").attr("class","tooltip-porcentaje").text(function(s){return s.cantidad}).attr("x",function(s){return e(s.fecha)}).attr("y",function(s){return r(s.cantidad)-5}),h.append("g").attr("class","xAxis").attr("transform","translate(0,"+n+")").call(i),h.append("g").attr("class","yAxis").call(l).append("text").attr("class","nombre-distrito").attr("y","-3%").attr("x","0").text(function(s){return s.key})})}width>767&&$(function(){d3.json("mapas/distritos-cha-zaragoza.geojson",function(s,a){!function(s){mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cjf4fr0sj019m2qqiaz1mynna",center:[-.850431,41.651729],zoom:11.5});a.addControl(new mapboxgl.Navigation);var t=a.getCanvasContainer(),o=d3.select(t).append("svg"),p=(o.append("g").attr("class","distritos"),d3.geo.transform({point:function(s,t){var o=a.project(new mapboxgl.LngLat(s,t));this.stream.point(o.x,o.y)}})),n=d3.geo.path().projection(p),e=d3.select("#map").append("div").attr("class","tooltip tooltip-cha"),r=o.selectAll("path").data(s.features).enter().append("path").attr("class","distritosCHA").on("mouseover",function(s){e.style("display","block").html('<h4 class="tooltipTitulo">'+s.properties.distrito+'</h4><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2015</span><span style="width:'+1.65*s.properties.quince_p+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.quince_p+'%</span><span class="resultadoVotos">'+s.properties.quince_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2011</span><span style="width:'+1.65*s.properties.once_p+'%" class="bgc-cha"></span></span><span class="resultado"><span  class="resultadoVotos"> '+s.properties.once_p+'%</span><span class="resultadoVotos">'+s.properties.once_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2007</span><span style="width:'+1.65*s.properties.siete_p+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.siete_p+'%</span> <span class="resultadoVotos">'+s.properties.siete_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">2003</span><span style="width:'+1.65*s.properties.tres_p+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.tres_p+'%</span> <span class="resultadoVotos">'+s.properties.tres_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1999</span><span style="width:'+1.65*s.properties.nueve_p+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.nueve_p+'%</span> <span class="resultadoVotos"> '+s.properties.nueve_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1995</span><span style="width:'+1.65*s.properties.cinco_p+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.cinco_p+'%</span> <span class="resultadoVotos"> '+s.properties.cinco_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1991</span><span style="width:'+1.65*s.properties.uno_p+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.uno_p+'%</span> <span class="resultadoVotos"> '+s.properties.uno_v+' votos</span><p/><p class="tooltipPartido"><span class="resultado-izda"><span class="titulo-partido">1987</span><span style="width:'+1.65*s.properties.ochosiete_p+'%" class="bgc-cha"></span></span><span class="resultado"><span class="resultadoVotos"> '+s.properties.ochosiete_p+'%</span> <span class="resultadoVotos"> '+s.properties.ochosiete_v+" votos</span><p/></div>").transition().duration(200)}).transition().duration(200);a.scrollZoom.disable(),r.attr("d",n)}(a)})}),graficasCha();