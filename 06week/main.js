const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
    
  class Player {
    constructor(name,skillSet,id,age,placeBorn){
      this.name= name;
      this.skillSet= skillSet;
      this.id= id;
      this.age= age;
      this.placeBorn= placeBorn;
      //everything above is like a model.
    }
    
  };
  
  class dodgeBallPlayer extends Player{
    constructor(canThrowball, canDodgeBall, hasPaid, isHealthy, yearsExperience,name,skillSet,id,age,placeBorn){
      super(name,skillSet,id,age,placeBorn);
      this.name= name;
      this.skillSet= skillSet;
      this.id= id;
      this.age= age;
      this.placeBorn= placeBorn;
      this.canThrowball= canThrowball;
      this.canDodgeBall= canDodgeBall;
      this.hasPaid= hasPaid;
      this.isHealthy= isHealthy;
      this.yearsExperience= yearsExperience;
    }
  }
  
  class BlueTeammate {
    constructor(mascot){
      this.mascot= mascot;
  
    }
  }
  
  class RedTeammate {
    constructor(mascot){
      this.mascot= mascot;
    }
  }
    
  function listPeopleChoices() {
    const listElement = document.getElementById('people')
    //on the very top of the page has the list arrOfPeople.
    //
    arrOfPeople.map(person => {
      //
      const li = document.createElement("li")
      //
      const button = document.createElement("button")
      //
      button.innerHTML = "Make Player"
      //
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    });
  }
    
  const makePlayer = (id) => {
    const playerElement= document.getElementById('players')
    listOfPlayers()
  
      //need to create a new player!!!
      let pierre = ('no','no','no','no',1,'pierre','yes', 10,99,'Austin');
       console.log(pierre);
  
        let hannah = ('yes','yes','yes','yes',10,'hannah','yes',9,22,'Dallas');
        console.log(hannah);
  
         let newArrayOfPeople = new Array();
  
     newArrayOfPeople.push(pierre, hannah);
     console.log(newArrayOfPeople);//good job
    
  }
  
    
  const newDodgePlayers= document.createElement("id")
  const button= document.createElement("button")
  button.innerHTML = "submit";
          
  console.log(`li ${id} was clicked!`);
  
  
  let pierre = new dodgeBallPlayer('no','no','no','no',1,'pierre','yes', 10,99,'galveston');
  console.log(pierre);
  
  let hannah = new dodgeBallPlayer('yes','yes','yes','yes',10,'hannah','yes',9,22, 'Dallas');
  console.log(hannah);

  let newArrayOfPeople = new Array();
  
  newArrayOfPeople.push(pierre, hannah);
  console.log(newArrayOfPeople);
  console.log(pierre.id);
