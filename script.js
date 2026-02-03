const dice = document.getElementById("dice");
const rollBtn = document.getElementById("roll");

const rotations = {
    1: "rotateX(0deg) rotateY(0deg)",
    2: "rotateX(0deg) rotateY(-90deg)",
    3: "rotateX(0deg) rotateY(-180deg)",
    4: "rotateX(0deg) rotateY(90deg)",
    5: "rotateX(-90deg) rotateY(0deg)",
    6: "rotateX(90deg) rotateY(0deg)"
};

rollBtn.addEventListener("click", () => {
    const result = Math.floor(Math.random() * 6) + 1;
    dice.style.transform = rotations[result];
});
