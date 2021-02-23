import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ProfileContainer from '../components/ProfileContainer';
import './Tab1.css';


const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>

          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Profile" />
        <ProfileContainer name=""/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
