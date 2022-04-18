import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseClientInitConfig from '../firebaseClientInitConfig';

firebase.initializeApp(firebaseClientInitConfig);

function FirebaseAuthLogout() {
  return (
    <div>
       <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </div>
  );
}

export default FirebaseAuthLogout