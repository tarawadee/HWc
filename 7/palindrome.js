let sentence;
let stdin = process.openStdin();
console.log("Hi!, Please input sentence: ");
stdin.addListener("data", (d) => {
    sentence = d.toString().trim();
    if (isPalindrom(sentence)) {
        console.log("Haha, You sentence is palindrom");
    } else {
        console.log("Sorry guys, You sentence isn't palindrom");
    }
     // ตั้งแต่ node ที่ตำกว่า v10 ใช้ stdin.end()
     stdin.destroy()
});

const isPalindrom = (str) => {
    return str == str.split('').reverse().join('');
}