// Archivo para configuración inicial
// Ejecutar una sola vez para crear el usuario admin

import { crearUsuarioAdmin } from './authService';

// IMPORTANTE: Ejecutar esta función UNA SOLA VEZ para crear el usuario admin
export const configurarAdmin = async () => {
  try {
    const email = 'admin@lipenumi.com.co';
    const password = 'Lipenumi2025!'; // Cambiar por una contraseña segura
    
    const user = await crearUsuarioAdmin(email, password);
    console.log('Usuario admin creado exitosamente:', user.email);
    
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('El usuario admin ya existe');
    } else {
      console.error('Error creando usuario admin:', error);
    }
  }
};

// Para crear el admin, ejecuta esto en la consola del navegador:
// import { configurarAdmin } from './src/firebase/setup.js';
// configurarAdmin();
