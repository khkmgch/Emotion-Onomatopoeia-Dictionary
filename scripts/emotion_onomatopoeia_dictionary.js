class Word{
    constructor(word, defintion, pictureUrl){
        this.word = word;
        this.defintion = defintion;
        this.pictureUrl = pictureUrl;
    }
}

class EmotionObject{
    constructor(emotion, description, color, onomatopoeia){
        this.emotion = emotion;
        this.description = description;
        this.color = color;
        this.onomatopoeia = onomatopoeia;
    }
    //感情のすべての擬音語のWordオブジェクトの配列を返します。
    getOnomatopoeiaWords(){
        let words = [];
        for(let i = 0; i < this.onomatopoeia.length; i++){
            let curr = this.onomatopoeia[i];
            words.push(new Word(curr, dictionary[curr], pictureDictionary[curr]));
        }
        return words;
    }
    // コンテナのHTMLを文字列を返します。このコンテナの背景は感情の色で、コンテナの上部には、感情と感情の説明が表示されています。次にこの感情の各擬音語とその定義、画像を含んだカードが表示されます。
    getHtmlContainerString(){
        let containerString = 
        `
        <div id="${this.emotion}" style="background-color:${this.color}" class="py-3">
            <div class="container d-flex flex-column align-items-center mt-3">
                <h1 class="text-white font-italic col-12 ">${this.emotion}</h1>
                <p class="text-white font-italic col-12 ">${this.description}</p>
                <div class="d-flex flex-wrap justify-content-between  my-3">
        `;
        for(let i = 0; i < this.getOnomatopoeiaWords().length; i++){
            let curr = this.getOnomatopoeiaWords()[i];
            containerString += 
            `
                    <div class="bg-white col-12 col-md-5 my-2 d-flex justify-content-between align-items-center">
                        <div class="col-7 d-flex flex-column justify-content-center my-3 ms-3">
                            <h3 class="font-italic color-gray">${curr.word}</h3>
                            <p class="font-italic color-gray">${curr.defintion}</p>
                        </div>
                        <div class="col-5 m-1">
                            <img src="${curr.pictureUrl}" class="img-size">
                        </div>
                    </div>
            `;
        }
        containerString += 
        `       </div>
            </div>
        </div>
        `;
        return containerString;
    }
}

//グローバル定数
const dictionary = {
    "bark":"the sound made by a dog",
    "grunt":"issue a low, animal-like noise",
    "roar":"make a loud noise, as of an animal",
    "whack":"the act of hitting vigorously",
    "smack":"a blow from a flat object (as an open hand)",
    "hiss":`make a sharp, elongated "s" sound`,
    "ahem":"the utterance of a sound similar to clearing the throat",
    "bawl":"cry loudly",
    "bling":"flashy, ostentatious jewelry",
    "boom":"a deep prolonged loud noise",
    "buzz":"the sound of rapid vibration",
    "caw":"utter a cry, characteristic of crows, rooks, or ravens",
    "chatter":"talk socially without exchanging too much information",
    "chant":"a repetitive song in which syllables are assigned to a tone",
    "clatter":"a continuous rattling sound as of hard objects falling or striking each other.",
    "clunk":"a heavy dull sound (as made by impact of heavy objects)",
    "crawl":"move forward on the hands and knees or by dragging the body close to the ground.",
    "flick":"throw or toss with a quick motion",
    "giggle":"a light, silly laugh.",
    "gargle":"an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
    "honk":"the cry of a goose or any loud sound resembling it",
    "oink":"the short low gruff noise of the kind made by hogs",
    "whine":"a complaint uttered in a plaintive way",
    "waah":"sound made when crying by babies",
    "zing":"sound my by something energetic"
};

