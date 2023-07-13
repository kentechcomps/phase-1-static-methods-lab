class Formatter {
  //add static methods here
  static capitalize (){
    let j = 'Jek'
    let capitalizedj = j.charAt(0).toUpperCase() + j.slice(1)
    return capitalizedj;
  }
 static sanitize (){
  let j = 'jek'
  const pattern = /[^a-zA-Z0-9-' ]/g;
   sanitizedword = j.replace(pattern , '')
   console.log(sanitizedword);
 }
  static titleize(){
    let word = 'The load of rings'

    wordstobexcluded = [ 'a','an', 'but','of','and','for','at' ,'by' ,'' ,'from' ]
   //make the String an array
   let arrayofwrds = word.toLowerCase().split('')
   let capitlisedwords =arrayofwrds.charAt([0]).toUpperCase() + arrayofwrds.slice(1)

   for (let i = 1; i < capitlisedwords.length; i++) {
    if (!wordstobexcluded.includes(capitlisedwords[i])) {
      capitlisedwords[i] = charAt([0]).toUpperCase() + arrayofwrds.slice(1)(capitlisedwords[i]);

     capitlisedwords.join('')
    console.log(capitlisedwords);


    }
  }
   

  }


}
