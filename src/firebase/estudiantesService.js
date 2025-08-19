import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy 
} from 'firebase/firestore';
import { db } from './config';

const COLLECTION_NAME = 'estudiantes';

// Obtener todos los estudiantes
export const obtenerEstudiantes = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('orden', 'asc')
    );
    const querySnapshot = await getDocs(q);
    const estudiantes = [];
    
    querySnapshot.forEach((doc) => {
      estudiantes.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return estudiantes;
  } catch (error) {
    console.error('Error obteniendo estudiantes:', error);
    throw error;
  }
};

// Obtener estudiantes por período
export const obtenerEstudiantesPorPeriodo = async (periodo) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('periodo', '==', periodo)
    );
    const querySnapshot = await getDocs(q);
    const estudiantes = [];
    
    querySnapshot.forEach((doc) => {
      estudiantes.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    // Ordenar manualmente por orden
    estudiantes.sort((a, b) => (a.orden || 0) - (b.orden || 0));
    
    return estudiantes;
  } catch (error) {
    console.error('Error obteniendo estudiantes por período:', error);
    throw error;
  }
};

// Crear nuevo estudiante
export const crearEstudiante = async (estudiante) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...estudiante,
      fechaCreacion: new Date().toISOString()
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error creando estudiante:', error);
    throw error;
  }
};

// Actualizar estudiante
export const actualizarEstudiante = async (id, datosActualizados) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...datosActualizados,
      fechaActualizacion: new Date().toISOString()
    });
    
    return true;
  } catch (error) {
    console.error('Error actualizando estudiante:', error);
    throw error;
  }
};

// Eliminar estudiante
export const eliminarEstudiante = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return true;
  } catch (error) {
    console.error('Error eliminando estudiante:', error);
    throw error;
  }
};
