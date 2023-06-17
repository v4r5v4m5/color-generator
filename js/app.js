const getColor = function() {
    // hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    
    const colorCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;
    document.getElementById("color-code").innerText = colorCode;
    document.body.style.color = colorCode; // nyc rawww sarle ra byee yeee????
    // document.getElementById('btn').style.background-color = colorCode;

    navigator.clipboard.writeText(colorCode);
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//getColor(); cheppu nenu okati try chsa choopinchu connect avtokhanu