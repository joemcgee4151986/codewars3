function countPositivesSumNegatives(input) {
  const answer = []
  let postitiveSum = 0
  let negativeSum = 0
  if (input  && input.length) {
      for(let i = 0; i<input.length; i++){
          if(input[i]>0){
              postitiveSum +=1
          }else{
              negativeSum +=input[i]
          }
          }
          answer.push(postitiveSum)
          answer.push(negativeSum)
      }
      return answer
    }




console.log(countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,34,-11,-12,-13,-14,-15,-16]));
