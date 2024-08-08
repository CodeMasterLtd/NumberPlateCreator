const versionNumber = '2.0.0.0';
const loadTime = 4000;
const updateloadTime = 10000;
const ping = 1000;
const imgType = 'png';

const plateInput = document.getElementById("plateInput");
const sloganInput = document.getElementById("sloganInput");
const BSDInput = document.getElementById("BSDInput");
const frontPlate = document.getElementById("frontPlate");
const backPlate = document.getElementById("backPlate");
const frontSlogan = document.getElementById("frontSlogan");
const backSlogan = document.getElementById("backSlogan");
const frontGreenBox = document.getElementById("frontGreenBox");
const backGreenBox = document.getElementById("backGreenBox");
const styleSelect = document.getElementById("styleSelect");
const frontBorder = document.getElementById("frontBorder");
const backBorder = document.getElementById("backBorder");
const stampSelect = document.getElementById("stampSelect");
const colorPicker = document.getElementById("colorPicker", "textColorPicker");
const frontStamp = document.getElementById("frontStamp");
const backStamp = document.getElementById("backStamp");
const borderColorInput = document.getElementById("borderColor");

plateInput.addEventListener("input", updatePlate, showElectricBox("block", 'none'));
sloganInput.addEventListener("input", updateSlogan);
BSDInput.addEventListener("input", updateBSD);
colorPicker.addEventListener("change", function() {
    changeTextColor();
    changePlateColor();
    changeTextShadow();
});
//styleSelect.addEventListener("change", toggleBoxStyle);
stampSelect.addEventListener("change", toggleStamp);

showElectricBox("none", 'none')
showBorder("none");
showStamp("block");

function updatePlate() {
    const plateText = plateInput.value.trim().toUpperCase();
    
    // Update plate text
    frontPlate.textContent = plateText || "AB12 CDE";
    backPlate.textContent = plateText || "AB12 CDE";
}




function updateSlogan() {
    const sloganText = sloganInput.value;
    frontSlogan.textContent = sloganText || "Code Master";
    backSlogan.textContent = sloganText || "Code Master";
}

function updateBSD() {
    const BSDText = BSDInput.value;
    frontStamp.textContent = BSDText || "BSAU145d";
    backStamp.textContent = BSDText || "BSAU145d";
}

function changePlateFont() {
    const selectedFont = document.getElementById("fontSelect").value;
    const plateTexts = document.querySelectorAll('.plate');
    plateTexts.forEach(text => {
        text.style.fontFamily = selectedFont;
        if (selectedFont == "'Charles Wright', sans-serif") {
            text.style.padding = "20px";
            text.style.fontSize = '195px';
        }
        else if (selectedFont !== "'Charles Wright', sans-serif") {
            text.style.padding = "20px";
            text.style.fontSize = '185px';
        }
    });
}

