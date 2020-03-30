const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/compactbox', {
    useNewUrlParser: true
});

module.exports = mongoose;