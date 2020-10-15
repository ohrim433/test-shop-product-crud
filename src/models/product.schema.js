const { model, Schema } = require('mongoose');

const { dbTableNamesEnum } = require('../helpers');

const ProductModel = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  // category: [{ type: Schema.Types.ObjectId, ref: 'categories', required: true }], // TODO
  // supplier: { type: Schema.Types.ObjectId, ref: 'suppliers' }, // TODO
  expirationDate: { type: Date, default: null },
  description: { type: String, required: true },
  measure: { type: String, required: true },
  quantity: { type: String, default: 0 },
  pictures: [{ type: String }],
  docs: [{ type: String }],
},
{
  timestamps: true,
});

module.exports = model(dbTableNamesEnum.PRODUCT, ProductModel);
