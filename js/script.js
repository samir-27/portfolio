var typingElement = document.querySelector(".typing-text");
var typeArray = ["Web Devloper", "Frontend Devloper", "Web Designing", "Compatitive Programer"];
var index = 0,
    isAdding = true,
    typeIndex = 0;

function playAnim() {
    setTimeout(
        function () {
            typingElement.innerText = typeArray[typeIndex].slice(0, index);

            if (isAdding) {
                if (index >= typeArray[typeIndex].length) {
                    isAdding = false;

                    setTimeout(function () {
                        playAnim();
                    }, 2000);
                    return;
                }
                else {
                    index++;
                }
            }
            else {
                if (index === 0) {
                    isAdding = true;
                    typeIndex++;
                    if (typeIndex >= typeArray.length) {
                        typeIndex = 0;
                    }
                }
                else {
                    index--;
                }
            }
            playAnim();
        },
        isAdding ? 120 : 60
    );
}
playAnim();