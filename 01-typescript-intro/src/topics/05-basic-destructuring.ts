interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: string;
}

const audioPlayer1: AudioPlayer = {
    audioVolume: 50,
    songDuration: 3.21,
    song: "Control",
    details: {
        author: "Zoe Wees",
        year: "2020"
    }
}

// Destructuring Objects

// const { author: author1, year: year1 } = audioPlayer1.details;
// const{ audioVolume: vol1, songDuration: duration1, song: song1 } = audioPlayer1;

// console.log(vol1, duration1, song1, author1, year1);

// Destructuring Arrays

const hxhCharacters: string[] = ['Gon', 'Killua', 'Kurapika', 'Leorio'];

const [first, second, third, fourth, fifth = 'Not found'] = hxhCharacters;

console.log(first, second, third, fourth, fifth);