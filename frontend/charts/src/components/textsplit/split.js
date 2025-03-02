// 分割文本函數
const splitText = (text, limit, includeMarkers) => {
  if (!text) return [];

  // 基本的切分邏輯
  const chunks = [];
  let remainingText = text;
  let partNumber = 1;

  while (remainingText.length > 0) {
    // 計算實際可用字數（考慮是否需要添加續篇標記）
    const markerLength = includeMarkers
      ? ` (${partNumber}/${Math.ceil(text.length / limit)})`.length
      : 0;
    const effectiveLimit = limit - markerLength;

    // 尋找可切分的位置
    let cutPoint = effectiveLimit;

    if (remainingText.length > effectiveLimit) {
      // 嘗試在段落、句子或字之間切分
      const lastParagraph = remainingText.lastIndexOf("\n\n", effectiveLimit);
      const lastSentence = remainingText.lastIndexOf("。", effectiveLimit);
      const lastComma = remainingText.lastIndexOf("，", effectiveLimit);

      // 優先選擇段落結束處
      if (lastParagraph > 0) {
        cutPoint = lastParagraph + 2;
      } else if (lastSentence > 0) {
        cutPoint = lastSentence + 1;
      } else if (lastComma > 0) {
        cutPoint = lastComma + 1;
      }
    } else {
      cutPoint = remainingText.length;
    }

    // 提取當前部分
    let currentChunk = remainingText.substring(0, cutPoint).trim();

    // 添加續篇標記
    if (includeMarkers && text.length > limit) {
      currentChunk += ` (${partNumber}/${Math.ceil(text.length / limit)})`;
    }

    chunks.push(currentChunk);
    remainingText = remainingText.substring(cutPoint).trim();
    partNumber++;
  }

  return chunks;
};

// 基本用法
const text = `【工具選擇可能的迷思】
你有沒有注意到，開始新專案時我們總愛陷入「工具選擇」的漩渦？
常常看到有人問「你用哪種語言寫？」「這框架效能好嗎？」
👉為何我們如此執著於工具？
研究工具給予我們一種「進展感」—那種表面上的生產力錯覺。我們堅信完美工具就是成功的關鍵，卻忽略實際行動的重要性。
我過去正是這樣—熱衷學習各種工具，卻發現自己實際產出寥寥無幾。這或許源自學生時期養成的「先學再做」慣性思維。不斷學習新工具，卻遲遲不見成果。
現實中，工具探索常變成無止境的循環：學會一種技術，又被更閃亮的新技術吸引，認為「這個肯定更適合我的需求」。而那個需求...通常還在腦海中飄浮，遲遲未落地。
👉真正有效的方法是什麼？
觀察那些成功交付產品的人，他們採取「先做再優化」的思路。選擇夠用的工具開始行動，在實踐中發現瓶頸，再有針對性地學習必要工具。當我釐清目標後，工具選擇反而變得簡單。雖然好工具確實能提高效率，但花過多時間比較工具、學習工具卻可能成為最大的時間黑洞。
或許我們該少問「用什麼做的」，多問「為什麼要做」。產品的目的與願景才是核心，工具不過是達成目標的橋樑。【工具選擇可能的迷思】
你有沒有注意到，開始新專案時我們總愛陷入「工具選擇」的漩渦？
常常看到有人問「你用哪種語言寫？」「這框架效能好嗎？」
👉為何我們如此執著於工具？
研究工具給予我們一種「進展感」—那種表面上的生產力錯覺。我們堅信完美工具就是成功的關鍵，卻忽略實際行動的重要性。
我過去正是這樣—熱衷學習各種工具，卻發現自己實際產出寥寥無幾。這或許源自學生時期養成的「先學再做」慣性思維。不斷學習新工具，卻遲遲不見成果。
現實中，工具探索常變成無止境的循環：學會一種技術，又被更閃亮的新技術吸引，認為「這個肯定更適合我的需求」。而那個需求...通常還在腦海中飄浮，遲遲未落地。
👉真正有效的方法是什麼？
觀察那些成功交付產品的人，他們採取「先做再優化」的思路。選擇夠用的工具開始行動，在實踐中發現瓶頸，再有針對性地學習必要工具。當我釐清目標後，工具選擇反而變得簡單。雖然好工具確實能提高效率，但花過多時間比較工具、學習工具卻可能成為最大的時間黑洞。
或許我們該少問「用什麼做的」，多問「為什麼要做」。產品的目的與願景才是核心，工具不過是達成目標的橋樑。`;
const limit = 500; // 每個部分的最大字數
const includeMarkers = true; // 是否添加"(1/3)"這樣的標記

const chunks = splitText(text, limit, includeMarkers);
// 結果: ["這是一段很長的文本... (1/3)", "第二部分... (2/3)", "最後部分... (3/3)"]

console.log(chunks);
