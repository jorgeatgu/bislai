$(document).ready(function(){var s=(document.getElementById("map-wrap").getBoundingClientRect(),$(window).scrollTop()),a=$("header");console.log(100),$(window).scroll(function(){s>100?$(a).addClass("display-n"):$(a).removeClass("display-n")})}),$(function(){function s(s){function a(s){i.style("display","block").html('<h4 class="tooltipTitulo">'+s.properties.distrito+'</h4><div class="container-tooltip-leyenda"><p class="tooltipLeyenda"><span>Censo:</span> <span class="resultado"> '+s.properties.total+'</span><p/><p class="tooltipLeyenda"><span>Votantes:</span> <span class="resultado">'+s.properties.votantes+'%</span><p/><p class="tooltipLeyenda"><span>Abstención:</span> <span class="resultado">'+s.properties.abstencion+'%</span><p/></div><div class="container-tooltip-partido"><p class="tooltipPartido"><span class="bgc-pp">PP</span><span class="resultado">'+s.properties.pp+'%</span><p/><p class="tooltipPartido"> <span class="bgc-zec">ZEC</span><span class="resultado">'+s.properties.zec+'%</span><p/><p class="tooltipPartido"><span class="bgc-psoe">PSOE</span><span class="resultado">'+s.properties.psoe+'%</span><p/><p class="tooltipPartido"><span class="bgc-cs">C&#39s</span><span class="resultado">'+s.properties.cs+'%</span><p/><p class="tooltipPartido"><span class="bgc-cha">CHA</span><span class="resultado">'+s.properties.cha+"%</span><p/></div>").transition().duration(200)}function t(s,a){var t=o.project(new mapboxgl.LngLat(s,a));this.stream.point(t.x,t.y)}mapboxgl.accessToken="pk.eyJ1Ijoiam9yZ2VhdGd1IiwiYSI6IjNta3k1WDQifQ.JERO-KTpP2O6F0JwKRPCrg";var o=new mapboxgl.Map({container:"map",style:"mapbox://styles/jorgeatgu/cj832ibiua5bs2rnpv6sdaihb",center:[-.89668,41.657112],zoom:11});o.addControl(new mapboxgl.Navigation);var p=o.getCanvasContainer(),n=d3.select(p).append("svg"),e=(n.append("g").attr("class","distritos"),d3.geo.transform({point:t})),l=d3.geo.path().projection(e),i=d3.select("#map").append("div").attr("class","tooltip"),r=n.selectAll("path").data(s.features).enter().append("path").attr("class","distritos").on("mouseover",a).transition().duration(200);o.scrollZoom.disable(),function(){r.attr("d",l)}()}d3.json("mapas/distrito-electoral-zaragoza.geojson",function(a,t){s(t)})});