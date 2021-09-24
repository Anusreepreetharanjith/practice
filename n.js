function countDown(count) {
    return new Promise((resolve, reject) => {

        let id = setInterval(function () {
            if (count<0){
            return reject(new Error(error));
            }
            if(count>=0){
            console.log(count--);
            }

        else{
            return resolve(result);

        }
        }, 1000);

       

    });





}


countDown(5)
//.then(() => console.log('done');

//console.log('count down started…");

//)

.then((result) => {
 
    console.log("Done")
});