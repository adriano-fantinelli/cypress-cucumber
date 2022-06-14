import Joi from 'joi'

const activitiesSchema = Joi.array().items(
  Joi.object({
    "id": Joi.number().required(),
    "title": Joi.string().required(),
    "dueDate": Joi.string().required(),
    "completed": Joi.boolean().required()
  })
)
export default activitiesSchema
