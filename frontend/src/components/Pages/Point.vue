<template>

    <v-card  class="v-card card1" elevation="2">
        <v-card-title> 
            Bater o ponto
        </v-card-title>
        <v-card-text class="text-center mb-2 text-h2">
            13:04:07
        </v-card-text>
        <v-card-actions class="text-md-center" >
            <v-container>
                <v-btn class="btn-principal"> 
                    Registrar > 
                </v-btn>
            </v-container>
        </v-card-actions>
    </v-card>

    <v-card class="v-card card2" elevation="2">
        <v-card-title>Hoje  01/11/2022</v-card-title>
        <v-container>
            <v-card-text>
                <p>inicio: <b>08:01:00</b></p>
                <p>pausa: <b>12:08:50</b></p>
                <p>fim da pausa: <b>13:01:00</b></p>
                <p>fim: <b>17:01:00</b></p>
            </v-card-text>
        </v-container>
    </v-card>
</template>

<script>
export default{
    name:'PointComponent'
}
</script>

<style>
   .v-card-text{
        font-size: larger;
        margin: auto;
   }
</style>