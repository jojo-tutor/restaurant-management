// menus-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const menus = new Schema({
    name: { type: String, required: true },
    items: { type: [], required: true, index: true },
    image: { type: String }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  return mongooseClient.model('menus', menus);
};
