// const disp = document.getElementById("display")
// const button = document.getElementById("click")

// button.addEventListener("click",() => {
//     setTimeout( () => {
//         disp.value = "10"
//         setTimeout( () => {
//             disp.value = "9"
//             setTimeout( () => {
//                 disp.value = "8"
//                 setTimeout( () => {
//                     disp.value = "7"
//                     setTimeout( () => {
//                         disp.value = "6"
//                         setTimeout( () => {
//                             disp.value = "5"
//                             setTimeout( () => {
//                                 disp.value = "4"
//                                 setTimeout( () => {
//                                     disp.value = "3"
//                                     setTimeout( () => {
//                                         disp.value = "2"
//                                         setTimeout( () => {
//                                             disp.value = "1"
//                                             setTimeout( () => {
//                                                 disp.value = "Happy Birthday! ❤️"
//                                                 setTimeout( () => {
//                                                     confirm("Now You can close the tab! Thnak You")
//                                                 },4000)
//                                             },1000)
//                                         },1000)
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// });


const disp = document.getElementById("display")
const button = document.getElementById("click")

button.addEventListener("click",()=>{
    let count = 10;
    disp.value = count;

    const timer = setInterval( () => {
        count--;
        if(count>0){
            disp.value = count;
        }
        else if(count === 0){
            disp.value = "Happy Birthday! ❤️"
        }
        else{
            clearInterval(timer)
            setTimeout(() => {
                confirm("Now You can close the tab! Thank You")
            },4000)
        }
    },1000)
})