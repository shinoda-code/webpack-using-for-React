// import '../sub';
// import '@scss/app'; 
import('../scss/app.scss'); 
// setTimeout(() => {
// }, 2000);

const init = async() => {
    console.log('this is');
    await asyncFn();
    jQuery();
    utils.log('hello from app.js');
};
async function asyncFn() {
    console.log("Im async function");
}

init();