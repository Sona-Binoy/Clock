function getTime()
{
    const time=new Date()
    console.log(time);

    const hour=time.getHours()
    console.log(hour);

    const mint=time.getMinutes()
    console.log(mint);

    const second=time.getSeconds()
    console.log(second);
   
    result.innerHTML=`${hour}:${mint}:${second} ${hour>=12?'PM':'AM'}`

    setTimeout(()=>{getTime()},1000)
}
getTime()