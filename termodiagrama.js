// Set car Registration Number
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const regNo = params.regNo;
document.getElementById('regNo').innerHTML = regNo.toUpperCase()

// Set date 
const date = new Date();
document.getElementById('today').innerHTML = `${date.getDay()}-${date.getMonth()+1}-${date.getFullYear().toString().slice(2,)}`

// Set start hour
const h = Math.floor(5 + Math.random()*(7 - 5))
const m = Math.floor(30 + Math.random()*(59 - 30))
const s = Math.floor(0 + Math.random()*(59 - 0))

document.getElementById('startTime').innerHTML = `${h}:${m}:${s}`

// Set interval hours
let i = 0
let html = ''
let hours = []
let startDate = new Date(Date.parse(`${date.toDateString()} ${h}:${m}:${s} GMT+0200`))
while (startDate < Date.now()) {
    hours.push(startDate.toLocaleTimeString([], { timeStyle: "short" }))
    startDate = new Date(Date.parse(startDate) + 900 * 1000)
}
hours.push(new Date(Date.now()).toLocaleTimeString([], { timeStyle: "short" }))

hours.reverse().forEach(element => {
    html += `${i}&nbsp;&nbsp;${date.getDay()}-${date.getMonth()+1}&nbsp;&nbsp;${element}&nbsp;&nbsp;${(Math.random() * (4 - 0) + 0).toFixed(1)}<br>`
    i+=1
});

document.getElementById('values').innerHTML = html