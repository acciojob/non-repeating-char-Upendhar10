function firstNonRepeatedChar(str) {
 // Write your code here
	let freq = new Array(26).fill(0);
	// pre-compute
	for(let i=0; i<str.length; i++){
		let idx = str.charCodeAt(i) - 'a'.charCodeAt(0);
		freq[idx] += 1;
	}

	// fetch
	for(let i=0; i<str.length; i++){
	    let idx = str.charCodeAt(i) - 'a'.charCodeAt(0);
		if(freq[idx] === 1){
			return str[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
