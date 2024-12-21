import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true ,
    validpass: {
      validator: passwordValidator,
      message: 'password must password to be at least 8 characters long and contains at least one characters, digit, and special character.', 
    }
  }
});


const passwordValidator = (password) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return regex.test(password); 
};
UserSchema.path("validpass").validate(passwordValidator);
export default mongoose.model('User', UserSchema);
