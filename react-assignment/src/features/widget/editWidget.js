import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import {useCreateWidgetMutation,useGetSingleWidgetMutation,useUpdateWidgetMutation} from "./pageSlice"
import { Link } from "react-router-dom";

const EditWidget = () => {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        contactNumber: '',
        time: ''
    });
    const [createNewWidget, { isLoading :creating}] = useCreateWidgetMutation()
    const [getSingleWidget, { isLoading:fetching }] = useGetSingleWidgetMutation()
    const [updateWidget, { isLoading:updating }] = useUpdateWidgetMutation()
    const [updateId, setUpdateId] = useState()
    const { id } = useParams();
    
    useEffect(()=>{
        if(id)
        {
            singleWidget(id)  
            setUpdateId(id)
        }
       
    },[id])

    const singleWidget = async(id) =>{    
        try{
            let fetchedData = await getSingleWidget({id:id}).unwrap()
            if(fetchedData)
            {
                const  data = fetchedData.data;
            
                setFormData(prevState => ({
                    ...prevState,
                    ...data
                }));
            }   
        } catch(err)
        {
            console.log("Error while getting widget data",err)
        }   
         
    }
  
    // Handle form field changes
    const handleChange = (e) => {
        //console.log(e.target.name,"==value==",e.target.value)
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async(data) => {
        data.preventDefault()
        if(updateId)
        {
            handleUpdate(data)
        }
        try{
            const formDataSubmit = await createNewWidget(formData).unwrap()
       
            setFormData({
                title: '',
                content: '',
                contactNumber: '',
                time: ''
            });  
        }
        catch(err)
        {
            console.log("error while submit the widget")
            throw err
        }
        
    }

    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try{
            formData['id'] = updateId
            const formDataSubmit = await updateWidget(formData).unwrap()
            singleWidget(updateId);
            
        } catch(err)
        {
            console.log("error while updating the widget")
        } 
    }

    return(
        <> 
        <div className="backBtn">
            <Link to="/widget">
                <Button variant="outlined" size="medium">Back</Button>
            </Link>
        </div>
        
            <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 400,
                margin: 'auto',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
            }}
            onSubmit={handleSubmit}
            >
            <TextField
                label="Title"
                variant="outlined"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Content"
                variant="outlined"
                name="content"
                value={formData.content}
                onChange={handleChange}
                fullWidth
                multiline={true}
            />
            <TextField
                label="Contact Number"
                variant="outlined"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Time"
                variant="outlined"
                name="time"
                value={formData.time}
                onChange={handleChange}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" disabled={creating || updating}>{id ? "Update" : "Submit"}
            </Button>
           
            
            </Box>
        </>
    )
}

export default EditWidget






