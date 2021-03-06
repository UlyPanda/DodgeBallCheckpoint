'use strict';
const main = require('./main.js')
const assert = require('assert')

const arrayOfPeople = [
    {
        id: 1,
        name: "Jimmy Neutron",
        age: 21,
        skillSet: "engineering",
        placeBorn: "Columbus, Ohio",
        canThrowBall: true,
        canDodgeBall: true,
        hasPaid: false,
        isHealthy: true,
        yearsExperience: 2
    },
        {
            id: 2,
            name: "Charles Young",
            age: 55,
            skillSet: "welding",
            placeBorn: "Omaha, Nebraska",
            canThrowBall: true,
            canDodgeBall: false,
            hasPaid: true,
            isHealthy: true,
            yearsExperience: 3
        },
        {
            id: 3,
            name: "Judy Twilight",
            age: 35,
            skillSet: "fishing",
            placeBorn: "Louisville, Kentucky",
            canThrowBall: true,
            canDodgeBall: false,
            hasPaid: true,
            isHealthy: true,
            yearsExperience: 3
        },
        {
            id: 4,
            name: "Cynthia Doolittle",
            age: 20,
            skillSet: "tic tac toe",
            placeBorn: "Pawnee, Texas",
            canThrowBall: true,
            canDodgeBall: false,
            hasPaid: true,
            isHealthy: true,
            yearsExperience: 3
        },
        {
            id: 5,
            name: "John Willouby",
            age: 28,
            skillSet: "pipe fitting",
            placeBorn: "New York, New York",
            canThrowBall: true,
            canDodgeBall: false,
            hasPaid: true,
            isHealthy: true,
            yearsExperience: 3
        },
        {
            id: 6,
            name: "Stan Honest",
            age: 20,
            skillSet: "boom-a-rang throwing",
            placeBorn: "Perth, Australia",
            canThrowBall: true,
            canDodgeBall: false,
            hasPaid: true,
            isHealthy: true,
            yearsExperience: 3
        },
        {
            id: 7,
            name: "Mia Watu",
            age: 17,
            skillSet: "acrobatics",
            placeBorn: "Los Angeles, California",
            canThrowBall: true,
            canDodgeBall: false,
            hasPaid: true,
            isHealthy: true,
            yearsExperience: 3
        },
        {
            id: 8,
            name: "Walter Cole",
            age: 32,
            skillSet: "jump rope",
            placeBorn: "New Orleans, Louisiana",
            canThrowBall: true,
            canDodgeBall: false,
            hasPaid: true,
            isHealthy: true,
            yearsExperience: 3
        },
    ]
    
    
    const listOfPlayers = []
    const blueTeam = []
    const redTeam = []
    
    class Player {
        constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
            this.id = id;
            this.name = name;
            this.age = age;
            this.skillSet = skillSet;
            this.placeBorn = placeBorn;
            this.canThrowBall = canThrowBall;
            this.canDodgeBall = canDodgeBall;
            this.hasPaid = hasPaid;
            this.isHealthy = isHealthy;
            this.yearsExperience = yearsExperience;
        }
        assignBlue = () => {
            blueTeam.push(this);
          }
          assignRed = () => {
            redTeam.push(this);
          }
          assignPlayer = () => {
            listOfPlayers.push(this);
          }
        }
        
        class RedTeammate extends Player {
          constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){ 
            super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
            this.mascot = 'Cliffard';
            this.color = 'Red';
           }
        }
        
        class BlueTeammate extends Player {
          constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){ 
            super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
            this.mascot = 'Blue-Bulldogs';
            this.color = 'Blue';
           }
        }
      
        const listPeopleChoices = () => {
            const listElement = document.getElementById('people');
            arrayOfPeople.map(person => {
              const li = document.createElement('li');
              const buttonPlayer = document.createElement('button');
              buttonPlayer.innerHTML = 'Make Player';
              buttonPlayer.addEventListener('click', function() {
                makePlayer(person.id);
                listElement.removeChild(li);
              })
              li.appendChild(buttonPlayer);
              li.appendChild(document.createTextNode(`${person.name} - Years of Experience: ${person.yearsExperience}`));
              listElement.append(li);
            })
          }
      
          module.exports = { listPeopleChoices }
    
      const makePlayer = (person) => {
          const listElement = document.getElementById('players')
          let findPlayer = arrayOfPeople.find(result => {
              return result.id == person;
          })
          let playerIndex = arrayOfPeople.indexOf(findPlayer);
          arrayOfPeople.splice(playerIndex, 1);
          let dBPlayer = new Player(
              findPlayer.id,
              findPlayer.name,
              findPlayer.age,
              findPlayer.skillSet,
              findPlayer.placeBorn,
              findPlayer.canThrowBall,
              findPlayer.canDodgeBall,
              findPlayer.hasPaid,
              findPlayer.isHealthy,
              findPlayer.yearsExperience
          )
          dBPlayer.assignPlayer();
          const li = document.createElement('li');
          const redButton = document.createElement('button');
          const blueButton = document.createElement('button');
          redButton.innerHTML = "Assign to Red team";
          blueButton.innerHTML = "Assign to Blue team";
          redButton.addEventListener('click', function(){
              addToRed(dBPlayer.id);
              listElement.removeChild(li);
          })
          blueButton.addEventListener('click', function() {
              addToBlue(dBPlayer.id);
              listElement.removeChild(li);
          })
          li.appendChild(redButton);
          li.appendChild(blueButton);
          li.appendChild(document.createTextNode(`${dBPlayer.name}= Paid: ${dBPlayer.hasPaid}`));
          listElement.append(li);
    }
    
    const addToRed = (id) => {
        const listElement = document.getElementById('red');
        let findPlayer = listOfPlayers.find(result => {
            return result.id == id;
        })
        let playerIndex = listOfPlayers.indexOf(findPlayer);
        listOfPlayers.splice(playerIndex, 1);
        let dBPlayer = new RedTeammate(
            findPlayer.id,  
            findPlayer.name,
            findPlayer.age,
            findPlayer.skillSet,
            findPlayer.placeBorn,
            findPlayer.canThrowBall,
            findPlayer.canDodgeBall,
            findPlayer.hasPaid,
            findPlayer.isHealthy,
            findPlayer.yearsExperience,
            findPlayer.mascot,
            findPlayer.color
        )
        dBPlayer.assignRed();
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Player: ${dBPlayer.name} Mascot: ${dBPlayer.mascot} Color: ${dBPlayer.color}`))
        listElement.append(li);
    }
    
    const addToBlue = (id) => {
        const listElement = document.getElementById('blue');
        let findPlayer = listOfPlayers.find(result => {
            return result.id == id;
        })
        let playerIndex = listOfPlayers.indexOf(findPlayer);
        listOfPlayers.splice(playerIndex, 1);
        let dBPlayer = new BlueTeammate(
            findPlayer.id,  
            findPlayer.name,
            findPlayer.age,
            findPlayer.skillSet,
            findPlayer.placeBorn,
            findPlayer.canThrowBall,
            findPlayer.canDodgeBall,
            findPlayer.hasPaid,
            findPlayer.isHealthy,
            findPlayer.yearsExperience,
            findPlayer.mascot,
            findPlayer.color
        )
        dBPlayer.assignBlue();
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Player: ${dBPlayer.name} Mascot: ${dBPlayer.mascot} Color: ${dBPlayer.color}`))
        listElement.append(li);
    }






