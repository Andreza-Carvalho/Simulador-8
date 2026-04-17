let movies = [];

class MoviesController {
  index(request, response) {
    return response.json(movies);
  }

  create(request, response) {
    const { title, description, director, year, genre, image, video } = request.body;

    const newMovie = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      director,
      year,
      genre,
      image,
      video
    };

    movies.push(newMovie);

    return response.status(201).json(newMovie);
  }
  
  update(request, response) {
    const { id } = request.params; 
    const { title, description, director, year, genre, image, video } = request.body; 

    const movieIndex = movies.findIndex(movie => movie.id === Number(id));

    if (movieIndex === -1) {
      return response.status(404).json({ message: "Filme não encontrado" });
    }

    movies[movieIndex] = {
      id: Number(id),
      title: title || movies[movieIndex].title,
      description: description || movies[movieIndex].description,
      director: director || movies[movieIndex].director,
      year: year || movies[movieIndex].year,
      genre: genre || movies[movieIndex].genre,
      image: image || movies[movieIndex].image,
      video: video || movies[movieIndex].video
    };

    return response.json(movies[movieIndex]);
  }

  delete(request, response) {
    const { id } = request.params;
    const movieIndex = movies.findIndex(movie => movie.id === Number(id));

    if (movieIndex === -1) {
      return response.status(404).json({ message: "Filme não encontrado" });
    }

    movies.splice(movieIndex, 1);

    return response.status(204).send();
  }
}

module.exports = MoviesController;