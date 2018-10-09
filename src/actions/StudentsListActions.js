import firebase from 'firebase';
import { STUDENT_CHANGED, CREATE_REQUEST_SUCCES, CREATE_REQUEST } from './types';

 export const studentChange = ({ props, value }) => {
   return (dispatch) => {
     dispatch({
       type: STUDENT_CHANGED,
       payload: { props, value }
     });
   };
 };

 export const studentCreate = ({ isim, soyisim, ogrno, sube }) => {
   const { currentUser } = firebase.auth();

    return (dispatch) => {
      dispatch({ type: CREATE_REQUEST });
      firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .push({ isim, soyisim, ogrno, sube })
          .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCES });
          });
    };
 };
