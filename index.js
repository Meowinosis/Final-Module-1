// //Bài 1
// function findThirdHighestScore(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr[2]);
// }
// findThirdHighestScore([2,45,6,8,2,7]);

// //Bài 2
// function tryRemoveFromArray(arr, index) {
//     if (index < arr.length && index >= 0) {
//         let newArr = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (i === index) {
//             } else {
//                 newArr.push(arr[i]);
//             }
//         }
//         console.log(newArr);
//     }
//     else {
//         console.log(arr);
//     }
// }
// tryRemoveFromArray([1, 2, 5, 6, 7], 9);

// Bài 3
function checkString(str1, str2) {
    let isInclude = false;
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            arr1.shift().repeat(i);
            for (let a = 0, j = 0; j < arr2.length; a++, j++) {
                if (arr1[a] !== arr2[j]) {
                    isInclude = false;
                    break;
                } else {
                    isInclude = true;
                }
            }
            if (!isInclude) {
                i=0;
                continue;
            }
            break;
        }
    }
    console.log(isInclude);
}
checkString("arreddds!a", "dddsa");



// //Bài 4
// class Rectangle{
//     x;
//     y;
//     width;
//     height;
//     color;
//     constructor(x,y,width,height,color){
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     render(canvas){
//         const ctx = canvas.getContext("2d");
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x,this.y,this.width,this.height);
//     }
// }

// let rect = new Rectangle(10,10,200,100,'#000000');
// rect.render(document.getElementById("canvas"));