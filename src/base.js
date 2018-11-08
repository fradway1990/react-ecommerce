import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC1Gdz08H_6cRHeYTcbM9IQY7V3tXSxit0",
    authDomain: "catch-of-the-day-fradway.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-fradway.firebaseio.com",
  };
var firebaseApp = firebase.initializeApp(config);
var base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
