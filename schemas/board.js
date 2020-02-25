const Joi = require('joi');
const MongooseSchema = require('mongoose').Schema;

const BoardValidationSchema = Joi.object({
  name: Joi.string(),
  color: Joi.string(),
  description: Joi.string(),
  createdAt: Joi.dateTime(),
});

const BoardMongooseSchema = new MongooseSchema({
  id: String,
  name: String,
  color: String,
  description: String,
  createdAt: Date,
});


module.exports = {
  validationSchema: BoardValidationSchema,
  mongooseSchema: BoardMongooseSchema,
};
