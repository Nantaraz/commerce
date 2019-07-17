const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const UserSchema = mongoose.Schema({
    
    _id: {type:Number, required:true},
    nom: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    photo_profil:String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('profile', UserSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
