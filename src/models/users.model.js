// users-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true },
    address: { type: String },
    restaurant_id: { type: String },
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
