const cursor = document.querySelector("#cursor");
console.log(cursor);

document.body.addEventListener("mousemove", (e) => {
  const coord = {
    x: e.pageX,
    y: e.pageY,
  };
  cursor.style.transform = `translate3D(calc(${coord.x}px - 50%), calc(${coord.y}px - 50%), 0)`;
});
updateListItemRotation();
document.body.addEventListener("wheel", (event) => {
  const coord = {
    x: event.pageX,
    y: event.pageY,
  };
  cursor.style.transform = `translate3D(calc(${coord.x}px - 50%), calc(${coord.y}px - 50%), 0)`;

  updateListItemRotation();
});
function updateListItemRotation() {
  const listItems = document.querySelectorAll("ul li a");
  const middleScreen = window.innerHeight / 2;
  document.body.addEventListener("wheel", (e) => {
    listItems.forEach((element) => {
      const dist = element.getBoundingClientRect().y - middleScreen;
      const distCube = dist * dist * dist;

      const factor = -1 * 150 ** 3;
      element.style.transform = `skewX(${
        (distCube / factor / 2) * -1
      }deg) rotateX(${distCube / factor}deg)`;
    });
  });
}
