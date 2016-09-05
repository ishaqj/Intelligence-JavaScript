/*jslint browser: true, devel: true */
window.Intelligence = (function() {
    "use strict";

    var test = {

        "questions": [
        '<p>If Roger sold 40 apples in a working week, what is the average number of apples he sells each day?</p><button type="button" class="btn">5</button><br><button type="button" class="btn">6</button><br><button type="button" class="btn">8</button><br>', 
        '<p>If it takes 4 hours to drive to City A and the city is 160km away, what speed was the vehicle travelling at?</p><button  type="button" class="btn">30km</button><br><button type="button" class="btn">40km</button><br><button type="button" class="btn">100km</button><br>', 
        '<p>“Boat is to water” therefore “Plane is to _____”</p><button type="button" class="btn">Fly</button><br><button type="button" class="btn">Air</button><br><button type="button" class="btn">Sky</button><br>'
        ],

        "answers": [
        '8',
        '40km',
        'Air'
        ],

        "currentQuestion": 0,
        "score": 0,
        "totalScore": 0, // for all 3 tests
        "question": document.getElementById('questions'),
        "gameStatus": document.getElementById('gameStatus'),

        /**
         * Set Question
         *
         * @param int id of question.
         *
         * @returns void.
         */
        "setQuestion": function (quesId) {
            this.question.innerHTML = this.questions[quesId];
        },

        /**
         * Reset The Game
         *
         * @returns void.
         */

        "reset": function() {

            test.currentQuestion = 0;
            test.score = 0;
            playTest();
        },


        /**
         * Info about Intelligence
         *
         * @returns void.
         */

         "showInfo": function() {
            document.getElementById("testTitle").innerHTML = "<h1>Intelligence</h1><hr>";
            this.question.innerHTML = "<p>Intelligence is an intelligence test and it has several tests.</p><p> Click on the button to start." + "</p>";
         }

    };


    var test2 = {
        "questions": '<p>Which number comes after the last one?</p>',
        'btnOptions': '<button type="button" class="btn">30</button><button type="button" class="btn">Fizz</button><button type="button" class="btn">Buzz</button><button type="button" class="btn">FizzBuzz</button>',
        'answer': ["FizzBuzz"],
        "question": document.getElementById('questions'),
        "score": 0,


        /**
         * FizzBuzz function
         *
         *@param int start Start number 
         *
         *@param int stop stop number 
         *
         * @returns array as string.
         */

            "fizzandBuzz": function(start,stop) {
            var arr = [];
            for (var i = start; i <= stop; i++) {
                if(i % 3 === 0)
                {
                    if(i % 5 === 0)
                    {
                        arr.push("FizzBuzz");
                    }
                    else{
                        arr.push("Fizz");
                    }
                }
                else if(i % 5 === 0)
                {
                    arr.push("Buzz");
                }
                else
                {
                    arr.push(i);
                }
            }
            return arr.toString();
 
         },



        /**
         * Show FizzBuzz question and options
         *
         * @returns void.
         */

         "showQuestion": function() {
            
            this.question.innerHTML = this.questions;
            this.question.innerHTML += "<p><b>" + this.fizzandBuzz(15,29) + "</b></p>" + "<br>";
            this.question.innerHTML += this.btnOptions;

         },


        /**
         * Reset function for test 2
         *
         * @returns void.
         */

        "reset": function() {
            test.totalScore -= test2.score;
            test2.score = 0;
            playTest2();
            var button = document.getElementById("next");
            if(button) {
                removeButton();
            }
            test.gameStatus.innerHTML = "";
        }




    };

    var test3 = {

        "container": document.getElementById('questions'),
        'flags': [['Afghanistan','<div id="Afghanistan" class="afghanistanflag"><div class="afghanistanleft"></div><div class="afghanistanright"></div><div class="afghanistancenter"></div>'],['Sweden','<div id="Sweden" class="sweflag"><div class="sweverticalline"></div><div class="swehorizontalline"></div></div>'],['Canada','<div id="Canada" class="canadaflag"><div class="canadaleft"></div><div class="canadaright"></div><div class="candaCentreLeaf"></div></div>'],['Denmark','<div id="Denmark" class="danmarkflag"><div class="danmarkverticalline"></div><div class="danmarkhorizontalline"></div></div>'],['Finland','<div id="Finland" class="finflag"><div class="finverticalline"></div><div class="finhorizontalline"></div></div>'],['Afghanistan','<div id="Afghanistan" class="afghanistanflag"><div class="afghanistanleft"></div><div class="afghanistanright"></div><div class="afghanistancenter"></div>'],['Sweden','<div id="Sweden" class="sweflag"><div class="sweverticalline"></div><div class="swehorizontalline"></div></div>'],['Canada','<div id="Canada" class="canadaflag"><div class="canadaleft"></div><div class="canadaright"></div><div class="candaCentreLeaf"></div></div>'],['Denmark','<div id="Denmark" class="danmarkflag"><div class="danmarkverticalline"></div><div class="danmarkhorizontalline"></div></div>'],['Finland','<div id="Finland" class="finflag"><div class="finverticalline"></div><div class="finhorizontalline"></div></div>']],
        "countries": ['Afghanistan', 'Canada', 'Denmark', 'Finland', 'Sweden', 'Afghanistan', 'Canada', 'Denmark', 'Sweden','Finland'],
        "temp": document.getElementsByTagName('td'),
        "score": 0,


        /**
         * initiate table for flags
         *
         * @returns void.
         */

        "initiateGameArea": function() {
            this.container.innerHTML = '<table id="gameArea"><tr><td>?</td><td>?</td><td>?</td><td>?</td><td>?</td></tr><tr><td>?</td><td>?</td><td>?</td><td>?</td><td>?</td></tr></table>';
        },


        /**
         * Show all flags
         *
         * @Param array flags
         *
         * @returns void.
         */

         "showAllFlags": function(allFlags) {
            for (var i = 0; i < this.temp.length; i++) {
                this.temp[i].innerHTML = allFlags[i][1];

                //make flags unclickable
                this.temp[i].classList.add("unclickable");
            }
            
         },

        
        /**
         * Show flag
         *
         * @Param int id of flag
         *
         * @returns void.
         */

         "showFlags": function(id) {
            var currBlock = document.getElementById(id);
            currBlock.innerHTML = this.flags[id][1];
            currBlock.onclick = function(){ window.alert('You have to choose another card'); };

         },



        /**
         * Hide All Flags
         *
         * @returns void.
         */

         "hideFlags": function() {
            var td = document.getElementsByTagName('td');
            for (var i = 0; i < td.length; i++) {
                td[i].innerHTML = "?";
                td[i].classList.remove('unclickable');
            }
         },


        /**
         * Show Countries List
         *
         * @param array of countries
         *
         * @returns void.
         */

         "showCountriesList": function(countriesList) {
            var countries = document.getElementById("countriesList");

            for (var i = 0; i < countriesList.length; i++) {
                countries.innerHTML += "<li>" + countriesList[i] + "</li>";
            }
         },

        /**
         * Reset function for test 3
         *
         * @returns void.
         */

        "reset": function() {
            var button = document.getElementById("next");
            if(button) {
                removeButton();
            }
            test3.countries = ['Afghanistan', 'Canada', 'Denmark', 'Finland', 'Sweden', 'Afghanistan', 'Canada', 'Denmark', 'Sweden','Finland'];
            test.totalScore -= test3.score;
            test3.score = 0;
            document.getElementById("countriesList").innerHTML = "";
            playTest3();
        }

    };



    /**
     * Main functions that prints out the info about the game and displays start button
     *
     * @returns void.
     */

    function main() {
        test.showInfo();
        nextButton(playTest,"Start Test 1");
    }

    /**
     * Function for Test 1
     *
     * @returns void.
     */

    function playTest()
    {
        //Remove Next button on Restart / Next text
        var button = document.getElementById("next");
        if(button) {
            removeButton();
        }
        
        document.getElementById("testTitle").innerHTML = "<h1>test 1</h1><hr>";
        if(test.currentQuestion < test.questions.length)
        {
            var scores = document.getElementById("score");
            scores.innerHTML = "<h2>Score: " + test.score+ "</h2>";
            restartButton(test.reset,"Restart");
            
            test.gameStatus.style.color = "";
            test.gameStatus.innerHTML = "";

            test.setQuestion(test.currentQuestion);

            var buttons = document.querySelectorAll(".btn");

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function() {
                    var guessedAnswer = this.textContent;
                    if(test.answers.indexOf(guessedAnswer) != -1)
                    {
                        test.gameStatus.style.color = "green";
                        test.gameStatus.innerHTML = "<h2>You answer is correct!</h2>";
                        test.score += 3;
                        test.totalScore = test.score;
                        scores.innerHTML = "<h2>Score: " + test.totalScore + "</h2>";
                        test.currentQuestion++;
                        nextButton(playTest,"Next");
                        disableButtons();
                      
                    }

                    else {

                        test.gameStatus.style.color = "red";
                        test.gameStatus.innerHTML = "<h2>Your answer is incorrect!</h2>";
                        test.gameStatus.innerHTML += "Correct answer is " + "<b>"+test.answers[test.currentQuestion]+"<b>";
                        test.currentQuestion++;
                        nextButton(playTest,"Next");
                        disableButtons();
                        
                    }
                    };

                }
    }

    else {

        test.gameStatus.innerHTML = "";
        document.getElementById("score").style.visibility = "hidden";
        playTest2();
        
    }

    }

        /**
         * Function for Test 2
         *
         * @returns void.
         */

        function playTest2() {
        document.getElementById("testTitle").innerHTML = "<h1>test 2</h1><hr>";
        test2.showQuestion();
        var scores = document.getElementById("score");
        scores.innerHTML = "<h2>Score: " + test.totalScore + "</h2>";
        restartButton(test2.reset,"Restart");
        document.getElementById("score").style.visibility = "visible";
        var buttons = document.querySelectorAll(".btn");

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.marginLeft = "5px";
            buttons[i].onclick = function() {
                var guessedAnswer = this.textContent;
                var currentTest2Score = 0;
                if(test2.answer.indexOf(guessedAnswer) != -1)
                {
                    test.gameStatus.style.color = "green";
                    test.gameStatus.innerHTML = "<h2>You answer is correct!</h2>";
                    test2.score += 3;
                    currentTest2Score += 3;
                    test.totalScore += currentTest2Score;
                    scores.innerHTML = "<h2>Score: " + test.totalScore + "</h2>";
                    nextButton(test3Info,"Start Test 3");
                    disableButtons();
                      
                    }

                    else {
                            test.gameStatus.style.color = "red";
                            test.gameStatus.innerHTML = "<h2>Your answer is incorrect! </h2>" + "Correct answer is " + "<b>"+test2.answer[0]+"</b>";
                            nextButton(test3Info,"Start Test 3");
                            disableButtons();
                    }

            };
        }


    }

    /**
     * Function for Test 3 information
     *
     * @returns void.
     */

    function test3Info() {
        document.getElementById("testTitle").innerHTML = "<h1>test 3</h1><hr>";
         //clear all stuff from previous page
        document.getElementById("score").style.visibility = "hidden";
        test.gameStatus.innerHTML = "";
        var button = document.getElementById("next");
        if(button) {
            removeButton();
        }
        
        test3.container.innerHTML = "<p>In this test 10 flags will be presented, you got 5 seconds to memorize flags positions and flags will disappear after 5 seconds.</p> <p>Your job is to uncover them one by one in order, by following a list that will be given below.</p><p>Uncovering the right flag will give you 1 point. Clicking on a wrong flag will terminate the test.</p>";
        nextButton(playTest3,"Start Test 3");
       
    }

    /**
     * Function for Test 3
     *
     * @returns void.
     */

    function playTest3() {
        var button = document.getElementById("next");
        if(button) {
            removeButton();
        }

        document.getElementById("testTitle").innerHTML = "<h1>test 3</h1><hr>";
        test.gameStatus.innerHTML = "";
        test3.initiateGameArea();
        var shuffleFlags = shuffleArray(test3.flags);
        test3.showAllFlags(shuffleFlags);
        setTimeout(test3.hideFlags, 5000);
        var scores = document.getElementById("score");
        scores.innerHTML = "<h2>Score: " +  test.totalScore + "</h2>";
        restartButton(test3.reset,"Restart");
        document.getElementById("score").style.visibility = "visible";
        
        var shuffleCountriesList = shuffleArray(test3.countries);
        test3.showCountriesList(shuffleCountriesList);
        
        var countryId = 0;
        for (var i = 0; i < test3.temp.length; i++) {
            test3.temp[i].setAttribute('id', i);
            test3.temp[i].onclick = function() {
                test3.showFlags(this.id);
                var currBlock = document.getElementById(test3.flags[this.id][0]);

                var currentTest3Score = 0;
                if(shuffleCountriesList.indexOf(currBlock.id) === 0)
                {
                    shuffleCountriesList.splice(0,1);
                    var countryName = document.getElementsByTagName("li");
                    countryName[countryId].style.textDecoration = "line-through";
                    countryName[countryId].style.color = "green";
                    countryId++;
                    test3.score++;
                    currentTest3Score++;
                    test.totalScore += currentTest3Score;
                    scores.innerHTML = "<h2>Score: " + test.totalScore + "</h2>";
                    if(countryId == test3.flags.length)
                    {
                        setTimeout(results,1000);
                    }
                }
                else {
                    results();
            
                }

            };

        }
    }

    /**
     * Function for Results that shows results of all tests.
     *
     * @returns void.
     */

    function results() {
        
        document.getElementById("testTitle").innerHTML = "<h1>results</h1>";
        test.gameStatus.innerHTML = "";
        document.getElementById("score").innerHTML = "";
        document.getElementById("countriesList").innerHTML = "";
        test3.container.style.textAlign = "center";
        test3.container.style.fontSize = "x-large";
        test3.container.innerHTML = "<h3>Total Score </h3> You scored " + "<b>" + test.totalScore + "</b>" + " out of 23 <br>" + "Rating: "; 
        switch(test.totalScore)
        {
            case 0:
            case 1:
            case 2:
            case 3:
            test3.container.innerHTML += "*<hr>";
            break;
            case 4: 
            case 5: 
            case 6: 
            case 7:
            test3.container.innerHTML += "**<hr>";
            break;
            case 8:
            case 9:
            case 10:
            case 11: 
            case 12:
            test3.container.innerHTML += "***<hr>";
            break; 
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            test3.container.innerHTML += "****<hr>";
            break; 
            case 18: 
            case 19:
            case 20:
            case 21:
            case 22:
            test3.container.innerHTML += "*****<hr>";
            break;

        }
        test3.container.innerHTML += "<h4>Test 1 Score</h4>" + "<b>" + test.score + "</b> out of 9 <hr>";
        test3.container.innerHTML += "<h4>Test 2 Score</h4>" + "<b>" + test2.score + "</b> out of 3 <hr>";
        test3.container.innerHTML += "<h4>Test 3 Score</h4>" + "<b>" + test3.score + "</b> out of 10 <hr>";    
        nextButton(test.reset,"Play Again");

    }


    // HELPERS

    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

    function nextButton(target,textContent) {
        var restart = document.createElement("BUTTON");
        restart.className = "next";
        restart.id = "next";
        restart.textContent = textContent;
        document.getElementById("content").appendChild(restart);
        restart.onclick = function() {
            target();
        };
    }

    function restartButton(target,textContent) {
        var restart = document.createElement("BUTTON");
        restart.className = "restart";
        restart.textContent = textContent;
        document.getElementById("testTitle").appendChild(restart);
        restart.onclick = function() {
            target();
        };
    }

    function removeButton() {
        var button = document.getElementById('next');
        button.parentNode.removeChild(button);
        return false;
    }

    function disableButtons() {
        var buttons = document.querySelectorAll(".btn");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

    }


    main();


})();
