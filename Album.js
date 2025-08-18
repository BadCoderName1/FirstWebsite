

class Album {
    constructor(
        name,
        year,
        tracks,
        genre
    ) {
        this.name = name;
        this.year = year;
        this.tracks = tracks;
        this.genre = genre;
    }
    changeName(name) {
        this.name = name;
    }
    changeYear(year) {
        this.year = year;
    }
    changeTracks(tracks) {
        this.tracks = tracks;
    }
    changeGenre(genre) {
        this.genre = genre;
    }
}

export default Album;