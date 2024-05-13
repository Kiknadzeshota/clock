const hours = document.querySelector(".hours")
const mins = document.querySelector(".mins")
const sec = document.querySelector(".sec")

setInterval(() => {
    let date = new Date()
    h.innerText = (date.getHours()<10 ? "0" : "") + date.getHours()
    m.innerText = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    s.innerText = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds()
},1000)
let h =document.createElement("P")
let m =document.createElement("P")
let s =document.createElement("P")

h.setAttribute("class", "h")
m.setAttribute("class", "m")
s.setAttribute("class", "s")

hours.append(h)
mins.append(m)
sec.append(s)

