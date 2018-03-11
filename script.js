function loadData() {
  var searchStr = $('#search').val();
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=pageimages&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|info&inprop=url&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + searchStr + '&callback=JSON_CALLBACK';

  $('.media-container').html("");

  $.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: function(data) {
      var response = data.query.pages;
      console.log(response);
      for (var i in response) {
        var responseStr = response[i];
        var url = responseStr.fullurl;
        $('.media-container').append('<article class="well"><h3><a href=' + url + ' target="_blank">' + responseStr.title + '</h3>' + '<p>'+ responseStr.extract +'</p></article>');
      };
    }
  })
  return false;
}

$('#search-form').on('submit', loadData);
 
