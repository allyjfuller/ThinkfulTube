function getResults(item) {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
    part: "snippet",
    key: "AIzaSyA2ged1i5fKjk7EgAFvzkamnLbdD4L8qiw",
    q: item,
    maxResults: 10
  };
  $.getJSON(url, params, function(data){
    returnResults(data.items);
  });
};

function returnResults(response){
  var dom = "";
  $.each(response, function(x, value){
      dom += '<div>';
      dom += '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="newtab"><img src="' + value.snippet.thumbnails.default.url + '"></a>';
      dom += '<p>' + "Video Link: " + '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="newtab">' + value.snippet.title + '</a></p>';
      dom += '<p>' + "Channel Link: " + '<a href="https://www.youtube.com/watch?v=' + value.snippet.channelId + '" target="newtab">' + value.snippet.channelTitle + '</p>';     
      dom += '</div>';
  });
  $('#youtube-search-results').html(dom);
};

$(function(){
  $('#youtube-search-term').submit(function(event){
    event.preventDefault();
    var valueToSearch = $('#youtube-query').val();
    getResults(valueToSearch);
    $('#youtube-query').val("");
  });
});