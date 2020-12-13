const mongoose = require("mongoose")


mongoose.model('Track', {
    idno:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    }
});
