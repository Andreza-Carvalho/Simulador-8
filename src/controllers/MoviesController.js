const Movie = require('../models/movie'); 

class MoviesController {
  // LISTAR (GET)
  async index(request, response) {
    const movies = await Movie.find(); 
    return response.json(movies);
  }

  // CRIAR (POST)
  async create(request, response) {
    const { title, description, director, year, genre, image, video } = request.body;

    // Salva no banco. O Mongoose gera o ID sozinho!
    const newMovie = await Movie.create({
      title, description, director, year, genre, image, video
    });

    return response.status(201).json(newMovie);
  }

  // ATUALIZAR (PUT)
  async update(request, response) {
    const { id } = request.params; // O ID agora é aquele código do MongoDB
    const data = request.body;

    // Busca pelo ID e atualiza. { new: true } retorna o filme já modificado
    const updatedMovie = await Movie.findByIdAndUpdate(id, data, { new: true });

    return response.json(updatedMovie);
  }

  // DELETAR (DELETE)
  async delete(request, response) {
    const { id } = request.params;
    await Movie.findByIdAndDelete(id); // Remove do banco permanentemente
    return response.status(204).send();
  }
}

module.exports = MoviesController;