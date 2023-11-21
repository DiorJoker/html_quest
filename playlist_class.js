

class Playlist{

  constructor(name){
    this.name = name;
    this.songs = [];
  }
  addSong(song){
    this.songs.push(song);
  }
  play(){
    return this.songs[0]
  }
  removeSong(target){
    let array = [1, 2, 3, 4, 5];
    this.songs = this.songs.filter(function(item) {
      return item !== target;
    });

  }
}



let myPlaylist = new Playlist('お気に入りリスト');
myPlaylist.addSong('Lemon');
myPlaylist.addSong('花束');
console.log(myPlaylist.play()); // 再生中: Lemon
myPlaylist.removeSong('Lemon');
console.log(myPlaylist.play()); // 再生中：花束
