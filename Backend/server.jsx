const express = require("express");
const cors = require("cors");

const District = require('./db/connetion'); // Your Mongoose model

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: "server started"
    })
})

// Route to Get District
app.get('/districts/:districtName', async (req, res) => {
    let { districtName } = req.params;

    // console.log(districtName);
    
    // Ensure districtName is a string and not empty
    if (!districtName || typeof districtName !== 'string') {
        return res.status(400).json({ err: 'Invalid or empty district name' });
    }

    // Convert to string and trim any whitespace
    districtName = String(districtName).trim();

    // console.log('Searching for districtName:', districtName); 

    try {
        // Query with regex (case-insensitive)
        const district = await District.findOne({
            districtName: { $regex: districtName, $options: 'i' }  // Case-insensitive search without anchors
        });

        if (!district) {
            return res.status(404).json({ err: 'District Not Found' });
        }
        res.json(district);
    } catch (error) {
        res.status(500).json({ err: 'Server error' });
    }
});

    







// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
