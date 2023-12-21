<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
               fresh_movies
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="ion-padding">
                <form class="login-form">
                    <h2>Login</h2>
                    <div class="input-group">
                        <ion-label position="floating">Email</ion-label>
                        <ion-input type="email" placeholder="Enter your email"></ion-input>
                    </div>
                    <div class="input-group">
                        <ion-label position="floating">Password</ion-label>
                        <ion-input type="password" placeholder="Enter your password"></ion-input>
                    </div>
                    <ion-button expand="block" color="warning" @click="login">Login</ion-button>
                </form>
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
  background-color: yellow; 
  color: #333;
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
