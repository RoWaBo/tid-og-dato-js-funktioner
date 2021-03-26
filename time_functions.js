export default (() => {
    const date = new Date()

    const addZero = (a) => (a < 10) ? a = "0" + a : a;
    
    return {
        currentDate: () => {
            let day = addZero(date.getDate())
            let month = addZero(date.getMonth() + 1) 
            let year = date.getFullYear()

            return `${day}-${month}-${year}`
        },
        currentTime: () => {
            let minutes = addZero(date.getMinutes()) 
            let hours = addZero(date.getHours()) 

            return `${hours}:${minutes}`
        },
        
        randomNumberBetween: (min,max) => Math.floor(Math.random() * (max - min + 1)) + min,

        countDownFrom: (number, timeToComplete) => {
            console.log('Use '+timeToComplete+'s to count down from ' + number)

            const callbackInterval = 1000 / (number / timeToComplete)

            const timer = setInterval(() => {
                number <= 0 
                ? (clearInterval(timer), console.log('Count down stopped')) 
                : (number--, console.log(number))
            }, callbackInterval)
        }
    }
})();