function toggleBoxStyle() {
    const effect = document.getElementById('borderEffect').value;
    const style = document.getElementById('styleSelect').value; 
    const frontPlate = document.getElementById('frontPlate');
    const backPlate = document.getElementById('backPlate');
    const backBoxIcon = document.getElementById('backBoxIcon');
    const frontBoxIcon = document.getElementById('frontBoxIcon');
    const frontBorder = document.getElementById('frontBorder');
    const backBorder = document.getElementById('backBorder');

    let translateXValue, borderLeftValue;
    if (window.innerWidth <= 480) {
        document.getElementById('badgeSelectWrapper').style.display = 'none';
        // Set style to 'none'
        frontPlate.style.transform = 'translateX(0px)';
        backPlate.style.transform = 'translateX(0px)';
        backBoxIcon.style.display = 'none';
        frontBoxIcon.style.display = 'none';
        frontBorder.style.left = '5px';
        backBorder.style.left = '5px';
    } else if (window.innerWidth <= 768) {
        translateXValue = '20px';
        borderLeftValue = '55px';
    } else {
        translateXValue = '40px';
        borderLeftValue = '105px';
    }

    switch (style) {
        case "none":
            showElectricBox("none", 'none');
            frontPlate.style.transform = 'translateX(0px)';
            backPlate.style.transform = 'translateX(0px)';
            backBoxIcon.style.display = 'none';
            frontBoxIcon.style.display = 'none';
            frontBorder.style.left = borderLeftValue;
            backBorder.style.left = borderLeftValue;
            break;
        case "electric":
            showElectricBox("block", 'electric');
            frontPlate.style.transform = `translateX(${translateXValue})`;
            backPlate.style.transform = `translateX(${translateXValue})`;
            backBoxIcon.style.display = 'none';
            frontBoxIcon.style.display = 'none';
            frontBorder.style.left = borderLeftValue;
            backBorder.style.left = borderLeftValue;
            break;
        case "electricIcon":
            showElectricBox("block", 'electricIcon');
            backBoxIcon.innerHTML = '<i class="fa-solid fa-bolt-lightning icon1"></i>';
            frontBoxIcon.innerHTML = '<i class="fa-solid fa-bolt-lightning icon"></i>';
            frontPlate.style.transform = `translateX(${translateXValue})`;
            backPlate.style.transform = `translateX(${translateXValue})`;
            backBoxIcon.style.display = 'block';
            frontBoxIcon.style.display = 'block';
            frontBorder.style.left = borderLeftValue;
            backBorder.style.left = borderLeftValue;
            break;
        case "electricIcon1":
            showElectricBox("block", 'electricIcon1');
            backBoxIcon.innerHTML = '<i class="fa-solid fa-plug-circle-bolt icon4"></i>';
            frontBoxIcon.innerHTML = '<i class="fa-solid fa-plug-circle-bolt icon5"></i>';
            frontPlate.style.transform = `translateX(${translateXValue})`;
            backPlate.style.transform = `translateX(${translateXValue})`;
            backBoxIcon.style.display = 'block';
            frontBoxIcon.style.display = 'block';
            frontBorder.style.left = borderLeftValue;
            backBorder.style.left = borderLeftValue;
            break;
        case "electricText":
            showElectricBox("block", 'electricText');
            backBoxIcon.innerText = 'EV';
            backBoxIcon.classList.add('icon2');
            frontBoxIcon.innerText = 'EV';
            frontBoxIcon.classList.add('icon3');
            frontPlate.style.transform = `translateX(${translateXValue})`;
            backPlate.style.transform = `translateX(${translateXValue})`;
            backBoxIcon.style.display = 'block';
            frontBoxIcon.style.display = 'block';
            frontBorder.style.left = borderLeftValue;
            backBorder.style.left = borderLeftValue;
            break;
        case "UK":
            showElectricBox("block", 'UK');
            backBoxIcon.innerText = 'UK';
            backBoxIcon.classList.add('icon2');
            frontBoxIcon.innerText = 'UK';
            frontBoxIcon.classList.add('icon3');
            frontPlate.style.transform = `translateX(${translateXValue})`;
            backPlate.style.transform = `translateX(${translateXValue})`;
            backBoxIcon.style.display = 'block';
            frontBoxIcon.style.display = 'block';
            frontBorder.style.left = borderLeftValue;
            backBorder.style.left = borderLeftValue;
            break;
        default:
            console.error("Invalid style");
    }
}


function toggleBorderEffect() {
    const effect = document.getElementById("borderEffect").value;
    const borderOptions = document.getElementById("borderOptions");
    const frontBorder = document.getElementById("frontBorder");
    const backBorder = document.getElementById("backBorder");

    if (effect === "yes") {
        showBorder("block");
        borderOptions.style.display = "block";

        // Adjust border size based on screen width
        if (window.innerWidth <= 480) {
            frontBorder.style.borderWidth = "2px";
            backBorder.style.borderWidth = "2px";
            frontBorder.style.marginBottom = "-5px";
            frontBorder.style.marginTop = "-5px";
            backBorder.style.marginBottom = "-5px";
            backBorder.style.marginTop = "-5px";
        } else {
            frontBorder.style.borderWidth = "4px"; // Normal border size
            backBorder.style.borderWidth = "4px";
        }
    } else {
        showBorder("none");
        borderOptions.style.display = "none";
    }
}

window.onload = toggleBorderEffect;
window.onresize = toggleBorderEffect;

function toggle4DEffect() {
    const fourDEffect = document.getElementById("fourDEffect").value;
    const textShadowOptions = document.getElementById("textShadowOptions");
    const frontGreenBox = document.getElementById('frontGreenBox');
    const backGreenBox = document.getElementById('backGreenBox');
    const backBoxIcon = document.getElementById('backBoxIcon');
    const frontBoxIcon = document.getElementById('frontBoxIcon');

    if (fourDEffect === 'yes') {
        textShadowOptions.style.display = 'block';
        frontGreenBox.style.boxShadow = '0 0 10px #000';
        backGreenBox.style.boxShadow = '0 0 10px #000';
        backBoxIcon.style.textShadow = '0 0 5px #000';
        frontBoxIcon.style.textShadow = '0 0 5px #000';
    } else {
        textShadowOptions.style.display = 'none';
        frontGreenBox.style.boxShadow = '0 0 0 #000';
        backGreenBox.style.boxShadow = '0 0 0 #000';
        backBoxIcon.style.textShadow = '0 0 0 #000';
        frontBoxIcon.style.textShadow = '0 0 0 #000';
        resetTextShadow();
    }
}

