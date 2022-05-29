var integerArray = [];
var integerArrayTest = []
function addIntegerNum(){
var integerNum = +document.getElementById("integerNum").value ;
integerArray.push(integerNum);
integerArrayTest.push(integerNum)
resetForm()
}
function resetForm(){
document.getElementById("integerNum").value =""
document.getElementById('changeValueOne').value =""
document.getElementById("changeValueTwo").value =""
}
function showIntegerArray(){
    document.getElementById("result").innerHTML = `Mảng số nguyên gồm : ${integerArray}`
}
function showSumPositiveNum(){
    var positiveNum = 0;
    for(i=0; i < integerArray.length; i++){
        if(integerArray[i]>0){
            positiveNum += integerArray[i]
        }
    }
    document.getElementById('result').innerHTML =` Tổng số dương trong mảng là: ${positiveNum}`
}
function showCountPositiveNum(){
    var countPositiveNum = 0;
    for(i=0; i< integerArray.length ; i++){
        if(integerArray[i]>0){
            countPositiveNum ++
        }
    }
    document.getElementById("result").innerHTML = `Số lượng số dương trong mảng là: ${countPositiveNum}`
    return countPositiveNum
}
function findMinimumNum(){
    var minimumNum = integerArray[0]
    for(i=0; i< integerArray.length ; i++){
        
        if(integerArray[i] < minimumNum){
            minimumNum = integerArray[i]
        }

    }

    document.getElementById('result').innerHTML = `Số nhỏ nhất trong mảng là: ${minimumNum}`
}

function findMinimunPositiveNum() {
    var mininPositiveNum = integerArray[0] 
    for(i=0; i< integerArray.length ; i++) {
        if(integerArray[i]>0 && integerArray[i]<mininPositiveNum) {
            mininPositiveNum=integerArray[i]
        }
    }
    document.getElementById("result").innerHTML =`Số dương nhỏ nhất trong mảng là ${mininPositiveNum}`
}

function findLastEvenNum(){
    lastEvenNum = -1
    for(i= integerArray.length ; i>= 0; i--){
        if(integerArray[i] %2 === 0){
            lastEvenNum = integerArray[i]
        }
        
    }
    document.getElementById("result").innerHTML = `Số chẵn cuối cùng trong mảng là ${lastEvenNum}`
}

function changePositionNum(){
    positionFirstNumValue = 0;
    positionSecondNumValue = 0;
    var positionFirstNum = +document.getElementById('changeValueOne').value ;
    var positionSecondNum = +document.getElementById('changeValueTwo').value ;
    for(i = 0; i< integerArrayTest.length ; i++){
        if(i + 1 === positionFirstNum){
            positionFirstNumValue = integerArrayTest[i]
        }
        if(i + 1 === positionSecondNum){
            positionSecondNumValue = integerArrayTest[i]
        }
        
    }
    for(i = 0; i< integerArrayTest.length ; i++){
        if(i + 1 === positionFirstNum){
            integerArrayTest.splice(i,1,positionSecondNumValue)
        }
        if(i + 1 === positionSecondNum){
            integerArrayTest.splice(i,1,positionFirstNumValue)
        }
        
    }
    resetForm()
    document.getElementById('resultTwo').innerHTML = `Mảng đã đổi chổ hai vị trí ${integerArrayTest}`
}
//        !!!            //
function sortArrayNum(){
    integerArrayTest.sort(compare)
    document.getElementById("resultTwo").innerHTML =`Mảng sắp xếp theo giá trị tăng dần là: ${integerArrayTest}`
}
function compare(a,b){
    return a - b;
}

//          !!!         //

function findPrimeNum(){
    var primeNum = -1;
    for(i=0; i< integerArray.length;i++){
        if(integerArray[i] / 1 === integerArray[i] && (integerArray[i] / integerArray[i])===1) {
            primeNum = integerArray[i]
            break;
        }
    }
    document.getElementById('resultTwo').innerHTML =`Số nguyên tố đầu tiên trong mảng là: ${primeNum}`
}


var realNumberArray = []
function addRealNum() {
    var realNum = +document.getElementById('realNum').value;
    realNumberArray.push(realNum)
    document.getElementById('resultThree').innerHTML = `Mảng số thực gồm: ${realNumberArray}`
    document.getElementById("realNum").value=""
}
function showRealNum(){
    var countRealNum = 0;
    
    for(i=0; i< realNumberArray.length ; i++){
        if(Number.isInteger(realNumberArray[i])){
            countRealNum++
        }
    }
    document.getElementById("resultThree").innerHTML = `Số lượng số nguyên trong mảng số thực là: ${countRealNum}`
}

function showCountNegativeNum(){
    var countNegativeNum = 0;
    for(i=0; i< integerArray.length ; i++){
        if(integerArray[i]<0){
            countNegativeNum ++
        }
    }
    return countNegativeNum
}
function comparePosAndNegNum(){
    var nega = showCountNegativeNum()
    var posi = showCountPositiveNum()
    if(posi>nega){
        document.getElementById('result').innerHTML= `Số lượng Số dương nhiều hơn số âm`
    } else if(posi<nega){
        document.getElementById('result').innerHTML= `Số lượng Số dương ít hơn số âm`
    } else {
        document.getElementById('result').innerHTML= `Số lượng Số dương bằng số âm`
    }
}
// function PosAndNegNum(){
//     var nega = showCountNegativeNum()
//     var posi = showCountPositiveNum()
//     if(posi>nega){
//         return "a>b"
//     } else if(posi<nega){
//         return "a<b"
//     } else {
//         return "a=b"
//     }
// }
// function comparePosAndNegNum(){
//     var a = PosAndNegNum()
//     document.getElementById("result").innerHTML = `${a}`
// }