import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userRol?: 'cliente' | 'admin';
    }
  }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(403).json({ message: 'Acceso denegado, token requerido.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, rol: 'cliente' | 'admin' };
    req.userId = decoded.id;
    req.userRol = decoded.rol;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.userRol === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'No tienes permisos de administrador.' });
    }
};