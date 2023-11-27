// get buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var random = document.getElementById('random');

var tips = ['begin',
'Close your eyes for a momment and think. What would you attempt if you were 100% sure that you couldnt fail? The journey to an outstanding life start with identifying a big, compiling dream you want to pursue.',
'Beleive in yourself and dreams. Affirm yourself everysay by reminding yourself that you are intelligent, good looking and unique. Never look down on yourself or appologies for who God made you',
'There is a purpose to your physical, background and experience. Every aspect of yout life is designed to give you an advantage. Appreciate yourself and take full advantage your advantage and assets',
'Stay focused and keep working hard on your goals. No one acheives anything significant by sheer luck. Great accomplishment are birthed on the anvil of deligence and commitment.',
];
var current = 0;


next.onclick = function() {
    current += 1;
    document.querySelector('.number').innerHTML = current;
    document.querySelector('.text-space').innerHTML = tips[current];

    // Reset to the first tip when the end is reached
    if (current === tips.length) {
        current = 0;
    }
};

previous.onclick = function() {
    current -= 1;
    document.querySelector('.number').innerHTML = current;
    document.querySelector('.text-space').innerHTML = tips[current];

    // Reset to the first tip when the end is reached
    if (current === 1) {
        current = tips.length+1;
    }
};


random.onclick = function() {
    var randomNumber = Math.floor(Math.random() * tips.length) + 1;
    current=randomNumber;
    document.querySelector('.number').innerHTML = current;
    document.querySelector('.text-space').innerHTML = tips[randomNumber];
};
