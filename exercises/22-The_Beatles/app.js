function sing() {
    let string = '';
    for (let i=0; i<11; i++) {
        if (i==4) string += 'there will be an answer, ';
        else if (i==10) string += 'whisper words of wisdom, let it be';
        else string+= 'let it be, ';
        }
    return string; 
} 

//Your code above ^^^
console.log(sing());