function toggleStamp() {
    const stamp = stampSelect.value;
    switch (stamp) {
        case "yes":
            showStamp("block");
            break;
        case "no":
            showStamp("none");
            break;
        default:
            console.error("Invalid style");
    }
}

function toggleSlogan() {
    const slogan = sloganSelect.value;
    switch (slogan) {
        case "yes":
            showSlogan("block");
            break;
        case "no":
            showSlogan("none");
            break;
        default:
            console.error("Invalid style");
    }
}


function showElectricBox(displayStyle, type) {
    document.getElementById('frontGreenBox').style.display = displayStyle;
    document.getElementById('backGreenBox').style.display = displayStyle;

    const plateTextWrappers = document.querySelectorAll('.plate-text-wrapper');
    plateTextWrappers.forEach(wrapper => {
        if (displayStyle === 'block' && type === 'electric') {
            frontGreenBox.style.backgroundColor = '#00cc00';
            backGreenBox.style.backgroundColor = '#00cc00';
        } else if (displayStyle === 'block' && type === 'electricIcon') {
            frontGreenBox.style.backgroundColor = '#00cc00';
            backGreenBox.style.backgroundColor = '#00cc00';
        } else if (displayStyle === 'block' && type === 'electricIcon1') {
            frontGreenBox.style.backgroundColor = '#00cc00';
            backGreenBox.style.backgroundColor = '#00cc00';
        } else if (displayStyle === 'block' && type === 'electricIcon') {
            frontGreenBox.style.backgroundColor = '#00cc00';
            backGreenBox.style.backgroundColor = '#00cc00';
        } else if (displayStyle === 'block' && type === 'UK') {
            frontGreenBox.style.backgroundColor = '#104188';
            backGreenBox.style.backgroundColor = '#104188';
        } else if (displayStyle === 'none' && type === 'none') {
            wrapper.style.transform = 'none';
        } else {
            wrapper.style.transform = 'none';
        }
    });
}

function showBorder(display) {
    frontBorder.style.display = display;
    backBorder.style.display = display;
}

function showStamp(display) {
    frontStamp.style.display = display;
    backStamp.style.display = display;
}

function showSlogan(display) {
    frontSlogan.style.display = display;
    backSlogan.style.display = display;
}

function changePlateColor() {
    const colorPicker = document.getElementById('colorPicker'); // Ensure colorPicker is defined
    const plateColor = colorPicker.value;
    const plates = document.querySelectorAll('.plate');
    const backBoxIcon = document.getElementById('backBoxIcon');
    const frontBoxIcon = document.getElementById('frontBoxIcon');
    const frontSlogan = document.getElementById("frontSlogan");
    const backSlogan = document.getElementById("backSlogan");

    // Change the color of the backBoxIcon
    backBoxIcon.style.color = plateColor;
    frontBoxIcon.style.color = plateColor;

    // Change the background color of the plates
    plates.forEach(plate => {
        plate.style.background = `linear-gradient(180deg, ${plateColor}, ${plateColor})`;
    });

    // Change the background color of the slogans
    frontSlogan.style.backgroundColor = plateColor;
    backSlogan.style.backgroundColor = plateColor;
}


function changeBorderColor() {
    const borderColor = document.getElementById("borderColor").value;
    const borderElements = document.querySelectorAll('.border');
    borderElements.forEach(element => {
        element.style.borderColor = borderColor;
    });
}

function changeTextColor() {
    const textColor = document.getElementById("textColorPicker").value;
    const textElements = document.querySelectorAll('.plate-text');
    textElements.forEach(element => {
        element.style.color = textColor;
    });
}

function changeSloganColor() {
    const sloganColor = document.getElementById("sloganColorPicker").value;
    const sloganElements = document.querySelectorAll('.slogan');
    sloganElements.forEach(element => {
        element.style.color = sloganColor;
    });
}

