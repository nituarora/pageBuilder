const httpStatus = require('http-status');
const PageService = require('../service/PageService');

class PageController {
    constructor() {
        this.PageService = new PageService();
    }

    createPage = async (req, res) => {
        const page = await this.PageService.createPage(req.body);
  
        res.status(200).send({ status: 200, message: "success", data:[page] });
    };

    getPage = async(req,res) => {
       
        const page = await this.PageService.getPage();

        res.status(200).send({status:200,message:"success",data:page})
    }

    getPageByName = async(req,res) => {
        console.log("page get",req.body)
        
        const page = await this.PageService.getPageByName(req.body);

        res.status(200).send({status:200,message:"success",data:page})
    }

    updatePage = async(req,res) => {
        const page = await this.PageService.updatePage(req.body);
        res.status(200).send({status:200,message:"Data UPdate Successfully",})
    }

}

module.exports = PageController;