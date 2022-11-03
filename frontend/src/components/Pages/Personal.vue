<template>
    <v-form>
        <v-card style="padding: 10px;" elevation="2">
            <v-text-field label="Nome"></v-text-field>
            <v-text-field label="e-mail"></v-text-field>
            <v-text-field label="Senha"></v-text-field>
    
            <v-text-field label="Cargo"></v-text-field>
            <v-row >
                <v-col style="padding-left: 0;" cols="6">
                    <v-text-field label="Departamento"></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field label="Nível"></v-text-field>
                </v-col>
            </v-row>
        </v-card>
    </v-form>
    <v-container style="margin: 0; padding: 0;">
        <v-btn class="btn-principal float-right">
            Salvar >
        </v-btn>
    </v-container>
</template>

<script>
export default{
    name:'PersonalComponent'
}
</script>

<style>

</style>