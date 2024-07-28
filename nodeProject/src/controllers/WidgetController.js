const httpStatus = require('http-status');
const WidgetService = require('../service/WidgetService');

class WidgetController {
    constructor() {
        this.widgetService = new WidgetService();
    }

    createWidget = async (req, res) => {
        const widget = await this.widgetService.createWidget(req.body);
       
        let message = widget?.statusCode == 200 ? "success" : widget?.response?.message
        let status = widget?.statusCode == 200 ? 200 : widget.statusCode
        res.status(200).send({ status: 200, message: "success", data:[widget] });
    };

    getWidget = async(req,res) => {
       
        const widget = await this.widgetService.getWidget();  
        res.status(200).send({status:200,message:"success",data:widget})
    }

    getWidgetData = async(req,res) => {
       
        const widget = await this.widgetService.getWidgetData();  
        res.status(200).send({status:200,message:"success",data:widget})
    }

    getWidgetById = async(req,res) => {
    
        const widget = await this.widgetService.getWidgetById(req.body);
        res.status(200).send({status:200,message:"success",data:widget})
    }

    updateWidget = async(req,res) => {
        console.log("req.body",req.body)
        const widget = await this.widgetService.updateWidget(req.body);
        res.status(200).send({status:200,message:"Data UPdate Successfully",})
    }

}

module.exports = WidgetController;