if(typeof describe === 'function'){
    describe('RedTeammate', function(){
        it('should have Redteam mascot and color along with player attributes', () => {
        let dBPlayer = new RedTeammate(2, 'Jimmy Neutron', 21, 'engineering', 'Columbus, Ohio', true, true, false, true, 2, 'Cliffard', 'Red');
        assert.equal(dBPlayer.mascot, 'Cliffard');
        assert.equal(dBPlayer.color, 'Red');
    });   
  });
    describe('Player', function(){
        it('should have all the attributes and stats of a new player such as name, id, skillSet, etc...', () => {
        let dBPlayer = new Player(2, 'Jimmy Neutron', 21, 'engineering', 'Columbus, Ohio', true, true, false, true, 2, 'Cliffard', 'Red');
        assert.equal(dBPlayer.name, 'Jimmy Neutron');
        assert.equal(dBPlayer.canDodgeBall, true);
        assert.equal(dBPlayer.canThrowBall, true);
        assert.equal(dBPlayer.yearsExperience, 2);
        assert.equal(dBPlayer.hasPaid, false);
        assert.equal(dBPlayer.isHealthy, true);
    });   
  });
    describe('BlueTeammate', function(){
        it('should have Blueteam mascot and color along with player attributes', () => {
        let dBPlayer = new BlueTeammate(3, 'Judy Twilight', 35, 'fishing', 'Louisville, Kentucky', true, true, false, true, 2, 'Blue-Bulldogs', 'Blue');
        assert.equal(dBPlayer.mascot, 'Blue-Bulldogs');
        assert.equal(dBPlayer.color, 'Blue');
    });   
  });
}
