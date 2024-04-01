
function showPercentage(){
  let sub = Math.round(Math.random()*99)
    if (firstname.value === "" || secondname.value === "") {
     alert("Please enter your name")
    }
    else{
      let maleName = document.getElementById("firstname").value
      let femaleName = document.getElementById("secondname").value

      document.getElementById("loverNames").style.display="block"
      loverNames.innerHTML= `${maleName} & ${femaleName} 💝`
     if (sub >= 0 && sub < 20) {
         gauge.innerHTML = `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `Behold, it seems your journey together is but at its genesis, akin to a sapling awaiting the nourishment of rain and sunlight. Let us recall the words of Ecclesiastes 4:9-10, 'Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.' 🌱 May this be a time for you to draw closer in understanding and fortitude, as you seek to build a foundation that withstands the tests of time.`
       
     }                    
     else if(sub >= 20 && sub < 40){
         gauge.innerHTML =  `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `Lo, there is a flicker of warmth amidst the chill, a spark yearning to be kindled into a flame. May you heed the counsel of Ephesians 4:2-3, 'Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace.' 🔥 Embrace patience and understanding, as you nurture the seed of your bond into a flourishing garden of love.`
     }
     else if (sub >= 40 && sub < 60) {
         gauge.innerHTML = `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `Rejoice, for there is progress in the fields of your hearts, a budding fellowship blossoming with promise. Let us remember the words of Colossians 3:14, 'And over all these virtues put on love, which binds them all together in perfect unity.' 💖 May your journey together be guided by love, binding you in unity as you continue to sow the seeds of companionship and understanding.`
     }
     else if (sub >= 60 && sub < 80) {
         gauge.innerHTML =  `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `Verily, love permeates the very air around you, a testament to the grace and favor bestowed upon your union. Let us heed the wisdom of Proverbs 18:22, 'He who finds a wife finds what is good and receives favor from the Lord.' 🌟 Embrace the blessings of the Almighty as you continue to build your relationship upon the solid rock of love and faith.`	
         }
     else if (sub >= 80 && sub <= 100) {
         gauge.innerHTML =  `<p style='font-size:100px'>${sub}%</p>`
         complement.innerHTML = `Behold, your love is a radiant beacon amidst the darkness, a testament to the enduring power of devotion and unity. Let us reflect upon the timeless words of 1 Corinthians 13:4-7, 'Love is patient, love is kind...'. 💫 May your love be a shining example of these virtues as you journey forward hand in hand, guided by the light of divine love.`
     }
    }
    document.getElementById('firstname').value = ""
    document.getElementById('secondname').value = ""
 }