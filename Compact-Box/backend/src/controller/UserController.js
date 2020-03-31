const Users = require("../models/Users");

module.exports = {
    async create(request, response) {
        let { email, senha } = request.body;
        let user = await Users.findOne({ email });
        
        senha = senha.toString()

        if (!user && (senha.length >= 8)) {
            user = await Users.create({
                email,
                senha
            });
        }
        return response.json(user);
    }
};