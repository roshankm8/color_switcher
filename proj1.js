const btns = document.querySelectorAll('.buttons');
// console.log(btns);
const body = document.querySelector('body')
    // console.log(body);
btns.forEach(function(button) {
    console.log(button)
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
            // if (e.target.id === 'grey') {
            //     body.style.backgroundColor = e.target.id;
            // }
            // if (e.target.id === 'teal') {
            //     body.style.backgroundColor = e.target.id;
            // }
            // if (e.target.id === 'blue') {
            //     body.style.backgroundColor = e.target.id;
            // }
            // if (e.target.id === 'yellow') {
            //     body.style.backgroundColor = e.target.id;
            // }
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'teal':
                body.style.backgroundColor =
                    e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;

            default:
                break;
        }

    });

});