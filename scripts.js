members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            // members est une propriété de donnée et fait reference à la variable declarée en haut
            members: window.members,
            
            //1- création d'une propriété de donnée "newMember" cela nous permettre d'utiliser le v-model dans le fichier html.
            newMember :{} 
            //vueJs remplira de lui meme les propriétés grace au v-model
        }
    },

    // 4- on définit la méthode addMember de l'écouteur d'evenement
    methods: {
        addMember(){
            //condition pour que les champs soient remplis
            if(this.newMember.fname && this.newMember.lname && this.newMember.instrument ) {

                this.members.push(this.newMember);
                //la ligne suivante qui est une definition d'un objet vide,aura pour effet d'effacer le formulaire apres sa soumission
                this.newMember ={}
            }else{
                //si les champs ne sont pas remplis, il y aura une alerte
                alert("All fields must be filled")                
            }
            
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
