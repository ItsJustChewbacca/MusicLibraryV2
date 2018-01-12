class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlayLists(playlist) {
    if(playlist instanceof Playlist) {
      this.playlists.push(playlist);
    }
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }
 addTrack(track) {
    if (track instanceof Track) {
      this.tracks.push(track);
    }
  }
  overallRating() {
    let sum = 0;
    this.tracks.forEach((element) => {
      sum += element.rating;
    });
    return sum / this.tracks.length;
  }
  totalDuration() {
    let totalLength = 0;
    this.tracks.forEach((element) => {
      totalLength += element.length;
    });
    return totalLength;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}
const library1 = new Library("hip-hop/rap library", "Luke");
const playlist1 = new Playlist("hip-hop");
const track1 = new Track("white-iverson", 5, 300);
const track2 = new Track("go flex", 4, 400);
const track3 = new Track("congratulations", 5, 300);
const track4 = new Track("goosebumps",5, 400);
const track5 = new Track("Location", 5, 400);

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.addTrack(track4);
playlist1.addTrack(track5);
library1.addPlayLists(playlist1);


 console.log("library1:", library1);
 console.log("------------------------------------------------------------------------------");
 console.log("playlist1:", playlist1);
 console.log("------------------------------------------------------------------------------");
 console.log("track1:", track1);
 console.log("------------------------------------------------------------------------------");
 console.log("playlist1.overallRating:", playlist1.overallRating());
 console.log("playlist1.totalDuration:", playlist1.totalDuration());
