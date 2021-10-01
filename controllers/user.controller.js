const { getRut } = require('../models/user');

const perfil = async(req, res) => {

    try {
        let mail = req.query.mail;
        let rut
        if(!mail) throw new Error('No existe el parámetro mail');

        if(mail){
            rut = await getRut(mail);
            if(!rut.rows[0].SPRIDEN_ID){
                throw new Error('Correo no se encuentra asociado a ningún rut en banner')
            }
            rut = rut.rows[0].SPRIDEN_ID;
        } else {
            rut = '';
        }

        return res.status(200).json({Data:{
            Rut:rut,
            Mail:mail
        }});



    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

module.exports = { perfil }