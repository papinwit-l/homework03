function selectChange(elem) {
  let val = elem.value;
  let selection = elem.parentNode.parentNode;
  let selectStat = selection.querySelector(".select-stat");
  let child = selectStat.childElementCount;
  console.log(`val = ${val}`);
  console.log(child);
  for (let i = 1; i <= child; i++) {
    selectStat.querySelector(".c" + i).style.color = "#e7f1fc";
    if (i <= val) {
      selectStat.querySelector(".c" + i).style.color = "#00dbb3";
    }
  }
}
