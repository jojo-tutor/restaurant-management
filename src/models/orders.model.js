// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    trx_date: { type: Date, required: true },
    items: { type: [], required: true, index: true },
    customer_id: { type: String, required: true },
    total_amount: { type: Number, required: true },
    restaurant_id: { type: Schema.Types.ObjectId, required: true, index: true, ref: 'Restaurant' },
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  return mongooseClient.model('orders', orders);
};
