export default (() => {
    const date = new Date()

    let addZero = (a) => (a < 10) ? a = "0" + a : a;
        
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
        randomNumberBetween: (x,y) => Math.floor(Math.random() * (y - x + 1)) + x
    }
})();
