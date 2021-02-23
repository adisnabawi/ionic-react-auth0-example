import './ExploreContainer.css';

import { useAuth0 } from "@auth0/auth0-react";
import { IonButton, IonImg, IonThumbnail, IonCol, IonRow, IonGrid, IonLabel, IonItem, IonContent } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if(isAuthenticated){
    return (
      <div>
      <IonGrid>
          <IonRow>
            <IonCol size="3">

              <IonItem>
              <IonThumbnail>
                <IonImg src={user.picture}  />
                </IonThumbnail>
                </IonItem>
            </IonCol>
            <IonCol>
            <IonLabel>
            <h2>Hello {user.name}</h2>
            <p> {user.email} </p>
            </IonLabel>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </IonButton>
              </IonCol>
          </IonRow>
        </IonGrid>

     </div>
    );
  }else{
    return (
        <div className="container">
             <IonButton onClick={() => loginWithRedirect()}>Log In</IonButton>
        </div>
    );
  }

};

export default ExploreContainer;
