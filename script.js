const data = {
    1:'Rock',
    2:'Paper',
    3:'Scissors'
}

function comp_guess()
{
    let guess = Math.floor(Math.random()*10);
    if(guess<=3) return 1;
    else if(guess<=7 && 3<guess) return 2;
    else return 3;
}
function change(value)
{
    let change = document.querySelector(`.${value}`);
    let txt = change.innerText;
    let arr = txt.split(':')
    let no_of_change = Number(arr[1]);
    no_of_change+=1;
    change.innerText = `${value}:${no_of_change}`;
    console.log(no_of_change);
}
function guess(user_input) {
    let a = comp_guess();
    document.querySelector('.computer_guess').innerText = `Computer's Guess: ${data[a]}`;
    if (user_input == 1)
    {
        if(a==1)
        {
            change("Ties");
        }
        else if(a==2)
        {
            change('Losses');
        }
        else {change('Wins');}

    }
    else if(user_input == 2)
    {
        if(a==1){
            change('Wins');
        }
        else if(a==2)
        {
            change('Ties');
;
        }
        else {
            change('Losses');
            
        }

    }
    else {
        if(a==1){
            change('Losses');
        }
        else if(a==2){
            change('Wins');
        }
        else {change('Ties');}
    }

}

document.addEventListener('DOMContentLoaded', function () {
    var rock = document.getElementById('rock');
    rock.addEventListener('click', function () {
      guess(1);
    });
    var sc = document.getElementById('sc');
    sc.addEventListener('click', function () {
      guess(3);
    });
    var paper = document.getElementById('paper');
    paper.addEventListener('click', function () {
      guess(2);
    });

});
  
