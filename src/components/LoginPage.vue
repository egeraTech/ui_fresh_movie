<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
               fresh_movies
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="ion-padding">
                  <ion-button @click="signInWithGoogle" class="google-button">Se connecter avec Google</ion-button>
                  <ion-button @click="signUpWithGoogle" class="google-button">creer un compte avec Google</ion-button>    
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    methods: {
       login() {
           
        }
    }
};
</script>

<style scoped>

/* Add your CSS styles here */
.login-form {
  max-width: 300px;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 15px;
}


ion-label {
  color: #333; 
}

ion-input {
  border: 1px solid #ccc;
  border-radius: 5px; 
  padding: 10px; 
}

ion-button {
  margin-top: 15px; 
  border-radius: 5px;
}


ion-button.btn-yellow {
  background-color: #e5f80d;
}

ion-button.btn-yellow:hover {
  background-color: #ffff99; 
}

/* Blue Button */
ion-button.btn-blue {
  background-color: #06b3f6; 
  color: #fff; 
}

ion-button.btn-blue:hover {
  background-color: #06b3f6; 
}

/* Red Button */
ion-button.btn-red {
  background-color: #f00e09; 
  color: #fff; 
}

ion-button.btn-red:hover {
  background-color: #ff9999; 
}


</style>
