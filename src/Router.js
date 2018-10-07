import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';

const RouterComponent = () => {
  return (
    <Router>
    <Scene key="root" hideNavBar>
        <Scene key='kimlik'>
          <Scene key="loginScreen" component={LoginForm} title="Giriş Ekranı" initial />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => console.log("tıklandı")}
            rightTitle="Yeni"
            key="studentsList"
            component={StudentsList}
            title="Öğrenci Listesi"
          />
        </Scene>
    </Scene>
    </Router>
  );
};


export default RouterComponent;
