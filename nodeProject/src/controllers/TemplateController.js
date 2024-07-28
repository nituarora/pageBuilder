const httpStatus = require('http-status');
const TemplateService = require('../service/TemplateService');

class TemplateController {
    constructor() {
        this.TemplateService = new TemplateService();
    }

    createTemplate = async (req, res) => {
        const template = await this.TemplateService.createTemplate(req.body);
       
        let message = template?.statusCode == 200 ? "success" : template?.response?.message
        let status = template?.statusCode == 200 ? 200 : template.statusCode
        res.status(200).send({ status: 200, message: "success", data:[template] });
    };

    getTemplate = async(req,res) => {
       
        const template = await this.TemplateService.getTemplate();

        res.status(200).send({status:200,message:"success",data:template})
    }

    getTemplateById = async(req,res) => {
        const template = await this.TemplateService.getTemplateById(req.body);

        res.status(200).send({status:200,message:"success",data:template})
    }

    updateTemplate = async(req,res) => {
        const template = await this.TemplateService.updateTemplate(req.body);
        res.status(200).send({status:200,message:"Data UPdate Successfully",})
    }

}

module.exports = TemplateController;