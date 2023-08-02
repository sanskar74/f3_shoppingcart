// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
//we use event listener for loading pages on click

const loginBtn = document.getElementById('login');
const signBtn = document.getElementById('signup');

loginBtn.addEventListener('click',()=>{
    location.href='./login/index.html';
})

signBtn.addEventListener('click',()=>{
    location.href='./signup/index.html'
})
