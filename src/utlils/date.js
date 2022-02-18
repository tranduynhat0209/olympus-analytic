export const timestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + '-' + day
}
export const timestampToFullDate = (timestamp) =>{
    const date = new Date(timestamp * 1000)
    return date.toDateString()
}
export const timestampToFullHourDate = (timestamp)=>{
    const date = new Date(timestamp * 1000)
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return timestampToFullDate(timestamp) + " / " + hour + ":" + minute + ":" + second
}