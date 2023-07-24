// Load environment variables

if(process.env.PORT != "production") {
    require("dotenv").config();
}

// Import Dependencies

const express = require("express");
const connectToDb = require("./config/connectToDb");
const templateController = require("./controllers/templateController");

// Create an expres app

const app = express(); 

// Configure express app

app.use(express.json());

// Connect to Database

connectToDb();

// Routing 

// C
app.post("/add-template", templateController.addTemplates);

// R
app.get("/fetch-templates", templateController.showAllTemplates);

app.get("/fetch-template/:id", templateController.showOneTemplate)

// U
app.put("/update-template/:id", templateController.updateTemplate)

// D
app.delete("/delete-template/:id", templateController.deleteTemplate);


app.listen(process.env.PORT);