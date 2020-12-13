const mongoose = require('mongoose')

mongoose.model("ID", {

    idno: {
        type: Number,
        require: true
    }

});