function checkPrime(a){

if(a<=0)
return false;

for(let i=2; i<Math.sqrt(a); i++){
   if(a%i===0)
   return false;
}
 return true;

}

checkPrime ? console.log('prime') : console.log('Not prime);