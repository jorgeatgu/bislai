function clicked(t,o){}function zoomed(){features.attr("transform","translate("+zoom.translate()+")scale("+zoom.scale()+")").selectAll("path").style("stroke-width",1/zoom.scale()+"px")}function showTooltip(t){tooltip.style("display","block").html('<h4 class="tooltipTitulo">'+t.properties.distrito+'</h4><p class="tooltipLeyenda">Población: '+t.properties.total+'<p/><p class="tooltipLeyenda">Votantes: '+t.properties.votantes+'%<p/><p class="tooltipLeyenda">Abstención: '+t.properties.abstencion+'%<p/><p class="tooltipPartido"><img src="../img/logo-pp.png" class="tooltip-image">'+t.properties.pp+'%<p/><p class="tooltipPartido"><img src="../img/logo-zec.png" class="tooltip-image">'+t.properties.zec+'%<p/><p class="tooltipPartido"><img src="../img/logo-psoe.png" class="tooltip-image">'+t.properties.psoe+'%<p/><p class="tooltipPartido"><img src="../img/logo-cs.png" class="tooltip-image">'+t.properties.cs+'%<p/><p class="tooltipPartido"><img src="../img/logo-chunta.jpg" class="tooltip-image">'+t.properties.cha+"%<p/>")}var width=461,height=600,projection=d3.geo.mercator().scale(50832.460579212995).center([-.9273105000000003,41.69198426570548]).translate([width/2,height/2]),path=d3.geo.path().projection(projection),svg=d3.select(".mapa").append("svg").attr("class","mapa-elecciones").attr("width",width).attr("height",height),features=svg.append("g").attr("class","features"),color=d3.scale.quantize().domain([57.25,70.6]).range(d3.range(3).map(function(t){return"q"+t+"-3"})),zoom=d3.behavior.zoom().scaleExtent([1,1/0]).on("zoom",zoomed);svg.call(zoom);var tooltip=d3.select(".mapa").append("div").attr("class","tooltip");d3.json("mapas/distrito-electoral-zaragoza.geojson",function(t,o){return t?console.log(t):void features.selectAll("path").data(o.features).enter().append("path").attr("d",path).attr("class",function(t){return"string"==typeof color(t.properties.votantes)?color(t.properties.votantes):""}).on("mouseover",showTooltip).on("mouseout",hideTooltip).on("click",clicked)});var tooltipOffset={x:5,y:-25};