(function () {
  const field1 = document.querySelector(".menubutton");
  const field2 = document.querySelector(".menubutton__line");
  const field3 = document.querySelector(".mobile_nav");
  // mobile navigation state
  let isAnimate = false;
  field1.addEventListener("click", () => {
    if (isAnimate) {
      field1.classList.remove("animate");
      field2.classList.remove("animate");
      field3.classList.remove("active");
      isAnimate = !isAnimate;
      return;
    }
    field1.classList.add("animate");
    field2.classList.add("animate");
    field3.classList.add("active");
    isAnimate = !isAnimate;
  });
})();
