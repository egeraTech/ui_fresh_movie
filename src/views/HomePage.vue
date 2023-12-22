<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title><span>fresh_movies</span></ion-title>
      </ion-toolbar>
    </ion-header>

  </ion-page>
</template>

<script>
import { IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';

export default{
  components:{

     IonHeader,
     IonPage,
     IonTitle,
     IonToolbar,
        
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
