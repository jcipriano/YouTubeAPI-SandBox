$(function(){
  
  $.yt.getAllPlaylists('R3DB71ND', function(response){
    
    console.log(response);
    
    $.yt.getPlaylist(response.feed.entry[2].playlistId, function(response){
      
      console.log(response);
      
    });
    
  });
  
});