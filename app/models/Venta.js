const mongoose = require('mongoose');
const VentaSchema = new mongoose.Schema({

    
      nombre:{
        type: String,
        required: true
      },
      nit:{
        type: String,
        required: true
      },
      direccion:{
        type: String,
        required: true
      },
      producto:{
        type: Array,
        required: true
      },
      total:{
        type: Number,
        required: true
      }

});

const Venta = mongoose.model('Venta',VentaSchema);
 
module.exports = Venta;