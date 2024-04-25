
    const express = require('express');
    const path = require('path');
    const bodyParser = require ('body-parser');
    const mainRoute = require('./routes/main');
    const gamesRouter = require('./routes/games'); 
    const cors = require ("./middlewares/cors");
     
     const PORT = 3000;
     const app = express();
    
     app.use(
      express.static(path.join(__dirname, 'public')),
      bodyParser.json(),
      cors,
      mainRoute,
      gamesRouter
    ); 

     app.listen(PORT, () => {
       console.log(`Server is running at PORT http://localhost:${PORT}`);
     })
     
          // Теперь клиент имеет доступ только к публичным файлам
   
     