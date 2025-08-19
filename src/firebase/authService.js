import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from './config';

// Iniciar sesión
export const iniciarSesion = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

// Cerrar sesión
export const cerrarSesion = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    throw error;
  }
};

// Crear usuario admin (solo para configuración inicial)
export const crearUsuarioAdmin = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error creando usuario admin:', error);
    throw error;
  }
};

// Observar cambios de autenticación
export const observarAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Verificar si hay usuario autenticado
export const obtenerUsuarioActual = () => {
  return auth.currentUser;
};
