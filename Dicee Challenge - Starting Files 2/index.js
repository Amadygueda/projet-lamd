function game (){
    var hazard2 = Math.random();
    var arrondie2 = hazard2*3+1;
    var joueur= Math.floor(arrondie2);
    var hazard1 = Math.random();
    var arrondie1 = hazard1*6+1;
    var Equalite= Math.floor(arrondie1);

    var hazard3 = Math.random();
    var arrondie3 = hazard3*5+1;
    var Equalite2= Math.floor(arrondie3);

    var hazard4 = Math.random();
    var arrondie4 = hazard4*2+1;
    var perdu1= Math.floor(arrondie4);

    var hazard5 = Math.random();
    var arrondie5 = hazard5*3+1;
    var perdu2= Math.floor(arrondie5);

    var hazard6 = Math.random();
    var arrondie6 = hazard6*4+1;
    var perdu3= Math.floor(arrondie6);

    var hazard7 = Math.random();
    var arrondie7 = hazard7*5+1;
    var perdu4= Math.floor(arrondie7);
    
    if(joueur==1){
        document.querySelector("h1").textContent="Joueur1 est le Gagnant 🥳 ";
        if (Equalite2===1){
            document.getElementsByClassName("img1")[0].src="./images/dice2.png";
            document.getElementsByClassName("img2")[0].src="./images/dice1.png";

         } else if (Equalite2===2){
            document.getElementsByClassName("img1")[0].src="./images/dice3.png";
            if(perdu1==1){
                document.getElementsByClassName("img2")[0].src="./images/dice1.png";

            }
            else{
                document.getElementsByClassName("img2")[0].src="./images/dice2.png";
            }
         } else if(Equalite2===3){
            document.getElementsByClassName("img1")[0].src="./images/dice4.png";
            if (perdu2 ===1){
                document.getElementsByClassName("img2")[0].src="./images/dice1.png";

            } else if( perdu2===2){
                document.getElementsByClassName("img2")[0].src="./images/dice2.png";
            } else{
                document.getElementsByClassName("img2")[0].src="./images/dice3.png";
            }
         }else if (Equalite2 === 4){
            document.getElementsByClassName("img1")[0].src="./images/dice5.png";
            if (perdu3 === 1){
                document.getElementsByClassName("img2")[0].src="./images/dice1.png";

            } else if ( perdu3 ===2){
                document.getElementsByClassName("img2")[0].src="./images/dice2.png";

            }
            else if ( perdu3 ===3){
                document.getElementsByClassName("img2")[0].src="./images/dice3.png";

            } else{
                document.getElementsByClassName("img2")[0].src="./images/dice4.png";

            }
         } else{
            document.getElementsByClassName("img1")[0].src="./images/dice6.png";
            if (perdu4 === 1){
                document.getElementsByClassName("img2")[0].src="./images/dice1.png";

            } else if ( perdu4 ===2){
                document.getElementsByClassName("img2")[0].src="./images/dice2.png";

            }
            else if ( perdu4 ===3){
                document.getElementsByClassName("img2")[0].src="./images/dice3.png";

            } else if ( perdu4 ===4){
                document.getElementsByClassName("img2")[0].src="./images/dice4.png";

            } else{
                document.getElementsByClassName("img2")[0].src="./images/dice5.png";

            }

         }
    }
    else if(joueur ==2){
        document.querySelector("h1").textContent="Joueur2 est le Gagnant 🥳";
        if (Equalite2===1){
            document.getElementsByClassName("img1")[0].src="./images/dice1.png";
            document.getElementsByClassName("img2")[0].src="./images/dice2.png";

         } else if (Equalite2===2){
            document.getElementsByClassName("img2")[0].src="./images/dice3.png";
            if(perdu1==1){
                document.getElementsByClassName("img1")[0].src="./images/dice1.png";

            }
            else{
                document.getElementsByClassName("img1")[0].src="./images/dice2.png";
            }
         } else if(Equalite2===3){
            document.getElementsByClassName("img2")[0].src="./images/dice4.png";
            if (perdu2 ===1){
                document.getElementsByClassName("img1")[0].src="./images/dice1.png";

            } else if( perdu2===2){
                document.getElementsByClassName("img1")[0].src="./images/dice2.png";
            } else{
                document.getElementsByClassName("img1")[0].src="./images/dice3.png";
            }
         }else if (Equalite2 === 4){
            document.getElementsByClassName("img2")[0].src="./images/dice5.png";
            if (perdu3 === 1){
                document.getElementsByClassName("img1")[0].src="./images/dice1.png";

            } else if ( perdu3 ===2){
                document.getElementsByClassName("img1")[0].src="./images/dice2.png";

            }
            else if ( perdu3 ===3){
                document.getElementsByClassName("img1")[0].src="./images/dice3.png";

            } else{
                document.getElementsByClassName("img1")[0].src="./images/dice4.png";

            }
         } else{
            document.getElementsByClassName("img2")[0].src="./images/dice6.png";
            if (perdu4 === 1){
                document.getElementsByClassName("img1")[0].src="./images/dice1.png";

            } else if ( perdu4 ===2){
                document.getElementsByClassName("img1")[0].src="./images/dice2.png";

            }
            else if ( perdu4 ===3){
                document.getElementsByClassName("img1")[0].src="./images/dice3.png";

            } else if ( perdu4 ===4){
                document.getElementsByClassName("img1")[0].src="./images/dice4.png";

            } else{
                document.getElementsByClassName("img1")[0].src="./images/dice5.png";

            }

         }
   
    } 
  
   else{
    document.querySelector("h1").textContent=" Equalite 😢";
    if(Equalite ===1){
        document.getElementsByClassName("img1")[0].src="./images/dice1.png";
        document.getElementsByClassName("img2")[0].src="./images/dice1.png"
   } else if(Equalite ===2){
    document.getElementsByClassName("img1")[0].src="./images/dice2.png";
    document.getElementsByClassName("img2")[0].src="./images/dice2.png";


   }
   else if(Equalite ===3){
    document.getElementsByClassName("img1")[0].src="./images/dice3.png";
    document.getElementsByClassName("img2")[0].src="./images/dice3.png";

    
   }
   else if(Equalite ===4){
    document.getElementsByClassName("img1")[0].src="./images/dice4.png";
    document.getElementsByClassName("img2")[0].src="./images/dice4.png";
   }
   else if(Equalite ===5){
    document.getElementsByClassName("img1")[0].src="./images/dice5.png";
    document.getElementsByClassName("img2")[0].src="./images/dice5.png";

    

   }
   else{
    document.getElementsByClassName("img1")[0].src="./images/dice6.png";
    document.getElementsByClassName("img2")[0].src="./images/dice6.png";
    
   }
  }
}
game();