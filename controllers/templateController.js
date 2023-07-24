const Template = require("../models/Template");

const addTemplates = async (req, res) => {

    // Get the send in data off the request body
    
    const title = req.body.title; 
    const body = req.body.body; 
    
    // Create a template with it
    
    const template = await Template.create({
        title: title,
        body: body,
    });
    
    // Respond with the new Template
    
    res.json({ template: template });
    
}

const showAllTemplates = async (req, res) => {
    // find the templates

    const templates = await Template.find();

    // respond with the templates

    res.json({ templates: templates }); 
}

const showOneTemplate = async (req, res) => {
    // Get ID from the URL
    const templateID = req.params.id;
    
    // Find the template using the ID
    const template = await Template.findById(templateID);

    // Respond with the template
    res.json({ tempalte: template });
}

const updateTemplate = async (req, res) => {
    // Get the ID off the URL
    const templateID = req.params.id; 

    // Get the data off the request body
    const title = req.body.title; 
    const body = req.body.body; 

    // Find and update the record
    await Template.findByIdAndUpdate(templateID, {
        title: title,
        body: body,
    });

    const template = await Template.findById(templateID);
    
    // Respond with it
    res.json({ template: template });
}

const deleteTemplate = async (req, res) => {
    // Get ID off the URl
    const templateID= req.params.id;
    
    // Delete the record
    await Template.deleteOne({ _id: templateID });

    // Respond 
    res.json({ success: "Record Deleted" });
}

module.exports = {
    addTemplates: addTemplates, 
    showAllTemplates: showAllTemplates, 
    showOneTemplate: showOneTemplate, 
    updateTemplate: updateTemplate, 
    deleteTemplate: deleteTemplate
}