const pictureDictionary = {
    "bark":"https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
    "grunt":"https://cdn.pixabay.com/photo/2010/11/29/nepal-419__480.jpg",
    "roar":"https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
    "whack":"https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg",
    "smack":"https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg",
    "hiss":"https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg",
    "ahem":"https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg",
    "bawl":"https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg",
    "bling":"https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg",
    "boom":"https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg",
    "buzz":"https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg",
    "caw":"https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg",
    "chatter":"https://cdn.pixabay.com/photo/2014/07/25/08/55/bar-401546_1280.jpg",
    "chant":"https://cdn.pixabay.com/photo/2016/07/19/07/43/parchment-1527650__340.jpg",
    "clatter":"https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg",
    "clunk":"https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg",
    "crawl":"https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg",
    "flick":"https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg",
    "giggle":"https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg",
    "gargle":"https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg",
    "honk":"https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg",
    "oink":"https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg",
    "whine":"https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg",
    "waah":"https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg",
    "zing":"https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg"
};

const emotions = [
    new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
    new EmotionObject("happy", "feeling or showing pleasure or contentment.", "pink", ["bling","chatter","chant","giggle"]),
    new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "skyblue", ["ahem","clatter","clunk"]),
    new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
    new EmotionObject("surprised", "to feel mild astonishment or shock.", "orange", ["boom","honk","zing"]),
    new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
    new EmotionObject("disgusted", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "purple", ["flick","gargle","oink"])
];
//感情のアイコンの辞書
const iconDictionary = {
    "surprised" : `<i class="fa-regular fa-face-surprise icon-size"></i>`,
    "disgusted" : `<i class="fa-regular fa-face-frown icon-size"></i>`,
    "fearful" : `<i class="fa-regular fa-face-tired icon-size"></i>`,
    "angry" : `<i class="fa-regular fa-face-angry icon-size"></i>`,
    "happy" : `<i class="fa-regular fa-face-laugh-wink icon-size"></i>`,
    "sad" : `<i class="fa-regular fa-face-sad-cry icon-size"></i>`,
    "bad" : `<i class="fa-regular fa-face-dizzy icon-size"></i>`
};
//JavaScript作成用メモ
// <div class="container d-flex flex-wrap justify-content-center">
//         <div class="bg-red col-12 col-md-3 h-category m-4 py-4 d-flex flex-column align-items-center link">
//             <h2 class=" text-white">surprised</h2>
//             <i class="fa-regular fa-face-surprise icon-size my-2"></i>
//             <p class="text-white text-center mx-4">to feel mild astonishment or shock</p>
//             <a href="#surprised1" class="child"></a>
//         </div>

let targetDiv = document.getElementById("target");
//見出し部分
let headingHTMLString = `
<div class="container mt-5">
    <div class="d-flex justify-content-center">
        <i class="fa-solid fa-book heading-icon color-gray"></i>
        <h1 class="font-italic color-gray">Emotion Onomatopoeia Dictionary</h1>
    </div>
    <div class="d-flex justify-content-center">
        <h3 class="mt-5 font-italic color-gray">Click on a category!!</h3>
    </div>
</div>
`;

//ページ上部の７つのカテゴリー部分のHTML
let categoryHTMLString = 
`
<div class="container d-flex flex-wrap justify-content-center">`;
for(let i = 0; i < emotions.length; i++){
    let currEmotion = emotions[i];
    categoryHTMLString += 
    `
    <div class="col-12 col-md-3 h-category m-4 py-4 d-flex flex-column align-items-center link" style="background-color:${currEmotion.color};">
        <a href="#${currEmotion.emotion}" class="child"></a>
        <h2 class="text-white font-italic">${currEmotion.emotion}</h2>
        ${iconDictionary[currEmotion.emotion]}
        <p class="text-white font-italic text-center mx-4">${currEmotion.description}</p>
    </div>
    `;
}
categoryHTMLString += 
`
</div>
`;

//ページ下部の各セクションごとのHTML
let sectionHTMLString = `<div>`;
for(let i = 0; i < emotions.length; i++){
    sectionHTMLString += emotions[i].getHtmlContainerString();
}
sectionHTMLString += `</div>`;

targetDiv.innerHTML = 
`
${headingHTMLString}
${categoryHTMLString}
${sectionHTMLString}

`;


console.log(targetDiv);

$('a[href^="#"]').click(function() {
  // スクロールの速度
  let speed = 1200; // ミリ秒で記述
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});
