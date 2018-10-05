// LANDING
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

// FORM COUNTDOWN
function limitTextCount(limitField_id, limitCount_id, limitNum)
{
    var limitField = document.getElementById(limitField_id);
    var limitCount = document.getElementById(limitCount_id);
    var fieldLEN = limitField.value.length;

    if (fieldLEN > limitNum)
    {
        limitField.value = limitField.value.substring(0, limitNum);
    }
    else
    {
        limitCount.innerHTML = (limitNum - fieldLEN) + '/500';
    }
}