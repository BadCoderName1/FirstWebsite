const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");
const result = document.querySelector("#result")

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};



    if (count % 2 == 0){
        result.textContent = "It's Even";
    }
    else {
        result.textContent = "It's odd"
};

