const fibonacci = function(num) {
    if (typeof num !== 'number') {
        num = parseInt(num)
    } else if(num < 0) {
        return 'OOPS'
    }
    let start = 1
    let add = 0;
    const list = []
    list.push(start)
    for (let i = 1; i < num; i++) {
      let addOn = list[list.length-1] + add
      add = list[list.length-1]
      list.push(addOn);
    }
  
    return list[list.length-1]
};



/* 
//1. muodosta algo joka luo fibonacci sarjaa
//2. hae indexOf siitä sarjasta ja sen value
//3. muunna num numeroksi



1. pitäisi saada alkuun numero 1 push uuteen listaan = [1]
seuraavalle kerralla listan viimeisin + 0 = 1  = lista = [1,1] 
seuraavlla kerralla listan viimeisin eli 1 + lisättävä+=listan[i-1] = 2 = [1,1,2]
seuraavalla kerralla listan viimeisin eli 2 + listan[i-1] =  [1,1,2,3]
seraavalla kerralla listan viimeisin eli 3 +listan[i-1] = [1,1,2,3,5]


*/






// Do not edit below this line
module.exports = fibonacci;
