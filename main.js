$("#twzipcode").twzipcode();
$('#twzipcode').twzipcode({
    // 依序套用至縣市、鄉鎮市區及郵遞區號框
    'css': ['county', 'district', 'zipcode']
});

// $('#slider').slider();
// $('#slider').slider({
//     autoPlay: true,
//     delay: 5000 // interval
//   });

heroBg = function(){
    var card = document.querySelectorAll('.card');
    card[1].style.zIndex= 5
    card[2].style.zIndex= 4
    card[3].style.zIndex= 3
    card[4].style.zIndex= 2
    card[5].style.zIndex= 1
    // for (var i = 0; i < card.length; i++) {    
    //     card[i].addEventListener('click', ((j) => {         
    //     return function() {
    //     alert(j)
    //     }
    // })(i))
    // }
}
heroBg()

// document.getElementById("p2").style.color = "blue";