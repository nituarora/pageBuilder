const httpStatus = require("http-status");
const Template = require('../models/TemplateModal');
const responseHandler = require('../helper/responseHandler')

class TemplateService {
    constructor() {
     
    }

    createTemplate = async (data) => {
        try {
              
                const template = new Template({
                    name: data.name,
                    file: data.file,
                    templateData : data.templateData,
                    widgetId : data.widgetId
                });
               
                const res = await template.save()
                .then((result) => {
                    return result;
                })
                .catch((e) => {
                    console.log("error",e);
                });  
                return res          
            
        } catch (e) {
            return responseHandler.returnError(
                httpStatus.BAD_REQUEST,
                "Something went wrong!"
            );
        }
    };

    getTemplate = async () =>{
        try{

            const getData =  await Template
            .find()
            .then((res)=>{
                return res
            })
            .catch((e) =>{
                console.log("error while getting the template",e)
            })
            return getData
        } catch(e)
        {
            console.log("error",e)
        }
    }

    getTemplateById = async (data) =>{
        try{
            console.log("srvc data===",data)
            const getData =  await Template
            .findById(data.id)
            .then((res)=>{
                return res
            })
            .catch((e) =>{
                console.log("error while getting the template",e)
            })
            return getData
        } catch(e)
        {
            console.log("error",e)
        }
    }

    updateTemplate = async (data) => {
        try{

            const updateData = Template
            .updateOne({_id:data.id},{"name":data.name,"file":data.file,"templateData":data.templateData,"widgetId":data.widgetId})
            .then((res)=>{
                console.log("res==",res)
                return res
            }) .catch((e)=>{
                console.log("error",e)
            })
            return updateData;
        } catch(e){
            console.log("error",e)
        }
    }

   
}

module.exports = TemplateService;