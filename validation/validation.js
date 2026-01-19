import Joi from "joi";

export const registerSchema = Joi.object({
    email:Joi.string().email().min(5).required().messages({"message":"champs manquant"}),
    password:Joi.string().min(6).max(30).required(),
    confirmPassword:Joi.string().min(6).max(30).required()
})

export const loginSchema = Joi.object({
    email:Joi.string().email().min(5).required().messages({"message":"champs manquant"}),
    password:Joi.string().min(6).max(30).required()
})