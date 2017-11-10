const mongoose = require('mongoose');

class AlbumApi {
  createAlbum(album) {
    return new Promise((resolve, reject) => {
      mongoose.model('Album').create(album, (error, album) => {
      error ? reject(error) : resolve(album);
      });
    });
  }
}

module.exports = new AlbumApi();