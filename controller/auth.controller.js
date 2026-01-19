import argon2 from 'argon2'
import { userModel } from "../models/user.model.js";
import {registerSchema, loginSchema } from '../validation/validation.js';

export const register = async (req, res) => {
    try {
        const {error, value} = registerSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: "validation échouée",
                error: error.details[0].message
            })
        }



        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message:`Champs requis manquants`})
        };

        const existingUser = await userModel.findByEmail(email);
        if (existingUser) {
            return res.status(409).json({message:`Email existant`})
        };

        const passwordHash = await argon2.hash(password);

        await userModel.create(email, passwordHash);

        res.status(201).json({message:`Utilisateur enregistré`});
    } catch (error) {
        res.status(500).json({error:`erreur serveur`})
    }
};

export const login = async (req, res) => {
    try{
        const {error, value} = loginSchema.validate(req.body);

        if(error) {
            return res.status(400).json({
                message:"validation échouée",
                error: error.details[0].message
            });
        }

        const {email,password} = req.body;

        const user = await userModel.findByEmail(email);

        if(!user) {
            return res.status(401).json({message: "id ou mdp incorrect"})
        }

        res.status(200).json({message: "bonne co",
            user: {id: user.id, email:user.email}
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"erreur du serveur", message:error.message})
    }
}