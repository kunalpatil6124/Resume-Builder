const express = require('express');
const cors = require('cors');
// const puppeteer = require('puppeteer'); // Uncomment for backend PDF generation

const app = express();
app.use(cors());
app.use(express.json());

// Optional PDF Generation Endpoint
app.post('/api/generate-pdf', async (req, res) => {
  try {
    const resumeData = req.body;
    
    // In the future: 
    // 1. Render resumeData into HTML string
    // 2. Launch Puppeteer
    // 3. Set content and await pdf buffer
    // 4. Return buffer
    
    res.status(200).json({ message: "Backend PDF generation is ready to be fully implemented." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend Optional API running on port ${PORT}`);
});
