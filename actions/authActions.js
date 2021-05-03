// import firebase from 'firebase/firebase';

// export function createEmailAccount(
//     firstname,
//     lastname,
//     address,
//     location,
//     email,
//     password,
//     contact) {
//     return async (dispatch) => {
//         try {
//             const user =  firebase
//                 .auth
//                 .createUserWithEmailAndPassword(firstname,
//                     lastname,
//                     address,
//                     email,
//                     password,
//                     location,
//                     contact
//                     )
//             dispatch(register(user))
//         } catch (error) {
//             dispatch(registerError(error.message))
//         }
//     }
// }

// export function loginEmailAccount(email, password) {
//     try {
//         const user =  firebase
//             .auth
//             .signInWithEmailAndPassword(email, password)
//         if (user) {
//             dispatch(loggedIn(user));
//         }
//     } catch (error) {
//         dispatch(loginError(error.message))
//     }
// }

// export function logout() {
//     try {
//          firebase
//             .auth.
//             signOut(email, password)
//         dispatch(loggedOut())
//     } catch (error) {
//         console.log(error)
//     }
// }

// function loggedIn(user) {
//     return {
//         type: "LOGGED_IN",
//         payload: user
//     }
// }

// function loggedOut() {
//     return {
//         type: "LOGGED_OUT"
//     }
// }

// export function registerError(error) {
//     return {
//         type: "REGIDTER_ERROR",
//         payload: error
//     }
// }

// export function loginError(error) {
//     return {
//         type: "LOGIN_ERROR",
//         payload: error
//     }
// }