const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/map", (req, res) => {
  const key = "AIzaSyA54gLUTN-8tqt3prTp_3rMYHhKf9xxFZo";
  const coordinates = "33.216490781025186,-117.2717647177939";
  const url = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${coordinates}&zoom=18&maptype=satellite`;
  res.json({ url });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


//       });
//     }
//   });
// });
