//set function
function getTrashTalk(target) {
  if (target.length === 0) {
    return "請選擇幹話對象";
  }
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };
  const phrase = ["很簡單", "很容易", "很快", "很正常"];
  const tastRandom = Math.floor(Math.random() * task[target].length);
  const phraseRandon = Math.floor(Math.random() * phrase.length);

  let carrer = "";
  if (target[0] === "engineer") {
    carrer = "工程師";
  } else if (target[0] === "designer") {
    carrer = "設計師";
  } else if (target[0] === "entrepreneur") {
    carrer = "創業家";
  }

  const answer = `身為一個${carrer}${task[target][tastRandom]}應該${
    phrase[phraseRandon]
  }吧...`;
  return answer;
}

module.exports = getTrashTalk;
