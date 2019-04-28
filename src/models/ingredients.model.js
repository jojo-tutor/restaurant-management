// ingredients-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const ingredients = new Schema({
    name: { type: String, required: true, unique: true },
    restaurant_id: { type: Schema.Types.ObjectId, required: true, index: true, ref: 'Restaurant' },
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  ingredients.index({
    name: 1,
    restaurant_id: 1
  }, {
    unique: true
  });

  return mongooseClient.model('ingredients', ingredients);
};
