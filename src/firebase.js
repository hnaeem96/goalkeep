import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDvARHEkHIrDeD8Pl4ufZ8VTACZsI58bpc",
    authDomain: "goals-2ff9e.firebaseapp.com",
    databaseURL: "https://goals-2ff9e.firebaseio.com",
    projectId: "goals-2ff9e",
    storageBucket: "",
    messagingSenderId: "605196142306"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completedGoals');
export const deleteGoalRef = firebase.database().ref('deletedGoals');
