// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    address: { type: String },
    role: { type: String, required: true },
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  return mongooseClient.model('users', users);
};
