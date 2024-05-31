import fs from "fs";
const url = 'https://kyc.biometric.kz/api/v1/backend/liveness/short/';
const apiKey = 'W-EFrw51p8ftC2wAbCvGISnocqI_LR60Qntm3ilkMC2XCic';
const video = document.getElementById("videoElement")


if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function () {
      console.log("Something went wrong!");
    });
}
function capture(){
  const screenshotTarget = document.querySelector("#videoElement");
  html2canvas(screenshotTarget).then((canvas) => {
    return canvas.toDataURL("image/png");
  });
};
const formData = new FormData();
  formData.append('api_key', apiKey);
  formData.append('image', fs.createReadStream("C:/Biometric/photo.png"));
  fetch(url, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

