import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useAppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom'; // Importa useHistory

const PublicScreen: React.FC = () => {
  const { state } = useAppContext()!;
  const history = useHistory(); 

  const handleLogout = () => {
    localStorage.removeItem('password');
    history.push('/login');
  };

  const itemStyle = {
    whiteSpace: 'pre-wrap', 
    overflow: 'hidden',   
    textOverflow: 'ellipsis', 
    maxWidth: '100%',      
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista</IonTitle>
          <IonButton slot="end" onClick={handleLogout}>Cerrar Sesión</IonButton> 
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {state.tasks.map((task, index) => (
            <IonItem key={index}>
              <IonLabel style={itemStyle}>{task}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PublicScreen;
