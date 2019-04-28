// menus-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const menus = new Schema({
    name: { type: String, required: true },
    items: { type: [], required: true },
    image: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('menus', menus);
};
