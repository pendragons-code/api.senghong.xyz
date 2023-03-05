async function arrayResultBuilder(numberOfRequestedGifs, primaryArray) {
	let arrayOfAnimotes = []
	for(let i = 0; i < numberOfRequestedGifs;) {
		let randomGifGenerator = primaryArray[Math.floor(Math.random() * primaryArray.length)]
		if(!arrayOfAnimotes.includes(randomGifGenerator)){
			++i
			arrayOfAnimotes.push(randomGifGenerator)
		}
	}
	return arrayOfAnimotes
}
module.exports = { arrayResultBuilder }
