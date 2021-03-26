export default (() => {
    const date = new Date()

    return {
        currentDate: () => {
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()

            if (day < 10) day = "0" + day;    
            if (month < 10) month = "0" + month;

            return `${day}-${month}-${year}`
        },
        currentTime: () => {
            let minutes = date.getMinutes()
            let hours = date.getHours()

            if (minutes < 10) minutes = "0" + minutes;    
            if (hours < 10) hours = "0" + hours;

            return `${hours}:${minutes}`
        }
    }
})();
