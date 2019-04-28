// items-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const items = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    good_for: { type: String, required: true },
    selling_price: { type: String, required: true },
    original_price: { type: String, required: true },
    is_available: { type: String, required: true },
    description: { type: String, required: true },
    categories: { type: [], required: true },
    ingredients: { type: [], required: true },
    nutritions: { type: [], required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('items', items);
};
