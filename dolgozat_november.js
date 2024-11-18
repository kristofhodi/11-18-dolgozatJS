// 1. feladat

function disemvowel(str) {
    const vowels = "aeiouAEIOU";
      let result = '';
      for (let char of str) {
          if (!vowels.includes(char)) {
              result += char;
          }
      }
    return result;
}

//2. feladat

function correctDate(date) {
    if (!date) return date;

    const dateParts = date.split('.');
    if (dateParts.length !== 3) return null;

    let [day, month, year] = dateParts.map(Number);

    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

    if (month < 1) {
        month = 1;
    } else if (month > 12) {
        const yearsToAdd = Math.floor((month - 1) / 12);
        month = month % 12;
        if (month === 0) month = 12;
        year += yearsToAdd;
    }

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    if (day < 1) {
        day = 1;
    } else if (day > daysInMonth[month - 1]) {
        day = daysInMonth[month - 1];
    }

    return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
}

//3. feladat

function playFizzBuzz() {
    let result = '';  

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'fizzbuzz, ';   
        } else if (i % 3 === 0) {
            result += 'fizz, ';       
        } else if (i % 5 === 0) {
            result += 'buzz, ';      
        } else {
            result += i + ', ';       
        }
    }

    document.getElementById('result').innerText = result.slice(0, -2);
}

//4. feladat

function dnaToRna(dna) {
    return dna.replace(/T/g, 'U');
}