(function($) {
  
  var yt = $.yt = {};
  
  yt.playlistsUrl = 'https://gdata.youtube.com/feeds/api/users/{{userId}}/playlists';
  yt.playlistUrl = 'https://gdata.youtube.com/feeds/api/playlists/{{playlistId}}';
  
  yt.newRequest = function() {
    return { type: 'GET', dataType: 'jsonp', data: { alt: 'json-in-script',  v: '2' } };
  };
  
  yt.getAllPlaylists = function(userId, callback) {
    
    var req = yt.newRequest();
    req.url = this.playlistsUrl.replace('{{userId}}', userId);
    
    req.success = function(response){
      var entry;
      $.each(response.feed.entry, function(i) {
        entry = response.feed.entry[i];
        entry.playlistId = entry.id.$t.split('playlist:')[1];
      });
      
      callback(response);
    };
    
    req.error = function(response){
      callback(response); 
    };
    
    $.ajax(req);
    
  };
  
  yt.getPlaylist = function(playlistId, callback) {
    
    var req = yt.newRequest();
    req.url = yt.playlistUrl.replace('{{playlistId}}', playlistId);
    
    req.success = function(response){
      callback(response); 
    };
    
    req.error = function(response){
      callback(response); 
    };
    
    $.ajax(req);
    
  };
  
})(jQuery);