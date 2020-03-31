const Devices = require("../models/Devices");

module.exports = {
    async create(request, response) {
        const {identificacao, comodo} = request.body;
        const estado = false;
        let device = await Devices.findOne({ identificacao });
        
        if (!device) {
            device = await Devices.create({
                identificacao,
                comodo,
                estado,
            });
        }
        return response.json(device);
    },
    async read(request, response) {
        const devices = await Devices.find();
        return response.json(devices);
    },
    async update(request, response) {
        const id = request.query.id;

        console.log(id);

        let {identificacao, comodo, estado} = await Devices.findOne({ identificacao: id });

        if(estado === false){
            estado = true;
        }else if(estado === true){
            estado = false;
        }

        const device = await Devices.updateOne({identificacao}, {
            $set: {
                identificacao,
                comodo,
                estado
            }
        })
        return response.json(device);
    }
};