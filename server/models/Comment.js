var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movie',
    index: true,
    required: true
  }
});

// Export the model
module.exports = mongoose.model('comment', CommentSchema);
