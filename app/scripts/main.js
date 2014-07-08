
//Chooses a player's given attributes.
var lifePoints = $('#lifePoints'),
    lifeBTN = $('#lifeButton'),
    pointsChange;


var Player = function (options) {
  var options = options || {};
  this.name = options.name;
  this.lifePoints = 100;
  this.choose = function (target) {
    process_choice(this, target);
  };
  this.elem = options.elem;
};

var Challenge = function (options) {
  var options = options || {};
  this.name = options.name;
  this.lifePoints = 100;
  this.elem = options.elem;
};


var you = new Player ({
	name: 'You',
	elem: $('.player')
})

var challenge = new Challenge ({
  name: 'Challenge',
  elem: $('.challenge')
});


var gender = ['male', 'female'];
var money = ['rich', 'poor'];
var parents = ['loving', 'awful'];
var race= ['white', 'not white'];

// Function to randomize a property from an array
var randoItem = function (array) {
  // Generates a random number from 0 to the length of the passed in array
  // Returns the value
  return array[Math.floor(Math.random()*array.length)];
};


 $('.birthButton').on('click', function() {
  
  var rand_gender = randoItem(gender);
  var rand_money = randoItem(money);
  var rand_parents = randoItem(parents);
  var rand_race = randoItem(race);


 		if (rand_gender == 'female'){

 			you.lifePoints -= (5);
		}

 		if (rand_money == 'poor') {
 			you.lifePoints -= (10);
 		}

 		if (rand_parents == 'awful') {
 			you.lifePoints -= (17);
 		}

 		if (rand_race  == 'not white') {
 			you.lifePoints -= (6);
 		}

 		console.log (you.lifePoints);


//describes attributes

 		if (you.lifePoints === 84){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Born poor and not white. It's not going to be an easy life for you, but don't give up. Life can be wonderful\
          for you! Good luck!");
 	}

 	else if (you.lifePoints === 100){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Well, you've hit the jackpot, so to speak. Careful, though. Some of the biggest @$&holes in the\
        world are rich white men.");
  }

  else if (you.lifePoints === 68){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Well... you've got all the ingredients to be a great\
         stripper. You don't have to do that, though! You can be anything!");
  }

  else if (you.lifePoints === 62 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Wow. You don't have great luck. You were born\
         with all the disadvantages possible. Don't worry, though. It builds character! If you let it!");
  }

  else if (you.lifePoints === 95 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Well, you're born into pretty good circumstances.\
         Being a woman, though, has its challenges. As long as you are gorgeous, \
           life should be a cake. Oh... and don't eat cake. You'll get fat.");

  }

    else if (you.lifePoints === 85 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Hmmm...Poor and female. It's not going to be the\
          easiest life, but you're loved by your family, and you're white. Which means history\
           loves you a little bit more, as well. Good luck!");
  }

    else if (you.lifePoints === 90 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. You're starting out life pretty okay.\
          I mean, you're poor. So, that sucks. It'll be an uphill battle, but don't give up!");
  }

    else if (you.lifePoints === 73 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Poor with bad parents. That god (well,\
          thank javascript) you are male and white. That's usually enough to get you through\
           most things.");
  }

    else if (you.lifePoints === 67 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Good news: You're a man. So\
          that's an advantage. Bad news: you're poor, not white and have bad parents.\
           Thank god you aren't a woman. You'd really be screwed.");
  }

    else if (you.lifePoints === 83 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Good news: You're rich, male, and\
          white. You have the makings of a future president. Bad news: you have awful\
           parents, which means you also have the makings of a future serial killer.\
           Choose wisely.");
  }

    else if (you.lifePoints === 77 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Born not white and with bad parents.\
          Pretty rough beginnings. Don't let that stop you!");
  }

    else if (you.lifePoints === 94 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Not too bad a start. All the\
          advantages are yours. Except, of course, you are not white. The world hasn't always\
           been kind to the non-white variety. Don't let that stop you, though. Show whitey!");
  }

    else if (you.lifePoints === 78 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Born female with bad parents can make life\
         pretty rough. Be strong, and you can be one bad B!");
  }

    else if (you.lifePoints === 89 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Born female and not white can\
         prove challenging. You've got $$ and a loving family, though. Go be great!");
  }

    else if (you.lifePoints === 79 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Well, overall you have pretty bad luck. BUT loving parents can make the\
         difference. So that's good!");
  }

  else if (you.lifePoints === 72 ){
      $('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents. Well, at least you're rich because everything else sucks.");
  }

	else {
		$('.main-text').animate().html("You are born. Life has chosen for you to be " + rand_gender + ", " + rand_money + ", " + rand_race + ", and have "
        + rand_parents + " parents.");
	}


if (you.lifePoints > 0) {

    // Update the individual attacked's health visually
    you.elem.find('input').val(you.lifePoints);
    $('.player').animate().css('visibility', 'visible');
  

}
  $(this).remove();




  if (rand_money == 'rich'){

    $('.richButton').append('<button class="richButton1">Ready to continue?</button>');

  }

  $('.richButton1').on('click', function(){
      $(this).remove();

      $('<div class="collegeButtonHolder"></div>').replaceAll('.poorButton');
      $('.collegeButtonHolder').append('<button class="collegeButton">Want college? Choose me.</button>');
      $('.collegeButtonHolder').append('<button class="travelButton">Want travel? Choose me.</button>');
      $('.collegeButtonHolder').append('<button class="partyButton">Want party? Choose me.</button>');
      $('.main-text').html('Being rich gives you more options...');



  $('.collegeButton').on('click',function(){
    pointsChange = _.random(20);

    you.lifePoints += pointsChange;
    
      if (you.lifePoints > 0){
        you.elem.find('input').val(you.lifePoints);

        $('.collegeButtonHolder').remove();
        $('.main-text').html('You just earned ' + pointsChange + ' Life Points for going to college. Cool. Now what?');
        $('.afterCollegeEvent').append('<button class="afterCollege">Random Life Event. Click me.</button>'); 

      }

        $('.afterCollege').on('click', function(){

            pointsChange = _.random(-50, 10);

            you.lifePoints += pointsChange;

              if (you.lifePoints > 0) {
                you.elem.find('input').val(you.lifePoints);
              }

              if( pointsChange > 0 && 10 > pointsChange ){
                $('.main-text').html('You just earned ' + pointsChange + ' Life points for passing all your exams. Booya!');
              
              }

              if( pointsChange > 10 && 30 > pointsChange ){
                $('.main-text').html('You just earned ' + pointsChange + ' Life Points for joining the Foreign Studies Club. How hip to the skip, are you!');
              }

              if( pointsChange > 30 && 50 > pointsChange ){
                $('.main-text').html('You just earned ' + pointsChange + ' Life Points for making a new friend in your Biology lab. Friendship is groovy.');
              }

              if(pointsChange < 0 && -10 < pointsChange){
                $('.main-text').html('You just lost ' + pointsChange + ' Life points for gaining 30lbs your freshman year! WHOA!');
              }

               if(pointsChange < -10 && -30 < pointsChange){
                $('.main-text').html('You just lost ' + pointsChange + ' Doing the walk of shame... once a week. Yikes.');
              }

               if( pointsChange < -30 && -50 < pointsChange){
                $('.main-text').html('You just lost ' + pointsChange + ' Failing all of your exams. All of them?! Really!?');
              }

              if (you.lifePoints >= 200){
                $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

              }

              if (you.lifePoints <= 0){
                $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

              }
        }); //ends random event button function

  }); //ends college button click function

   
    $('.travelButton').on('click', function(){
    
    pointsChange = _.random(20);

    you.lifePoints += pointsChange;

      if (you.lifePoints > 0){
        you.elem.find('input').val(you.lifePoints);

        $('.collegeButtonHolder').remove();
        $('.main-text').html('You just earned ' + pointsChange + ' Life Points for traveling the world and becoming\
           a classy cultured individual. Cool. Now what?');
        $('.afterCollegeEvent').append('<button class="afterCollege">Random Life Event. Click me.</button>'); 
      }

            //below functions the random event button
        $('.afterCollege').on('click', function(){

          pointsChange = _.random(-50, 50);

          you.lifePoints += pointsChange;

          // below earning and losing points

        if (you.lifePoints > 0) {
          you.elem.find('input').val(you.lifePoints);
        }

          if( pointsChange > 0 && 10 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' trying new foods from around the world. Trying new things is important!');
          }

          if( pointsChange > 10 && 30 > pointsChange ){
                $('.main-text').html('You just earned ' + pointsChange + ' Life Points for keeping in touch with your family \
                  even when you are on another continent. Family first!');
          }

          if( pointsChange > 30 && 50 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for making great friends from around the world!');
          }

          if(pointsChange < 0 && -10 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for sitting in your hostel and watching TV for a week straight. GO LIVE! That is why you travel, dummy!');
          }

           if(pointsChange < -10 && -30 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for refusing to try to communicate in another language because "real people speak English". Douche.');
          }

           if( pointsChange < -30 && -50 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for making fun of how all the locals talk. Grow up, loser.');
          }

          if (you.lifePoints >= 200){
            $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

          }

          if (you.lifePoints <= 0){
            $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

          }
        }); //ends random event button function

  }); //ends travel button function


$('.partyButton').on('click', function(){

      pointsChange= _.random(-50, 50);

      you.lifePoints += pointsChange;

      if (you.lifePoints > 0){
        you.elem.find('input').val(you.lifePoints);
      // }

          $('.collegeButtonHolder').remove();

          if (pointsChange > 0) {
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for partying while you still can. Cool. Now what?');
          }

          else {
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for destroying too many brain cells. Oops. Now what?');
          }
        
          $('.afterCollegeEvent').append('<button class="afterCollege">Random Life Event. Click me.</button>'); 
      }

        //below functions the random event button
        $('.afterCollege').on('click', function(){

          pointsChange = _.random(-50, 50);

          you.lifePoints += pointsChange;

          // below earning and losing points

          if (you.lifePoints > 0) {
          you.elem.find('input').val(you.lifePoints);
          } 

         if( pointsChange > 0 && 10 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' reading a book instead of watching 10 hours of netflix. Good job!');
          }

          if( pointsChange > 10 && 30 > pointsChange ){
                $('.main-text').html('You just earned ' + pointsChange + ' Life Points for getting up early and eating a healthy breakfast instead of\
             sleeping until 3pm and eating left-over take-out. Progress!');
          }

          if( pointsChange > 30 && 50 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for standing up to a bully! Suck it, bully!');
          }

          if(pointsChange < 0 && -10 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for drunk texting your ex. And your mom. And your professor. And your grandma. Get it together');
          }

           if(pointsChange < -10 && -30 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for forgetting to call your mother on her birthday. She gave birth to you!');
          }

           if( pointsChange < -30 && -50 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for for getting drunk and yelling at an old woman as she crossed the street. Rude!');
          }


          if (you.lifePoints >= 200){
            $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

          }

          if (you.lifePoints <= 0){
            $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

          }
    //win, lose, continue?

     if (you.lifePoints > 0){
        you.elem.find('input').val(you.lifePoints);
      }

      if (you.lifePoints >= 200){
        $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

      }

      if (you.lifePoints <= 0){
        $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

      }

    }); //ends random event button function

  }); //ends party button function


}); //ends rich button



if (rand_money == "poor"){
  $('.poorButton').append('<button class="poorButton1">Ready to continue?</button>');

}

$('.poorButton1').on('click', function(){
      $(this).remove();

      $('<div class="poorButtonHolder"></div>').replaceAll('.poorButton');
      $('.poorButtonHolder').append('<button class="communityCollegeButton">Want school? Choose me.</button>');
      $('.poorButtonHolder').append('<button class="gangButton">Want street-cred? Choose me.</button>');
      $('.poorButtonHolder').append('<button class="workButton">Want work? Choose me.</button>');
      $('.main-text').html('Being poor limits your options...');

// });

  $('.communityCollegeButton').on('click', function(){ //ends at bottom

    pointsChange= _.random(-50, 50);

    you.lifePoints += pointsChange;

    if (you.lifePoints > 0){
      
      you.elem.find('input').val(you.lifePoints);
  
      $('.poorButtonHolder').remove();

        if (pointsChange > 0) {
          $('.main-text').html('You just earned ' + pointsChange + ' Life Points for getting your degree! Congrats! Now what?');
        }

        else {
          $('.main-text').html('You just lost ' + pointsChange + ' Life Points taking out too much in loans. Now you are in super debt. Now what?');
        }
      
        $('.afterCollegeEvent').append('<button class="afterCollege">Random Life Event. Click me.</button>');

    } //ends if lifePoints statement

    $('.afterCollege').on('click', function(){

          pointsChange = _.random(-50, 50);

          you.lifePoints += pointsChange;

          // below earning and losing points

          if (you.lifePoints > 0) {
          you.elem.find('input').val(you.lifePoints);
          } 

         if( pointsChange > 0 && 10 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for complimenting a stranger. It could have come off creepy, but it came off super sweet!');
          }

          if( pointsChange > 10 && 30 > pointsChange ){
                $('.main-text').html('You just earned ' + pointsChange + ' Life Points for rescuing a puppy from the clutches of a giant hawk. That was a weird moment!');
          }

          if( pointsChange > 30 && 50 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for getting a great internship at your dream company! You are on your way up!');
          }

          if(pointsChange < 0 && -10 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for wearing you pajamas to Walmart at 4 in the afternoon. Lazy.');
          }

           if(pointsChange < -10 && -30 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for getting in a fight at a bar and spending the night in jail. Now what?');
          }

           if( pointsChange < -30 && -50 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for seeing someone drop his wallet and swiping it! That is awful! Now what?');
          }

          if (you.lifePoints >= 200){
            $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

          }

          if (you.lifePoints <= 0){
            $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

          }
//win, lose, continue?

  if (you.lifePoints > 0){
        you.elem.find('input').val(you.lifePoints);
  }

  if (you.lifePoints <= 0){
    $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

  }

   if (you.lifePoints >= 200){
    $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

  }


  }); //ends random event button function

  }); //ends community college button function



//TEMPLATE//

$('.gangButton').on('click', function(){ //ends at bottom

    pointsChange= _.random(-50, 50);

    you.lifePoints += pointsChange;

    if (you.lifePoints > 0){
      
      you.elem.find('input').val(you.lifePoints);
  
      $('.poorButtonHolder').remove();

        if (pointsChange > 0) {
          $('.main-text').html('You just earned ' + pointsChange + ' Life Points for escaping gang life and becoming a counselor for at-risk children. Now what?');
        }

        else {
          $('.main-text').html('You just lost ' + pointsChange + ' Life Points for being a snitch and getting your friend shot. Awkward...Now what?');
        }
      
        $('.afterCollegeEvent').append('<button class="afterCollege">Random Life Event. Click me.</button>');

    } //ends if lifePoints statement

    $('.afterCollege').on('click', function(){

          pointsChange = _.random(-50, 50);

          you.lifePoints += pointsChange;

          // below earning and losing points

          if (you.lifePoints > 0) {
          you.elem.find('input').val(you.lifePoints);
          } 

          if( pointsChange > 0 && 10 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for making a budget for yourself. So Responsible!');
          }

          if( pointsChange > 10 && 30 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for getting a new job! So good!!');
          }

          if( pointsChange > 30 && 50 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for saving up and moving into a new apartment in a safe neighborhood. You are a smart one!');
          }

          if(pointsChange < 0 && -10 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for wearing you pajamas to Walmart at 4 in the afternoon. Lazy.');
          }

           if(pointsChange < -10 && -30 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for getting in a fight at a bar and spending the night in jail. Now what?');
          }

           if( pointsChange < -30 && -50 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for seeing someone drop his wallet and swiping it! That is awful! Now what?');
          }

          if (you.lifePoints >= 200){
            $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

          }

          if (you.lifePoints <= 0){
            $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

          }
//win, lose, continue?

  // if (you.lifePoints > 0){
  //       you.elem.find('input').val(you.lifePoints);
  // }

  // if (you.lifePoints <= 0){
  //   $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

  // }

  //  if (you.lifePoints >= 200){
  //   $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

  // }


  }); //ends random event button function

  }); //ends gang college button function


$('.workButton').on('click', function(){ //ends at bottom

    pointsChange= _.random(-50, 50);

    you.lifePoints += pointsChange;

    if (you.lifePoints > 0){
      
      you.elem.find('input').val(you.lifePoints);
  
      $('.poorButtonHolder').remove();

        if (pointsChange > 0) {
          $('.main-text').html('You just earned ' + pointsChange + ' Life Points for getting your degree! Congrats! Now what?');
        }

        else {
          $('.main-text').html('You just lost ' + pointsChange + ' Life Points taking out too much in loans. Now you are in super debt. Now what?');
        }
      
        $('.afterCollegeEvent').append('<button class="afterCollege">Random Life Event. Click me.</button>');

    } //ends if lifePoints statement

    $('.afterCollege').on('click', function(){

          pointsChange = _.random(-50, 50);

          you.lifePoints += pointsChange;

          // below earning and losing points

          if (you.lifePoints > 0) {
          you.elem.find('input').val(you.lifePoints);
          } 

          if( pointsChange > 0 && 10 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for changing to a healthy diet. Good for you!');
          }

          if( pointsChange > 10 && 30 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for making a budget for yourself. So responsible!');
          }

          if( pointsChange > 30 && 50 > pointsChange ){
            $('.main-text').html('You just earned ' + pointsChange + ' Life Points for opening a soup kitchen. So caring!');
          }

          if(pointsChange < 0 && -10 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for running over a possom with your car. Rude.');
          }

           if(pointsChange < -10 && -30 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for eating your feelings and gaining 78 pounds. Now what?');
          }

           if( pointsChange < -30 && -50 < pointsChange){
            $('.main-text').html('You just lost ' + pointsChange + ' Life Points for losing your job after showing up to work late and high. Dumb. Now what?');
          }

          if (you.lifePoints >= 200){
            $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

          }

          if (you.lifePoints <= 0){
            $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

          }
//win, lose, continue?

  if (you.lifePoints > 0){
        you.elem.find('input').val(you.lifePoints);
  }

  if (you.lifePoints <= 0){
    $('body').empty().css('background', 'url(http://gph.is/1aQOBIj)');

  }

   if (you.lifePoints >= 200){
    $('body').empty().css('background', 'url(http://gph.is/1pUlOIF)');

  }


  }); //ends random event button function

  }); //ends work college button function






}); //ends poor button on click function



}); //ends overall function?