function changeTextShadow() {
    const textShadowX = document.getElementById("textShadowX").value;
    const textShadowY = document.getElementById("textShadowY").value;
    const textShadowBlur = document.getElementById("textShadowBlur").value;
    const textShadowColor = document.getElementById("textShadowColor").value;

    const textElements = document.querySelectorAll('.plate-text');
    textElements.forEach(element => {
        element.style.textShadow = `${textShadowX}px ${textShadowY}px ${textShadowBlur}px ${textShadowColor}`;
    });
}

function resetTextShadow() {
    const textElements = document.querySelectorAll('.plate-text');
    textElements.forEach(element => {
        element.style.textShadow = '2px 2px 2px rgba(0, 0, 0, 0.1)';
    });
}

function changePlateStyle() {
    const plateStyle = document.getElementById("plateStyleSelect").value;

    switch (plateStyle) {
        case "standard":
            applyStandardPlateStyle();
            break;
        case "old":
            applyOldPlateStyle();
            break;
        default:
            console.error("Invalid plate style");
    }
}

function TintPlate() {
    const plateStyle = document.getElementById("plateTintSelect").value;
    switch (plateStyle) {
        case "standard":
            applyStandardPlateStyle();
            break;
        case "tinted":
            TintedPlate();
            break;
        default:
            console.error("Invalid plate style");
    }
}


function applyStandardPlateStyle() {
    /*frontPlate.style.background = 'linear-gradient(180deg, #ffffff, #c7c7c7)';*/
    /*backPlate.style.background = 'linear-gradient(180deg, #FFA500, #ca8401)';*/
    frontPlate.style.backgroundColor = '#FFFFFF';
    backPlate.style.backgroundColor = '#FFA500';
    frontPlate.style.borderRadius = "10px";
    backPlate.style.borderRadius = "10px";
    frontPlate.style.lineHeight = "235px";
    backPlate.style.lineHeight = "235px";
    
    const plateTexts = document.querySelectorAll('.plate-text');
    plateTexts.forEach(text => {
        text.style.color = '#000';
    });

    showSlogan("block");
    showStamp("block");
    resetTextShadow();
}

function applyOldPlateStyle() {
    frontPlate.style.backgroundColor = '#000';
    backPlate.style.backgroundColor = '#000';
    frontPlate.style.borderRadius = "10px";
    backPlate.style.borderRadius = "10px";
    frontPlate.style.textShadow = '2px 2px 2px rgba(105,105,105, 1.0)';
    backPlate.style.textShadow = '2px 2px 2px rgba(105,105,105, 1.0)';
    frontPlate.style.lineHeight = "235px";
    backPlate.style.lineHeight = "235px";

    const plateTexts = document.querySelectorAll('.plate-text');
    plateTexts.forEach(text => {
        text.style.color = 'silver';
    });
    

    showSlogan("none");
    showStamp("none");
    showElectricBox("none", 'none')
}

function TintedPlate() {
    frontPlate.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    backPlate.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    frontPlate.style.borderRadius = "10px";
    backPlate.style.borderRadius = "10px";
    frontPlate.style.lineHeight = "235px";
    backPlate.style.lineHeight = "235px";
    frontPlate.style.zIndex = "2";
    backPlate.style.zIndex = "2";
    const plateT = document.getElementById("plateTintSelect").value;
    plateT.style.transform = 'translateX(-40px)';

}


function saveBothPlates() {
    savePlate('front');
    savePlate('back');
}


function savePlate(type) {
    let plateContainer;
    let plateNo = 0;
    if (type === 'front') {
        plateContainer = document.querySelector(".front");
    } else if (type === 'back') {
        plateContainer = document.querySelector(".back");
    } else {
        console.error('Invalid plate type');
        return;
    }

    const scale = 2.5;
    const images = plateContainer.querySelectorAll('img');

    html2canvas(plateContainer, { scale: scale }).then(canvas => {
        const imageURL = canvas.toDataURL(`image/png`, 10.0);
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = `SHM-${type}_plate${plateNo+1}.png`;
        link.click();

        plateContainer.style.boxShadow = "0 0 15px rgba(0, 255, 0, 1.0)";
        setTimeout(() => {
            plateContainer.style.boxShadow = "none";
        }, updateloadTime); 
    });
}

document.addEventListener("DOMContentLoaded", function() {
window.onload = function() {
    document.body.scrollTop = 0;
};

const version = document.getElementById('version');
if (version) {
    version.textContent = `V${versionNumber}`;
}
});