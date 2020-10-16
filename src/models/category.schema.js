const { model, Schema } = require('mongoose');

const { dbTableNamesEnum } = require('../helpers');

const CategoryModel = new Schema({
  name: { type: String, required: true },
},
{
  timestamps: true,
});

module.exports = model(dbTableNamesEnum.CATEGORIES, CategoryModel);
