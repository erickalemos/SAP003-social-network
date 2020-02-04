 function uiConfig() {
     return {
    signInFlow: 'popup',
    signInSuccessUrl: '#',
    signInOption: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
    }
} 