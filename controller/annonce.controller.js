import { annonceModel } from "../models/annonce.model.js";
import { annonceSchema } from "../validation/annonce.validation.js";

export const createAnnonce = async (req,res) => {
    try {
        const {error, value} = annonceSchema.validate(req.body)
        if(error) {
            return res.status(400).json({message:'erreur lors', error:error.details[0].message})
        }

        const {titre, description} = req.body;

        await annonceModel.create(titre,description);
        res.status(201).json({message:"annonce crée"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erreur du serveur', message : error.message})
    }
}

export const afficheAnnonce = async (req,res) => {
    try {
        const annonces = await annonceModel.affiche()
        res.status(201).json({message:'liste des annonces',data: annonces})
    } catch (error) {
        
    }
}


