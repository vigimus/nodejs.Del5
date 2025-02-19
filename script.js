//Här importerar vi FS modullen från Node
//fs står för "file system"
//HTML5 använder utf8 om vi inte gör något med datat
//ASCII fanns innan för latinska språk
const fs = require('fs')

//Om man bara gör node script.js nu så får man en buffer
//Om vi inte slänger på .toString()

//Denna funktionen --> är asynconise
fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log("errror");
	}
	console.log('Async', data.toString());
})

//Kommer läsas in förre 1:an, då den är syncronise och
//inte bara fortsätter läsa rader av kod efter
//OBS! använd inte denna för stora filer kommer stanna upp
//hela hemsidan och bara snurra och snurra
const file = fs.readFileSync('./hello.txt',);
console.log('Sync', file.toString());

//Något häftigt med appendFile är att det skapar en ny fil
//åt oss om vi själva glömt skapa den
fs.appendFile('./hello.txt', ' This is so cool!', err => {
	if (err) {
		console.log(err);
	}
})

//Gjorde att vi skapade en ny fil som hette bye.txt
//Skrev texten inuti "Sad to see you go"
//SKRIVA
//Kommenterar ut så inte den kommer ivägen för RADERA nedan
//fs.writeFile('bye.txt', 'Sad to see you go', err => {
//	if (err) {
//		console.log(err)
//	}
//})

//RADERA 
//Tar bort filen bye.txt som skapades förut
fs.unlink('./bye.txt', err => {
	if (err) {
		console.log(err);
	}
console.log('Inception')
}) 














