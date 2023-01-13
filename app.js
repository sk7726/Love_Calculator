const text = document.querySelector('.love-text');
const btn = document.querySelector('.btn');
const word = document.querySelector('.text');



const generatePercentage = () => {
    let n = Math.random();
    // console.log(Math.floor(n*100));
    n = Math.floor(n*100);

    const yourName = document.getElementById('input1').value;
    const partnerName = document.getElementById('input2').value;
    // console.log(yourName);

    if(yourName.length === 0){
        alert('Please Enter your Name!!')
        exit;
    }
    if(partnerName.length === 0){
        alert('Please Enter your Partner Name!!')
        exit;
    }

    if(yourName.length ===0 || partnerName === 0){
        alert('Please Enter your Name and your partner Name')
        exit;
    }

    word.innerHTML = `${yourName} ❤️ ${partnerName} = ${n}%`;

    text.style.display = "none";


}

btn.addEventListener('click', generatePercentage);
