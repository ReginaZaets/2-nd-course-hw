const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));

 function isPositive(number) {
        return number > 0
    }
    function isMale(name) {
    return name.gender === 'male';
    }
    function filter(array, ruleFunction) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]); 
        }
        return result;
    }
}    
    console.log(filter([3, -4, 1, 9], isPositive)); 
    const people1 = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];
    console.log(filter(people1, isMale));

    let currenDate =  setInterval(() => { 
        console.log(new Date())
    }, 3000);
    setTimeout(() => { 
        clearInterval(timerId); 
        console.log('30 секунд прошло');
    }, 30000);

    function delayForSecond(callback) {
        setTimeout( () => {
            callback();
        }, 1000)
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   })

    function delayForSecond(cb) {
        setTimeout(() => {
            console.log(`Прошла одна секунда`);
            if(cb)  { cb(); }
        }, 1000)
   }
   function sayHi(name) {
    console.log(`Привет, ${name}!`);
   }
   
   delayForSecond( () => sayHi('Глеб'));

