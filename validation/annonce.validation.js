import Joi from "joi";

export const annonceSchema = Joi.object({
    titre:Joi.string().min(3).required(),
    description:Joi.string().min(10).max(2000).required()
})