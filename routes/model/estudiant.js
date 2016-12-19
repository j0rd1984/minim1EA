var mongoose = require('mongoose');

module.exports = mongoose.model('Estudiant', {
    nom: String,
    direccio: String,
    asignatures: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Assignatura'
    }],
    quantityest: 0,
    telefons: {
        casa: String,
        feina: String   }
});