class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      question.hide();
    //write code to change the background color here
     background("Yellow");
     fill(0);
    //write code to show a heading for showing the result of Quiz
      textSize(30);
      text("Result of the quiz",340,65);
    //call getContestantInfo( ) here
    Contestant.getPlayerinfo();
      if(allContestants !== undefined){
        debugger;
        var display_Answer =230;
       fill("Blue");
       textSize(20);
       text("*NOTE:Contestant who answered correct are highlighted in green color!",130,230);
      }

    //write condition to check if contestantInfor is not undefined
    for(var plr in allContestants){
      var correctAns = "2"
      if(correctAns === allContestants[plr].answer){
        fill("Green");
      }else{
        fill("red");
      }
    
     display_Answer+=30;
        textSize(20);
    text(allContestants[plr].name + ":" + alllContestants[plr].answer,250,display_Answer);

    }
    
  }

}
