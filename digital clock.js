
let ampm = document.getElementById('ampm') // getting the element to change AM and PM

function displaytime(){
    let datetime = new Date()
    let hr = datetime.getHours()
    let min = datetime.getMinutes()
    let ms = datetime.getSeconds()
    document.getElementById('hours').innerHTML = hr
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = ms
    if(hr>12){
        hr = hr - 12 // (eg) if hr = 13, 13-12 = 1
        ampm.innerHTML = 'PM' // if hour is greater than 12, then its PM
    }
    else{
        ampm.innerHTML = "AM"
    }
    if(ms<10){
        document.getElementById('seconds').innerHTML = '0'+ ms  // to rectify the seconds as single digit
    }
   if(min<10){
    document.getElementById('mins').innerHTML = '0'+ min // to rectify the minutes as single digit
   }
   if(hr>=0 && hr<10){
    document.getElementById('hours').innerHTML = '0'+ hr // to rectify the hours as single digit
   }
   else{
    document.getElementById('hours').innerHTML = hr // to return the twodigit number without getting 0 before
   }
   
// hours are always in 24 hours format(i.e.) for 1 o clock, itll show as 13.so hr>12 means itll start with 13.so 13-12=1
// so if it came as 13, itll show it as 1 o clock

}
setInterval(displaytime,1000)

// the function is called every 1000milliseconds so that we can update our hour,minute,second and date