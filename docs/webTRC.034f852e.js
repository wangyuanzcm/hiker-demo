"use strict";const startBtn=document.getElementById("startBtn"),recordBtn=document.getElementById("recordBtn"),downloadBtn=document.getElementById("downloadBtn"),video=document.querySelector("video");let mediaRecorder,isRecording=!1,recordedBlobs=[];function showMsg(e,d){document.querySelector("#msg").innerHTML+=`<p>${e}</p>`,void 0!==d&&console.error(d)}function gotDisplayStream(e){startBtn.disabled=!0,video.srcObject=e,window.stream=e,e.getVideoTracks()[0].addEventListener("ended",(()=>{showMsg("用户停止了分享屏幕"),startBtn.disabled=!1,recordBtn.disabled=!0})),recordBtn.disabled=!1}function onErr(e){showMsg(`getDisplayMedia on err: ${e.name}`,e)}function stopRecord(){isRecording=!1,mediaRecorder.stop(),downloadBtn.disabled=!1,recordBtn.textContent="开始录制"}function startRecording(){recordedBlobs=[];const e={mimeType:getSupportedMimeTypes()[0]};try{mediaRecorder=new MediaRecorder(window.stream,e)}catch(e){return void showMsg(`创建MediaRecorder出错: ${JSON.stringify(e)}`)}recordBtn.textContent="停止录制",isRecording=!0,downloadBtn.disabled=!0,mediaRecorder.onstop=e=>{showMsg("录制停止了: "+e)},mediaRecorder.ondataavailable=handleDataAvailable,mediaRecorder.start(),showMsg("录制开始 mediaRecorder: "+mediaRecorder)}function handleDataAvailable(e){console.log("handleDataAvailable",e),e.data&&e.data.size>0&&recordedBlobs.push(e.data)}function getSupportedMimeTypes(){return["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm;codecs=h264,opus","video/mp4;codecs=h264,aac"].filter((e=>MediaRecorder.isTypeSupported(e)))}startBtn.addEventListener("click",(()=>{navigator.mediaDevices.getDisplayMedia({video:!0}).then(gotDisplayStream,onErr)})),navigator.mediaDevices&&"getDisplayMedia"in navigator.mediaDevices?startBtn.disabled=!1:showMsg("getDisplayMedia is not supported"),recordBtn.addEventListener("click",(()=>{0==isRecording?startRecording():stopRecord()})),downloadBtn.addEventListener("click",(()=>{const e=new Blob(recordedBlobs,{type:"video/webm"}),d=window.URL.createObjectURL(e),t=document.createElement("a");t.style.display="none",t.href=d,t.download="录屏_"+(new Date).getTime()+".webm",document.body.appendChild(t),t.click(),setTimeout((()=>{document.body.removeChild(t),window.URL.revokeObjectURL(d)}),100)}));
//# sourceMappingURL=webTRC.034f852e.js.map
