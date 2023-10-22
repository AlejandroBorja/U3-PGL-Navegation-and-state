import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import { Redirect } from 'react-router-dom';

const validUsername = 'a'; 
const validPassword = 'a'; 

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername === validUsername && storedPassword === validPassword) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setLoggedIn(false);
  };

  if (loggedIn) {
    return <Redirect to="/private" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!loggedIn ? (
          <>
            <IonInput
              placeholder="Username"
              value={username}
              onBlur={(e) => {
                const newValue = e.target.value; 
                setUsername(newValue?.toString() || ''); 
              }}
            />
            <IonInput
              placeholder="Password"
              type="password"
              value={password}
              onBlur={(e) => {
                const newValue = e.target.value;
                setPassword(newValue?.toString() || ''); 
              }}
            />
            <IonButton onClick={handleLogin}>Login</IonButton>
          </>
        ) : null}
      </IonContent>
    </IonPage>
  );
};

export default LoginScreen;

