function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

$(document).ready(function(){
  var revised_entities = [];
  var html = "";
  var shuffled_elements = shuffle(sevilla.features);
  console.log(shuffled_elements);
  $(shuffled_elements).each(function (index) {
    var prop = shuffled_elements[index].properties;
    // if (revised_entities.indexOf(prop.name) < 0) {
      // revised_entities.push(prop.name);
      html += "<div class='row well'>";
      html += "<div class='col-sm-4'>";
      html += "<h3>"+prop.name+"</h3><hr><span id='cat' class='label label-warning'>"+prop.cat+"</span><p>"+prop.dire+"<br/>"+prop.localidad+" ("+prop.provincia+")</p><span class='glyphicon glyphicon-link'></span> <a href='"+prop.url+"' target='_blank'>Visita su web</a><br/><span class='glyphicon glyphicon-envelope'></span> "+prop.mail+"<br/><span class='glyphicon glyphicon-phone'></span> "+prop.phone;
      html += "</div>";
      html += "<div class='col-sm-8'>";
      html += "<p class='desc'>"+prop.des+"</p>";
      html += "</div>";
      html += "</div>";
    // }
  });
  $('#elements').html(html);
});
