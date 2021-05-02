function sendEmail(){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "liawyudye@gmail.com",
    Password: "ztkmkuwslfvipifn",
    To: 'butterfly.liaw@gmail.com',
    From: "liawyudye@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
    .then(function (message) {
      alert("mail sent successfully")
    });


}

function postForm(){
  
    var data = {
        'name' : 'name1',
        'phone': 'phone1',
        'time': 'filltime1',
        'order': 'order1',
        'price': 'price1',
        }

  
  const uri = `https://script.google.com/macros/s/AKfycbzFmI8qxvMj_OMYcxDEdZYho4rUzp8R7KNLCeEccScYvhz5r4o1GzkuxSZwDxMWvT3g1Q/exec`;

  // fetch(uri, { method: "GET", mode:'cors', data: data, dataType: "jsonp" })
  // fetch(`${cors}${uri}`, { method: "GET", data: data, dataType: "jsonp"})
    

  $.ajax({
    // 這邊用get type
    type: "get",
    // api url - google appscript 產出的 url
    url: uri,
    // 剛剛整理好的資料帶入
    data: data,
    // 資料格式是JSON 
    // dataType: "JSON",
    dataType: "jsonp",
    // 成功送出 會回頭觸發下面這塊感謝,
    // mode:'no-cors',
    crossDomain: true,
    success: function (response) {
      console.log(response);
      alert('感謝您的訂購！！');
    }
  });
};

postForm()