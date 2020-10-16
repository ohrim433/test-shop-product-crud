const joi = require('joi').extend(require('@hapi/joi-date'));

module.exports = joi.object({
  title: joi.string().trim().min(3).max(100),
  price: joi.number().min(0.01),
  category: joi.array().items(joi.string().trim()),
  supplier: joi.string().trim(),
  expirationDate: joi.date().iso(),
  description: joi.string().trim().min(3).max(9999),
  measure: joi.string().trim(),
  quantity: joi.number(),
  pictures: joi.array().items(joi.string().trim()),
  docs: joi.array().items(joi.string().trim()),
});
