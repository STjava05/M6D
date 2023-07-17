const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    
    category: {
        type: String,
        required: true,
        
    },
    title: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
       
    },
    readTime: {
       value: {
        type: Number,
       
        
    },
    unit: {
        type: String,
       
    }
    },
    author: {
        name: {
            type: String,
            required: true,
           
        },
        avatar: {
            type: String,
            required: true,
            
        }
    },
    content: {
        type: String,
        required: true,
        
    },
   



},
{timestamps: true,strick: true}
);

module.exports = mongoose.model('user', userSchema, 'user');

