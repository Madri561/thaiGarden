const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Serve the index.html file
app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint to get the Google Maps URL
app.get("/map", (req, res) => {
  const apiKey = "AIzaSyBA_YseNz-fwIDmOrBRm_sFE-lYGLqLAt8";
  const coordinates = "33.216490781025186,-117.2717647177939";
  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${coordinates}&zoom=18&maptype=satellite`;
  res.json({ url });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
