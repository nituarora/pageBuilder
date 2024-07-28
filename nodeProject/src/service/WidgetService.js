const httpStatus = require("http-status");
const Widget = require('../models/WidgetModal');
const Page = require('../models/PageModal');
const responseHandler = require('../helper/responseHandler')

class WidgetService {
    constructor() {
     
    }

    createWidget = async (data) => {
        try {
              
                const widget = new Widget({
                    title: data.title,
                    content: data.content,
                    contactNumber : data.contactNumber,
                    time : data.time
                });
               
                const res = await widget.save()
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

    getWidget = async () =>{
        try{
            const projection = {
                _id: 1,
                title:  '$widget.title',
                content:'$widget.content',
                contactNumber:'$widget.contactNumber',
                time:'$widget.time'
              };

            const getData =  await Page
            .find({},projection); // Assuming Page.find() returns a cursor
            return getData;
        } catch(e)
        {
            console.log("error",e)
        }
    }

    getWidgetData = async () => {
        try{
            const getData = await Widget
            .find()
            .then((res)=>{
                return res
            })
            .catch((e)=>{
                console.log("error")
            })
          
            return getData
        }catch(e){
            console.log("error",e)
        }
    }

    // getWidgetById = async (data) =>{
    //     try{
    //         const projection = {
    //             _id: 1,
    //             title: '$widget.title',
    //             content: '$widget.content',
    //             contactNumber: '$widget.contactNumber',
    //             time: '$widget.time'
    //           };
            
    //         const getData =  await Page
    //         .findById(data.id,projection)
    //         .then((res)=>{
    //             return res
    //         })
    //         .catch((e) =>{
    //             console.log("error while getting the widget",e)
    //         })
    //         return getData
    //     } catch(e)
    //     {
    //         console.log("error",e)
    //     }
    // }
    getWidgetById = async (data) =>{
        try{
            const getData =  await Widget
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

    // updateWidget = async (data) => {
    //     try{
          
    //         let updatedFields = {
    //             "title": data.title,
    //             "content": data.content,
    //             "contactNumber": data.contactNumber,
    //             "time": data.time,
                
    //         };
    //         const updatedDocument = await Page.findByIdAndUpdate(
    //             data.id, // _id of the document to update
    //             { $set: { widget: updatedFields } }, // Update the 'widget' field with the new data
    //             { new: true } // Return the updated document after the update
    //           );
        
    //           if (!updatedDocument) {
    //             throw new Error('Widget not found');
    //           }
    //           console.log("data===",updatedDocument)
    //           return updatedDocument;
    //     } catch(e){
    //         console.log("error",e)
    //     }
    // }

     updateWidget = async (data) => {
        try {
            let updatedFields = {
                "title": data.title,
                "content": data.content,
                "contactNumber": data.contactNumber,
                "time": data.time
            };
    
            const updatedDocument = await Widget.findByIdAndUpdate(
                data.id,
                { $set: updatedFields },
                { new: true }
            );
    
            if (!updatedDocument) {
                throw new Error('Widget not found');
            }
            console.log("Updated document:", updatedDocument);
            return updatedDocument;
        } catch (e) {
            console.log("Error updating widget:", e);
            throw e; // Rethrow the error to handle it outside
        }
    }
    
   
}

module.exports = WidgetService;