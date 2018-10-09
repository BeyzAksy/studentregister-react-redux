import { STUDENT_CHANGED } from './types';

 export const studentChange = ({ props, value }) => {
   return (dispatch) => {
     dispatch({
       type: STUDENT_CHANGED,
       payload: { props, value }
     });
   };
 };
