import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseClientInitConfig from '../firebaseClientInitConfig';

firebase.initializeApp(firebaseClientInitConfig);

function FirebaseAuthLogout() {
  return (
    <a href="/"
    className={
      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    }
    onClick={(e) => {firebase.auth().signOut()} }>
       Cerrar sesión
    </a>
  );
}

export default FirebaseAuthLogout