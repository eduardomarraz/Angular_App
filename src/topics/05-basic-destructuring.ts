
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sherran",
        year: 2015
    }
}

const{ song: anotherSong, songDuration: duration, details } = audioPlayer; //Gracias a esto
const{ author } = details;

// console.log('Song: ', anotherSong);  //para evitar poner audioPlayer.song
// console.log('Duration: ', duration); //para evitar poner audioPlayer.songDuration
// console.log('Author: ', audioPlayer.details.author); //manera sin abreviar
// console.log('Author: ', author); //manera sin abreviada

const [ p1, p2, trunks = 'Not found p3' ] : string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3', trunks );

export {};