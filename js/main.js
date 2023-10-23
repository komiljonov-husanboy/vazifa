console.log('vazifa 1');
console.log('birinchi toq sonlar keyin juft sonlar');
function elements(arr) {
  var toq =[];
  var juft =[];

  for (let i = 0; i < arr.length; i++) {
    

    if (arr[i] % 2 === 0) {

      toq.push(arr[i]);

    }
    else{
      juft.push(arr[i]);
    }
  }
  console.log(toq.join(", ") + ", " + juft.join(", "));
}


var myarr = [1, 2, 3, 4, 5, 6,  7, 8, 9]
elements(myarr);

//yangi vazifa

console.log(' vazifa 2');
console.log('bitta boshidan bitta oxiridan ');

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var n = arr.length;

for (let i = 0; i < n / 2; i++) {
  console.log(arr[i]);
  console.log(arr[n - i - 1]);
}



console.log('vazifa 3');
console.log('Massivning oxirgi elementidan kichik bolgan birinchi element');

//yangi
function katta_2(array) {
  if (array.length < 2) {
    console.log("Massivda kamida ikkita element bo'lishi kerak!");
    return;
  }

  let katta = ary[0];
  let kichik = ary[0];

  for (let i = 1; i < ary.length; i++) {
    if (ary[i] > katta) {
      kichik = katta;
      katta = ary[i];
    } else if (ary[i] > kichik && ary[i] < katta) {
      kichik = ary[i];
    }
  }

  console.log(kichik);
}

let ary = [5, 6, 7, 2, 8,9];
katta_2(ary); // 7





