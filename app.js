function Fandom(){
   let clickme = document.getElementById('click-me')
   alert('EXO-L')
   
}

function Bias(){
   let clickme = document.getElementById('click-me')
   alert('Annyeong Eriya')
   confirm ('who Is Your Bias ??')
   prompt ('Enter Name Your Bias')
}

let hari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function setTime(){

   let tanggal = new Date()
   let jam = tanggal.getHours().toLocaleString('id-ID', {minimumIntegerDigits:2})
   let menit = tanggal.getMinutes().toLocaleString('id-ID', {minimumIntegerDigits:2})
   let detik = tanggal.getSeconds().toLocaleString('id-ID', {minimumIntegerDigits:2})
   let tgl = tanggal.getDate().toLocaleString('id-ID', {minimumIntegerDigits:2})
   let bulan = tanggal.toLocaleString('id-ID', {month : 'long'})
   let tahun = tanggal.getFullYear()

   let setJam = jam + ":" + menit + ":" + detik
   const setTanggal = hari[tanggal.getDay()] + ',' + " " + tgl + " " + bulan + " " + tahun

   document.getElementById('jam').innerHTML = setJam
   document.getElementById('tanggal').innerHTML = setTanggal

   setTimeout('setTime()', 1000)
}

setTime()