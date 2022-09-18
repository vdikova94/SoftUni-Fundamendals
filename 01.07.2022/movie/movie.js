function movies(input) {
    let movieArray = [];

    input.forEach((element) => {

        if (element.includes("addMovie")) {
            let movie = element.replace('addMovie ', '');
            movieArray.push({ name: movie });
        } else if (element.includes("directedBy")) {
            let [name, director] = element.split(' directedBy ');
            movieArray.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (element.includes("onDate")) {
            let [name, date] = element.split(' onDate ');
            movieArray.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    });

    movieArray.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])