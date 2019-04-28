// categories-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const categories = new Schema({
    name: { type: String, required: true },
    restaurant_id: { type: Schema.Types.ObjectId, required: true, index: true, ref: 'Restaurant' },
    image: { type: String }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  categories.index({
    name: 1,
    restaurant_id: 1
  }, {
    unique: true
  });

  return mongooseClient.model('categories', categories);
};
