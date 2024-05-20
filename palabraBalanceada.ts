function palabraBalanceada(palabra: string): boolean {
    // constantes
    const longitudDePalabra = palabra.length;
    const mitad = Math.floor(longitudDePalabra / 2);
    const mitad1 = palabra.slice(0, mitad);
    const mitad2 = palabra.slice(mitad);
  
    // Verificar si la palabra es palíndroma
    if (palabra === palabra.split('').reverse().join('')) {
      return true;
    }
  
    // Verificar si el número de letras es par
    if (longitudDePalabra % 2 === 0) {
      let sumamitad1 = 0;
      let mitad1Letras = '';
      for (let letras of mitad1) {
        const indiceL = indiceLetra(letras);
        sumamitad1 += indiceL;
        mitad1Letras += `${letras}(${indiceL}) `;
      }
  
      let summitad2 = 0;
      let mitad2Letras = '';
      for (let letras of mitad2) {
        const indiceL = indiceLetra(letras);
        summitad2 += indiceL;
        mitad2Letras += `${letras}(${indiceL}) `;
      }
  
      // Imprimir los valores de cada letra
      console.log(`First half: ${mitad1Letras}`);
      console.log(`Second half: ${mitad2Letras}`);
  
      // verifico si es igual la suma de cada lado
      return sumamitad1 === summitad2;
    } else {
      //si es impar ignorar la de enmedio
      let sumamitad1 = 0;
      let mitad1Letras = '';
      for (let i = 0; i < mitad; i++) {
        const letras = palabra[i];
        const indiceL = indiceLetra(letras);
        sumamitad1 += indiceL;
        mitad1Letras += `${letras}(${indiceL}) `;
      }
  
      let summitad2 = 0;
      let mitad2Letras = '';
      for (let i = mitad + 1; i < longitudDePalabra; i++) {
        const letras = palabra[i];
        const indiceL = indiceLetra(letras);
        summitad2 += indiceL;
        mitad2Letras += `${letras}(${indiceL}) `;
      }
  
      //aca imprimo para ver que me tira si la palabra es impar en cada mitad
      console.log(`First half: ${mitad1Letras}`);
      console.log(`Second half: ${mitad2Letras}`);
  
      // checo si es igual la suma de cada lado
      return sumamitad1 === summitad2;
    }
  }
  
  function indiceLetra(letras: string): number {
    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(letras) + 1;
  }
  
  console.log(palabraBalanceada('RANTOPB')); 
  console.log(palabraBalanceada('LOGERIKA'));
  console.log(palabraBalanceada("zips"));       // ➞ true
  console.log(palabraBalanceada("brake"));      // ➞ false
  console.log(palabraBalanceada("anilina"));    // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("radar"));      // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("abc"));        // ➞ false
console.log(palabraBalanceada("abccba"));     // ➞ true
console.log(palabraBalanceada("racecar"));    // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("deified"));    // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("rotor"));      // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("level"));      // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("civic"));      // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("refer"));      // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("madam"));      // ➞ true (palabra palindrómica)
console.log(palabraBalanceada("hello"));      // ➞ false
console.log(palabraBalanceada("world"));      // ➞ false
console.log(palabraBalanceada("abcdefgh"));   // ➞ false
console.log(palabraBalanceada("hgfedcba"));   // ➞ false
console.log(palabraBalanceada("balance"));    // ➞ false
console.log(palabraBalanceada("palindrome")); // ➞ false