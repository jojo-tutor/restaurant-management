// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    trx_date: { type: Date, required: true },
    items: { type: [], required: true },
    customer_id: { type: String, required: true },
    total_amount: { type: Number, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('orders', orders);
};
