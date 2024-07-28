const httpStatus = require("http-status");
const Page = require('../models/PageModal');
const responseHandler = require('../helper/responseHandler')

class PageService {
    constructor() {
     
    }

    createPage = async (data) => {
        try {
              
                const page = new Page({"name":data.name.replace(/\s+/g, '') ,title:data.title,description:data.description,widgets:data.widgets});
               
                const res = await page.save()
                .then((result) => {
                   // console.log("result==",res)
                    return result;
                })
                .catch((e) => {
                    //logger.error(e);
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

    getPage = async () =>{
        try{
            
            const projection = {
                _id: 1,
                name:  1,
                description:1,
                title:1,
              };

            const getData =  await Page
            .find({},projection); // Assuming Page.find() returns a cursor
            return getData;
        } catch(e)
        {
            console.log("error",e)
        }
    }

    getPageByName = async (data) =>{
        try{
            //console.log("datasrvice===",data.name)
            const getData =  await Page
            .findOne({ name: data.name })
            .then((res)=>{
                console.log("res==",res)
                return res
            })
            .catch((e) =>{
                console.log("error while getting the page",e)
            })
            return getData
        } catch(e)
        {
            console.log("error",e)
        }
    }

    updatePage = async (data) => {
        try{
            
            const updateData = Page
            .updateOne({_id:data.id},{"name":data.name,title:data.title,description:data.description,widgets:data.widgets})
            .then((res)=>{
                
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

module.exports = PageService;