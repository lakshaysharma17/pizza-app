// Network call code
import URL from "../utils/constant.js";
async function makeNetworkCall(){
    try{
    const response = await fetch(URL); //Block
    const object = await response.json(); //Block
    return object; // Wrap Promise
    }
    catch(err){
        console.log('Some Problem in API',err);
        throw err;
    }
    // const URL = "https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json";
    // const promise = fetch(URL);
    // console.log('Promise is', promise);
    // promise.then(response =>{
    //     console.log(response);
    // }).catch(err =>{
    //     console.log(err);
    // });
    // console.log('Good bye');
}
export default makeNetworkCall;