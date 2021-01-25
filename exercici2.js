  //Exercici 2
        
  const vocales = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
        
  const search = nombre =>{nombre.split('').forEach(letra=>{
      if(vocales.indexOf(letra)>-1){
          console.log(`${letra} es vocal`);
      } else if(vocales.indexOf(letra) != vocales && isNaN(letra)){
          console.log(`${letra} es una consonante`);
      }else {
      console.log(`${letra} es un numero`);
      }
  });
}
search("Ana5tasia");