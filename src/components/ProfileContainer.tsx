import './ProfileContainer.css';

import { useAuth0 } from "@auth0/auth0-react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonRow } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const ProfileContainer: React.FC<ContainerProps> = ({ name }) => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  if(isAuthenticated){
    return (
      <div>
      <br /><br /> <br />

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{user.name}</IonCardSubtitle>
            <IonCardTitle>Profile</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            First Name: {user.given_name} <br />
            Last Name: {user.family_name}
      </IonCardContent>
      </IonCard>

    </div>
    );
  }else{
    return (
        <div>
        </div>
    );
  }

};

export default ProfileContainer;
