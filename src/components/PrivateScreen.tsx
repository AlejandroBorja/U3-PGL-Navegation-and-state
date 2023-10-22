import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import { useAppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom'; 

const PrivateScreen: React.FC = () => {
  const { state, dispatch } = useAppContext()!;
  const [newTask, setNewTask] = useState('');
  const history = useHistory(); 

  const addTask = () => {
    console.log('Añadido:', newTask);
    if (newTask) {
      dispatch({ type: 'ADD_TASK', task: newTask });
      setNewTask('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('password');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Introducir tarea</IonTitle>
          <IonButton slot="end" onClick={handleLogout}>Cerrar Sesión</IonButton> 
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonInput
          placeholder="New Task"
          value={newTask}
          onBlur={(e) => {
            const newValue = e.target.value; 
            setNewTask(newValue?.toString() || ''); 
          }}
        />
        <IonButton type="submit" onClick={addTask}>Añadir Tarea</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PrivateScreen;

