const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({

    
      nombre:{
        type: String,
        required: true
      },
      categoria:{
        type: String,
        required: true
      },
      precio:{
        type: String,
        required: true 
      },
      stock:{
        type: Number,
        required: true 
      },
      urlmg:{
        type: String,
        required: false 
      }

});

const Producto = mongoose.model('Producto',ProductoSchema);
 
module.exports = Producto;