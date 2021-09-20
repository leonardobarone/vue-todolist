
const app = new Vue({
    el: "#root",
    data: {
        coseDaFare: [ 
            {
                nome: "Fare i compiti",
                completato: false,
            },
            {
                nome: "Fare la spesa",
                completato: false
            },
            {
                nome: "Fare il bucato",
                completato: false            
            }
        ],
        
        nuovaCosaDaFare: "",
    },
    methods: {
        cancella: function(index) {
            this.coseDaFare.splice(index, 1)
        },
        aggiungi: function() {
            if (this.nuovaCosaDaFare != "") {
                this.newObj = {},
                this.newObj.nome = this.nuovaCosaDaFare,
                this.newObj.completato = false
                this.coseDaFare.push(this.newObj)

                this.nuovaCosaDaFare = "";
            }
        }
    }
})


// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
// Bonus:
// Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
// Prevedere inoltre un pulsante per modificare lo stato del singolo todo