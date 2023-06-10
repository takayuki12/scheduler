export function newEvent() {
  function handleClick() {
    alert("new event add");
  }

  return {
    text: "New event",
    click: handleClick,
  };
}
