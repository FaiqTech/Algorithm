// *2 ededin toplanmasi

var a=prompt("a reqemini daxil edin");
var b=prompt("b reqemini daxil edin");
console.log((+a) + (+b));


// *input ile daxil olan ededin o,menfi,musbet oldugunu tapin

var a=prompt("a reqemini daxil edin")
 if(a==0){
    console.log("a 0 a beraberdir")
 }
 else if(a>0){
    console.log("a musbet ededdir")
 }
 else{
    console.log("a menfi ededdir")
 }


// *input ile daxil olan 2 eded arasindaki en boyunu ekrana ver

var a=prompt("a ededini daxil edin")
var b=prompt("b ededini daxil edin")
if(a>b){
    console.log("a en boyukdur")
}
else if(a<b){
    console.log("b en boyukdur")
}


// *input ile daxil edilen ededin 5e tam bolunub, bolunmediyini tap

var a=prompt("a ededini daxil edin")
if(a % 5==0){
    console.log("eded 5 e tam bolunur")
}
else{
    console.log("eded 5 e tam bolunmur")
}


// *input ile daxil edilen ededin cut yoxsa tek oldugunu tap

var a=prompt("a ededini daxil edin")
if(a%2==0){
   console.log("a ededi cutdur")
}
else {
    console.log("a ededi tekdir")
}


// * 5 defe adin ortaya cxmasi

 var counter=0
 var ad=prompt("Adivi yaz")
 while(counter < 5){
 console.log(ad)
     counter++
 }


// * 1 den 10 e qeder ededleri cxart

counter=0
while(counter<10){
    counter++;
    console.log(counter);
}
for(var counter=5; counter>5; counter++){
    console.log("counter")
}


// *kok alti

var n=+prompt("ededi daxil edin");
var cavab = n ** (1/2);
console.log(cavab);


// *Input ile 5 eded daxil edin. 7'ye beraber olanların sayini tapib ekrana yazdırin

 var n=5, say=0
 while(n>0){
     var a=prompt("a ededini daxil edin")
     if(a==7){
         say++
   }
    n--
 }
 console.log(say)


// *Daxil etdiyiniz ededde nece 0-var


    var n= +prompt("eded daxil et")
     var say=0
     while(n>0){
     k=qaliq
        k=n % 10
        if(k==0){
            say++
        }
        n=n-k
        n=n/10
     }
     console.log(say)


    // *faktorial

    var n= +(prompt("eded daxil edin"));
    var v=1;
    for(var i =1; i<=n; i++){
         v=v*i;
    }
    alert(v)

    // * 3 reqemli eded daxil edirik ededin evveline ve sonuna string ile 3 elave edirik

    var a="3"
    var b=777
    var c="3"
    result=a+b+c
    console.log(result)


    // * Input ile daxil olunan ədədin bölənlərini tapın.


    function bolenleriTap(eded) {
        var bolenler = [];
        for (var i = 1; i <= eded; i++) {
            if (eded % i === 0) {
                bolenler.push(i);
            }
        }
        return bolenler;
    }
    
    // İstifadəçidən ədədi almaq
    var eded = parseInt(prompt("Ədədi daxil edin:"));
    
    // Funksiyani çağıraraq ədədin bölənlərini tapın
    var netice = bolenleriTap(eded);
    
    // Nəticəni çap etmək
    console.log(eded + " ədədi bölənləri: " + netice);


    // * funksiya ile 2 ededin toplanmasi
    
     'use strict'
     
     
     function name(a,b){
        var topla 
        topla = a + b
        return topla
     }
    
        var netice = name(5,8)
        console.log(netice)


  // !  indexleme

    var ad ='hello'
    console.log(ad[2])



    // ? tersini tap herflerin


    function tersiniTap(input){
        var tersi=""
        for (var i=input.length-1; i>=0; i--){
            tersi += input[i]
        }
        return tersi
    }
    console.log(tersiniTap("hello"))

   
    //  ? tersini tap reqemlerin 0 silinsin


     function tersiniTap(input){
        var tersi=""
        for (var i=input.length-1; i>=0; i--){
            tersi += input[i]
        }
        return tersi
    }
    console.log(+tersiniTap("5100"))



      //  ? pyramid


   function drawPyramid(n){
    var string=""
    for(let i =1; i<= n ; i++){

        for ( let j =1; j<=i ; j++){
            
            string += j + ""
        }
        string+= "\n"
    }
       return string
   }
    console.log(drawPyramid(7))


    // * sinaq imtahanina kecid serti
   
    let yas = +(prompt ("yasiniz: "));
    
    let pul = +(prompt ("pulunuz: "));

    if(yas>=18 && pul>=3000){
        alert("imtahana daxil ola bilersiz")
    }
    else{
        alert("imtahana daxil ola bilmezsiz")
    }



    // ? 3 cu deyisenden istifade etmeden 2 sinin yerini deis

    var a=10
    var b=9
    a=a+b
    b=a-b
    a=a-b
    console.log(a)
    console.log(b)

    
    // ? ededin sade bolenlerini tap


    var input = +prompt("eded daxil edin: ");
    var bolen = 2;
    while (input > 1) {
    if (input % bolen == 0) {
    console.log("Sade bolen: ", bolen);
    input = input / bolen;
    } else {
    bolen++;
    }
   }