age=15
if(age>=18){
    console.log("Your are eligiable for driving..")
}else{
    console.log("You are not eligible")
}

marks=130
//grade F marks < 35
// grade C 50 <= marks >=35
//grade B 70 <=  marks >50
//grade A 100 <= marks >70

if(marks >=0 && marks<=100){
    if(marks < 35){
        console.log("grade F")
    }else if(marks >= 35 && marks <=50){
        console.log("Grande C")
    }else if(marks >50 && marks <=70){
        console.log("grand B")
    }else{
        console.log("grande A")
    }
}else{
    console.log("Invalid marks")
}

n1=10;
n2=20;
op ="#"  //"sub" //"mul"  //"div"
result=0

switch(op){
    case"+":
    result = n1+n2
    break

    case"-":
    result=n1-n2
    break
    default:
    result = NaN
}

console.log(n1,op,n2,"=",result) //10 and 20 =30
//consol.log(n1,op,n2,"=",result) //10 sub 20=30

n1 =59
//i=1    initialization
//i<=10   condition
//i++    increment /deincrement


for(i=1;i<=10;i++){
    console.log(n1,"*",i,"=",n1*i)
}
console.log(i,"i")

//find odd number and even number
for(j=0;j<=20;j++){
    if(j%2 !=0){
        console.log(j)
    }
}


a=3
while(a<=0){
    console.log(n1 * a,'12*a')
    a++
}

b=1
do{
    console.log(n1*b,'N1*b')
    b++
}while(b<=0)

    //find output start with 7 setp with 3 up to 30

    x=5
    while(x<=40){
        console.log(x,'x')
        x+=4 //x=x+4
    }
    for(x=5;x<=40;x+=4){
        console.log(x,'x in for loop')
    }

    let num=5;
    do{
        console.log("Number:",num);
        num--;
    }while(num > 0);


    let number = 5;
    factorial =1;
    for(let i=number;i>0;i--){
        factorial *=i;
    }
    console.log('The factorial of ${number} is ${factorial}');
    if (factorial < 10){
        console.log("The factorial is small.");
    }else if (factorial >=10 && factorial <=100){
        console.log("The factorial is moderate.");
    }else{
        console.log("The factorial is large.");
    }

    