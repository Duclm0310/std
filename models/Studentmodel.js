var mongoose = require('mongoose');
var StudentSchema = mongoose.Schema({
    name : {type: String,
            required: [true, 'Name cannot be empty']
    },
    Dob: Date,
    GPA: {
        type: Number,
        min : [0, 'GPA cannot be negative'],
        max : 10
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    image: String
}
);
var StudentModel = mongoose.model('students', StudentSchema, 'student');
module.exports = StudentModel;