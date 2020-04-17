const Users = require("../models/Users");
const bcrypt = require("bcrypt");

module.exports = {
    async create(request, response) {
        let { email, senha } = request.body;
        let user = await Users.findOne({ email });
        
        senha = senha.toString()
        
        const salt = bcrypt.genSaltSync(10);
        senha = bcrypt.hashSync(senha, salt);

        if (!user && (senha.length >= 8)) {
            user = await Users.create({
                email,
                senha,
            });
        }
        return response.json(user);
    },
    async read(request, response) {
        let { email, senha } = request.query;
        let user = await Users.findOne({ email });

        if(!user){
            return response.json(false);
        }

        return response.json(bcrypt.compareSync(senha, user.senha));
    }
};