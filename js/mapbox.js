$(function(){d3.json("mapas/distrito-electoral-zaragoza.geojson",function(s,a){!function(s){function a(){l.attr("d",n)}mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";var t=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cj832ibiua5bs2rnpv6sdaihb",center:[-.886506,41.64933],zoom:11.12});t.addControl(new mapboxgl.Navigation);var p=t.getCanvasContainer(),o=d3.select(p).append("svg"),e=(o.append("g").attr("class","distritos"),d3.geo.transform({point:function(s,a){var p=t.project(new mapboxgl.LngLat(s,a));this.stream.point(p.x,p.y)}})),n=d3.geo.path().projection(e),i=d3.select("#map").append("div").attr("class","tooltip"),l=o.selectAll("path").data(s.features).enter().append("path").attr({stroke:"#81165a","stroke-opacity":.4,"stroke-width":50,fill:"#c22361","fill-opacity":.1}).on("mouseover",function(s){i.style("display","block").html('<h4 class="tooltipTitulo">'+s.properties.distrito+'</h4><div class="container-tooltip-leyenda"><p class="tooltipLeyenda"><span>Censo:</span> <span class="resultado"> '+s.properties.total+'</span><p/><p class="tooltipLeyenda"><span>Votantes:</span> <span class="resultado">'+s.properties.votantes+'%</span><p/><p class="tooltipLeyenda"><span>Abstención:</span> <span class="resultado">'+s.properties.abstencion+'%</span><p/></div><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="bgc-pp">PP</span><span class="resultado">'+s.properties.pp+'%</span><p/><p class="tooltipPartido"> <span class="bgc-zec">ZEC</span><span class="resultado">'+s.properties.zec+'%</span><p/><p class="tooltipPartido"><span class="bgc-psoe">PSOE</span><span class="resultado">'+s.properties.psoe+'%</span><p/><p class="tooltipPartido"><span class="bgc-cs">C&#39s</span><span class="resultado">'+s.properties.cs+'%</span><p/><p class="tooltipPartido"><span class="bgc-cha">CHA</span><span class="resultado">'+s.properties.cha+"%</span><p/></div>")});t.on("viewreset",a),t.on("movestart",function(){o.classed("hidden",!0)}),t.on("rotate",function(){o.classed("hidden",!0)}),t.on("moveend",function(){a(),o.classed("hidden",!1)}),a()}(a)})});