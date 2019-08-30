console.log('Pet Adoptions');

const pets = [
    {
        name: "Chester",
        color: "Orange",
        specialSkill: "Ruining everything.",
        type: "Dog",
        imageUrl: "https://vignette.wikia.nocookie.net/villains/images/3/31/Doggymon.png/revision/latest?cb=20190228004606"
      },
    {
        name: "Dingleberry",
        color: "Brown",
        specialSkill: "Never putting on a brave face.",
        type: "Dino",
        imageUrl: "https://vignette.wikia.nocookie.net/thedigitalwar/images/f/f6/Arzatrans1.png/revision/latest?cb=20130124024153"
    },
  
    {
        name: "Keanu",
        color: "Red",
        specialSkill: "Proficient in cuteness",
        type : "Dino",
        imageUrl: "https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dw239e79ab/27457_27458x.jpg?sw=600&sh=600&sm=fit&q=70"
    },
      {
        name: "Poopmouth",
        color: "Blue",
        specialSkill: "Fluent in small talk.",
        type: "Dog",
        imageUrl: "https://vignette.wikia.nocookie.net/digimon/images/1/15/Gaomon_b.jpg/revision/latest?cb=20090130052203"
      },
      {
        name: "Mittens",
        color: "Red",
        specialSkill: "Do you even lift bro?",
        type: "Cat",
        imageUrl: "https://vignette.wikia.nocookie.net/deathbattle/images/4/43/Lion-O_HQ.png/revision/latest/scale-to-width-down/300?cb=20140706005956"
      },
      {
        name: "Dingus",
        color: "Green",
        specialSkill: "Nothing...literally nothing.",
        type: "Dino",
        imageUrl : "https://vignette.wikia.nocookie.net/landbeforetime/images/9/96/Spike_infobox.png/revision/latest?cb=20180422005006"
      }
    ];

    console.log(pets.indexOf("dino"));

    const printToDom = (toPrint, divId) => {
        document.getElementById(divId).innerHTML = toPrint;
      }
        const petCardPrinter = (petArr) => {
            let domString = ''
            for (let i = 0; i < petArr.length; i++) {
                const pet = petArr[i]
                domString += `
                    <div class="pet-card">
                        <h2>${pet.name}</h2>
                        <img src=${pet.imageUrl}/>
                        <h4>${pet.color}</h4>
                        <h4>${pet.specialSkill}</h4>
                        <h3>${pet.type}</h3>
                    </div>
                `
            }
            printToDom(domString, 'pets-div')
          }

            const buttonClick = (e) => {
              console.log(e)
              const type = e.target.id
              const selectedPetCards = []
              for (let i = 0; i < pets.length; i ++) {
                  const pet = pets[i]
                  if (pet.type === type) {
                      selectedPetCards.push(pet)
                  }
              }

              if (type === 'All') {
                petCardPrinter(pets);
              } else {
              petCardPrinter(selectedPetCards);
              }
      }


      document.getElementById('All').addEventListener('click', buttonClick)
      document.getElementById('Cat').addEventListener('click', buttonClick)
      document.getElementById('Dog').addEventListener('click', buttonClick)
      document.getElementById('Dino').addEventListener('click', buttonClick)

      document.getElementById('Dino').style.background='#FFA500';
      document.getElementById('Cat').style.background='#00FFFF';
      document.getElementById('Dog').style.background='#90EE90';

      petCardPrinter(pets)