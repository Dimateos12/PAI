export default function mapujSlowo(slowo) {
    var slownik = {
        'admin': 'Panel Administratora',
        'profile': 'Panel użytkownika',
        'section': 'Posty',
        'post': 'Post',
        '1': 'Post nr 1',
        '2': 'Post nr 2',
        '3': 'Post nr 3',
        '4': 'Post nr 4',
        '5': 'Post nr 5',
        '6': 'Post nr 6',
        '7': 'Post nr 7',
        '8': 'Post nr 8',
        '9': 'Post nr 9',
        '10': 'Post nr 10',
        '11': 'Post nr 11',
        '12': 'Post nr 12',
        '13': 'Post nr 13',
        '14': 'Post nr 14',
        '15': 'Post nr 15',
        '16': 'Post nr 16',
        'checkout': 'Płatność'
    };

    // Sprawdź, czy słowo istnieje w słowniku
    if (slownik.hasOwnProperty(slowo)) {
        return slownik[slowo];
    } else {
        return 'Brak dopasowania';
    }
}