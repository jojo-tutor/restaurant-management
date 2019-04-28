// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    trx_date: { type: Date, required: true },
    customer_id: { type: String, required: true },
    total_amount: { type: Number, required: true },
    restaurant_id: { type: Schema.Types.ObjectId, required: true, index: true, ref: 'Restaurant' },
    items: [
      {
        item_id: { type: Schema.Types.ObjectId, ref: 'Item' },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        sub_total: { type: Number, required: true },
      }
    ],
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

  return mongooseClient.model('orders', orders);
};
