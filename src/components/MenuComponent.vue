<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar color="#f00e09" slot="bottom">
                <ion-tab-button tab="home" href="/home">
                    <ion-icon :icon="home"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="coming soon" href="/comingsoon">
                    <ion-icon :icon="copy" />
                    <ion-label>coming soon</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="search" href="/search">
                    <ion-icon :icon="search"> </ion-icon>
                    <ion-label>search</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="person" href="/person">
                        <ion-icon :icon="person"> </ion-icon>
                        <ion-label>person</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import {  home, copy, search, download,person } from 'ionicons/icons';

export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
        return {
         home,
         copy,
         search,
         download,
         person

        };
    },
};
</script>