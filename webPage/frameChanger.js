var totalFrames, actualFrame, container, nextFrame, fileName, fileExtension, actualFile;
totalFrames = 909;
fileExtension = ".html";
time = 400;
steps = 11;

function change(){
    container = document.getElementById("content");
    actualFile = container.getAttribute("src");
    actualFrame = actualFile.split(".");
    if(actualFrame[0] >= totalFrames){
        alert("end")
    } else{
        nextFrame = parseInt(actualFrame[0]) + steps;
        fileName = nextFrame + fileExtension; 
        container.setAttribute("src", fileName);
    }
}
function delay(){
    setTimeout(change, time);
}
