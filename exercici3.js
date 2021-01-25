      //Exercici 3
      const name = ['A','N','A','S','T','A','S','I','A'];
      const myMap = new Map();

     name.forEach(letter => {
        if(myMap.has(letter)){
          let count = myMap.get(letter);
          myMap.set(letter, count +1);
          }else{
              myMap.set(letter, 1);
          }
          
      });
     
      console.log(myMap);