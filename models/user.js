const mongoose = require.schema;
const schema = mongoose.schema;
const userSchema = new schema({
    name : String,
    age : Number,
    food : array  
});
const User = mongoose.model("User, userSchema");
moduke.exports = User;