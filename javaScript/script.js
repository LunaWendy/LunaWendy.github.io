if(screen.width <= 760) {
document.body.innerHTML =
`
<meta
 name='viewport'
 content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
/>
<div class="mobile" style="padding-top:10vw">
    <p>romina-begus.de</p>
    <div style="position: absolute; top: 15vh;">
    <p>Hallo :) <br>
    <br>
    Bitte besucht meine Website auf einem Desktop,
    damit ihr meine Projekte in voller Größe betrachten könnt. <br>
    <br>
    Vielen Dank!</p>
    <img src="responsiveNO.png"></div>
</div>
`;
document.addEventListener('click', function(ev) {
    let pFontChange = document.querySelector(".changeontap");
    pFontChange.style.fontSize = "4.8vh";
    pFontChange.style.fontFamily = randomFont();
});
}
