function extractFiles(pathFile) {
    let pathFileArray = pathFile.split('\\');
    let fileNameSpliced = pathFileArray.splice(-1);
    let file = fileNameSpliced[0].split('.');
    let fileExtension = file.splice(-1);
    let fileName = file.join('.')

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFiles('C:\\Internal\\training-internal\\Template.bak.pptx')