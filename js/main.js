// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista.
// (chiaramente usando Vue, etc.,)

const {createApp} = Vue;

// email che verranno stampate in pagina
createApp({
    data() {
        return {
            email:'',

        }
    },

    methods:{

    },

    // importata libreria da axios e usata per creare le email
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            console.log(response.data);
            this.email = response.data.response;
        }) ;
    }     
}).mount('#myapp') 