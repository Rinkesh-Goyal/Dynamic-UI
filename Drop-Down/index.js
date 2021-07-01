window.onload=(event)=>{

const image=document.querySelector('.image');
const imgContent=document.querySelector('.img-content')
image.onmouseover = ()=>{
    imgContent.style.visibility='visible';
}
imgContent.onmouseover=()=>{
    imgContent.style.visibility='visible';
}
image.onmouseout = ()=>{
    imgContent.style.visibility='hidden';
}
imgContent.onmouseout=()=>{
    imgContent.style.visibility='hidden';
}

const video=document.querySelector('.video');
const videoContent=document.querySelector('.video-content')
video.onmouseover = ()=>{
    videoContent.style.visibility='visible';
}
videoContent.onmouseover=()=>{
    videoContent.style.visibility='visible';
}
video.onmouseout = ()=>{
    videoContent.style.visibility='hidden';
}
videoContent.onmouseout=()=>{
    videoContent.style.visibility='hidden';
}

const gif=document.querySelector('.gif');
const gifContent=document.querySelector('.gif-content')
gif.onmouseover = ()=>{
    gifContent.style.visibility='visible';
}
gifContent.onmouseover=()=>{
    gifContent.style.visibility='visible';
}
gif.onmouseout = ()=>{
    gifContent.style.visibility='hidden';
}
gifContent.onmouseout=()=>{
    gifContent.style.visibility='hidden';
}
}