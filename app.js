var app = new Vue({
    el: '#spa',
    data:{
        burgetClick : false,
        IconeLClick : true,
        PaginaCorrente:"Principale",
        ScriviMail:false,
        mails: [{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"},{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"},{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"},{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"},{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"},{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"},{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"},{"Oggetto":"Oggetto","Corpo":"Corpo della Mail ricevuta, Buongiorno questa è una mail di prova"}],
        isCheckAll:false,
        k:0
    },
    methods:{
        burger:function(){
            var self=this;
            console.log("ciao");
            var menuPrincipale = document.querySelectorAll(".MenuPricipale>ul>li>div>h5");
            var span = document.querySelectorAll("#altro>li>div>h5");
            var icone = document.querySelectorAll(".iconeLaterali");
            if(!self.burgetClick){
                for(var i=0;i<menuPrincipale.length;i++){
                    menuPrincipale[i].style.display = "none";
                }
                for(var i=0;i<span.length;i++){
                    span[i].style.display = "none";
                }
                self.burgetClick = !self.burgetClick;
                document.getElementsByClassName("main")[0].style.gridTemplateColumns= "1fr 17fr 1fr";
                for(var i=0;i<icone.length;i++){
                    icone[i].style.justifyContent = "center";
                    icone[i].style.width = "80px";
                }
            }else{
                for(var i=0;i<menuPrincipale.length;i++){
                    menuPrincipale[i].style.display = "block";
                }
                for(var i=0;i<span.length;i++){
                    span[i].style.display = "block";
                }
                self.burgetClick = !self.burgetClick;
                document.getElementsByClassName("main")[0].style.gridTemplateColumns= "4fr 15fr 1fr";
                for(var i=0;i<icone.length;i++){
                    icone[i].style.justifyContent = "start";
                    icone[i].style.width = "250px";
                }
            }
        },
        mostraIconeL:function(){
            var self=this;
            if(self.IconeLClick){
                document.getElementById("altro").style.display="none";
                self.IconeLClick=!self.IconeLClick;
            }else{
                document.getElementById("altro").style.display="block";
                self.IconeLClick=!self.IconeLClick;
            }
        },
        leaveDiv: function(id){
            if(id === "Social" || id === "Promozioni" || id === "Principale"){
            document.getElementById(id).style.backgroundColor="white";
            }else{
                document.getElementById(id).style.backgroundColor="#f6f8fc";
            }

        },
        OeverDiv: function(id){
            document.getElementById(id).style.backgroundColor="#d3e3fd";
        },
        PaginaDaVisulizzare: function(pagina){
            var self=this;
            document.querySelector("#"+self.PaginaCorrente+">div>hr").style.backgroundColor="white";
            document.querySelector("#"+self.PaginaCorrente+">div>hr").style.height="0";
            if(pagina === "Social" || pagina === "Promozioni" || pagina === "Principale"){
                document.querySelector("#"+pagina+">div>hr").style.backgroundColor="blue";
                document.querySelector("#"+pagina+">div>hr").style.height="3px";
            }
            self.PaginaCorrente=pagina
        },
        checked: function(){
            var self=this;
            var checkBox =document.querySelectorAll('.check');
            if(self.isCheckAll){
                for(var i=0;i<checkBox.length;i++){
                    document.querySelectorAll('.check')[i].checked  = false;
                }
                self.isCheckAll = !self.isCheckAll;
            }else{
                for(var i=0;i<checkBox.length;i++){
                    document.querySelectorAll('.check')[i].checked  = true;
                }
                self.isCheckAll = !self.isCheckAll;
            }
        },
        checkMail: function(indice){
            var self = this;
            var checkBox = document.querySelectorAll('.check');
            var flag=false;
            for(var i=0;i<checkBox.length;i++){
                if(document.querySelectorAll('.check')[i].checked){                    
                    self.k++;
                    flag = true;
                }
            }
            console.log(self.k);
            
            if(self.k==1){                
                self.isCheckAll = !self.isCheckAll;
                self.k--; //serve nel caso clicco solo 1 check
            }
            if(!flag){
                self.k=0;
                self.isCheckAll = !self.isCheckAll;
            }            
        }
    },
    mounted() {
        console.log("inizio");
        this.PaginaDaVisulizzare("Principale");
    }
});