import express, { type Request, type Response, type  NextFunction } from 'express';

const app = express();
const port = 3000;

// Middleware de autenticación
const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  // Verificamos si el encabezado Authorization está presente y es correcto
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader === 'Bearer token123') {
    next();  // Si el token es correcto, dejamos pasar la solicitud
  } else {
    res.status(401).send('No autorizado');  // Si no es válido, respondemos con 401
  }
};

// Ruta pública
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor web en ejecución');
});

// Ruta protegida
app.get('/protegida', checkAuth, (req: Request, res: Response) => {
  res.send('Ruta protegida: Servidor web en ejecución');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
