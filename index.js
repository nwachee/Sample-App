
function nth_most_rate() {
    let list = [5,5,5,5,4,4,4,3,2,2,1,2,3,7,5,6,6,6,];
    let nth = 3;
    let result = list.every(function (element){
        (list.includes(nth));
    })
    console.log(result);



    // for (i = 0; i <= list.length; i++){

    //     //Comparing the values
    //     for (j = 0; j <= list.length; j++){
    //         if( list[i] === list[j]){
    //             console.log(list);
    //             break
    //         } else {

    //         }
    //     }

    //     break
    // }
    // list.forEach(element => {
    //     console.log(element);

    // });
}

nth_most_rate();
