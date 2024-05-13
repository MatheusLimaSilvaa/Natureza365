import app from './app';
import SwaggerUI from 'swagger-ui-express';
import swaggerDocs from "./swagger.json"; 

app.use("/documentos", SwaggerUI.serve, SwaggerUI.setup(swaggerDocs))

const port = process.env.PORT_API;
app.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta ${port}`);
});
