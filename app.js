var app = new Vue({
    el: '#spa',
    data:{
        burgetClick : false,
        IconeLClick : true
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
            document.getElementById(id).style.backgroundColor="#f6f8fc";
        },
        OeverDiv: function(id){
            document.getElementById(id).style.backgroundColor="#d3e3fd";
        }
    },
    mounted() {
        console.log("inizio");
        
    }
});