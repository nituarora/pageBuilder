import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { TextField, Button, Box,Autocomplete,Alert, Snackbar } from '@mui/material';
import {useCreatePageMutation,useGetSinglePageMutation,useUpdatePageMutation} from "./pageSlice"
import { useGetWidgetQuery } from "../widget/pageSlice";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const EditWidget = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        widgets: []
    });
    const [createNewPage, { isLoading :creating}] = useCreatePageMutation()
    const [getSinglePage, { isLoading:fetching }] = useGetSinglePageMutation()
    const [updatePage, { isLoading:updating }] = useUpdatePageMutation()
    const { data: widgets, isLoading:widgetFetch, isSuccess, isError, error } = useGetWidgetQuery();
    const [updateId, setUpdateId] = useState()
    const [widgetData, setWidgetData] = useState([])
    const [open, setOpen] = useState(false)
    const { id } = useParams();
    
    useEffect(()=>{
        if(id)
        {
            singlePage(id)   
        }
    },[id])
   // let arr =[]
    
    useEffect(()=>{
        
        if(widgets)
        {
              const data = widgets.data.map(widget => ({
                id: widget._id,
                title: widget.name
              }));
              setWidgetData(data);
        }
    },[widgets])

    const singlePage = async(id) =>{    
        try{
            let fetchedData = await getSinglePage({name:id}).unwrap()
            if(fetchedData)
            {
                setUpdateId(fetchedData.data._id)
                
                const  data = fetchedData.data;
               
                setFormData(prevState => ({
                    ...prevState,
                    id:data._id,
                    name:data.name,
                    title:data.title,
                    description:data.description,
                    widgets:data.widgets

                }));
            }   
        } catch(err)
        {
            console.log("Error while getting page data",err)
        }   
         
    }
  
    // Handle form field changes
    const handleChange = (e) => {
        console.log(e.target.name,"==value==",e.target.value)
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
            navigate('/pages');
        }
        else{
            try{
                const formDataSubmit = await createNewPage(formData).unwrap()
                setOpen(true)
                setFormData({
                    name: '',
                    title: '',
                    description: '',
                    widgets: []
                });  
                
            }
            catch(err)
            {
                console.log("error while submit the widget")
                throw err
            }
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try{
            formData['id'] = updateId
            const formDataSubmit = await updatePage(formData).unwrap()
            singlePage(id)
            setOpen(true)
        } catch(err)
        {
            console.log("error while updating the widget")
        } 
    }

    const handleAutocompleteChange = (event, value) => {
        //console.log("values..",event,"===",value)
        setFormData(prevState => ({
            ...prevState,
            widgets: value // Update selectedOptions array
        }));
    };

    const handleClose = () =>{
        setOpen(false)
    }

    return(
        <> 

            <Link to="/pages">
                <Button variant="outlined" size="medium">
                    Back
                </Button>
            </Link>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Action was successful!
                </Alert>
            </Snackbar>
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
                label="Page Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Title"
                variant="outlined"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
               
            />
            <TextField
                label="Page data"
                variant="outlined"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                multiline={true}
            />
                
            <Autocomplete
                multiple
                options={widgetData}
                getOptionLabel={(option) => option.title}
                value={formData.widgets}
                onChange={handleAutocompleteChange}
                isOptionEqualToValue={(option, value) => option.id === value.id} // Customize equality check
                renderInput={(params) => (
                    <TextField
                    {...params}
                    variant="outlined"
                    label="Select multiple options"
                    placeholder="Options"
                    />
                )}
                // /style={{ width: 300 }}
                fullWidth
            />
            <p className="note">*Note:Please Select one widget at a time</p>

            <Button type="submit" variant="contained" color="primary" disabled={creating || updating}>{id ? "Update" : "Submit"}
            </Button>
           
            </Box>
        </>
    )
}

export default EditWidget






