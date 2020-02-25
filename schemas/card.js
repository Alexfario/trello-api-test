const Joi = require('joi');
const MongooseSchema = require('mongoose').Schema;

const CardValidationSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
  createdAt: Joi.dateTime(),
  estimate: Joi.number(),
  status: Joi.number(),
  dueDate: Joi.date().iso(),
  labels: Joi.array().items(Joi.string()),
});

const CardMongooseSchema = new MongooseSchema({
  id: String,
  name: String,
  description: String,
  createdAt: Date,
  estimate: Number,
  status: Number,
  dueDate: Date,
  labels: [String],
});


module.exports = {
  validationSchema: CardValidationSchema,
  mongooseSchema: CardMongooseSchema,
};
