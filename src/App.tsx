import React from 'react';
import { IonApp,IonIcon,IonLabel,IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact  } from '@ionic/react';
import { AppContextProvider } from './context/AppContext';
import { IonReactRouter } from '@ionic/react-router';
import {  Redirect,Route } from 'react-router-dom';
import PublicScreen from './components/PublicScreen';
import PrivateScreen from './components/PrivateScreen';
import LoginScreen from './components/LoginScreen';
import { list, person } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables
import "./theme/variables.css";
import "./styles/App.css"; */

setupIonicReact();


const App: React.FC = () => (
  <IonApp>
    <AppContextProvider>
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/public" component={PublicScreen} exact />
          <Route path="/private" component={PrivateScreen} exact />
          <Route exact path="/" render={() => <Redirect to="/public" />} />
          <Route path="/login" component={LoginScreen} exact />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="public" href="/public">
            <IonIcon icon={list} />
            <IonLabel>Publico</IonLabel>
          </IonTabButton>

          <IonTabButton tab="login" href="/login">
            <IonIcon icon={person} />
            <IonLabel>Privado</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </AppContextProvider>
  </IonApp>
);

export default App;

