let url ='https://icanhazdadjoke.com/';


let jokes = document.querySelector('.joke');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    fetchData();
});


async function fetchData() {
    jokes.innerHTML = 'Loading....';
    try {
        let data = await fetch(url, {
            headers: {
                Accept: 'application/json',
            },
        });
        let res = await data.json();
        jokes.innerHTML = res.joke;
        console.log(res.joke);
    }catch (error) {
        jokes.innerHTML = 'There an Error 404....';
    };
};

