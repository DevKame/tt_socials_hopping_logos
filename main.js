"use strict";

async function bgin({target: social}) {
    const bg = social.querySelector(".bg");
    await bg.animate(
        [
            {transform: "translate(0, -120%) rotateY(90deg)"},
        ],
        {
            duration: 300,
            fill: "forwards",
        }
    ).finished;
    await bg.animate(
        [
            {transform: "translate(0, -100%) rotateY(180deg)"},
        ],
        {
            duration: 200,
            fill: "forwards",
        }
    ).finished;
}
async function bgout({target: social}) {
    const bg = social.querySelector(".bg");
    await bg.animate(
        [
            {transform: "translate(0, 0) rotateY(0)"},
        ],
        {
            duration: 500,
            fill: "forwards",
        }
    ).finished;
}

const icons = document.querySelectorAll(".social");
icons.forEach(i => {
    i.addEventListener("mouseenter", bgin);
    i.addEventListener("mouseleave", bgout);
});