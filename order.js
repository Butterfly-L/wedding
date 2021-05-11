

function postForm(){
    const form = document.getElementById('form');
    const nameValue = form.elements.nameValue.value;
    const relationValue = form.elements.relationValue.value;
    const attendanceValue = form.elements.attendanceValue.value;
    const childrenChairValue = form.elements.childrenChairValue.value;
    const receiveMethodValue = form.elements.receiveMethodValue.value;
    const emailValue = form.elements.emailValue.value;
    const addressValue = form.elements.addressValue.value;
    const phoneValue = form.elements.phoneValue.value;
    const messageValue = form.elements.messageValue.value;
  
    var data = {
        'nameValue' : nameValue,
        'relationValue': relationValue,
        'attendanceValue': attendanceValue,
        'childrenChairValue':childrenChairValue,
        'receiveMethodValue':receiveMethodValue,
        'emailValue':emailValue,
        'addressValue':addressValue,
        'phoneValue':phoneValue,
        'messageValue':messageValue,
        
        }

  
  const uri = `https://script.google.com/macros/s/AKfycbxrKMpsU2tS79LEm-_-siwuAxHKsPVHQYxpQDQnh_wdG6f26T0P3M82Q__YC_Lq204XwQ/exec`;


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


    Email.send({
      // Host : "smtp.gmail.com",
      SecureToken:"fabfdf20-8177-4f1e-bd0e-05affb316008",
      To : 'yudye.liaw@gmail.com',
      From : "yudye.liaw@gmail.com",
      Subject : "This is the subject",
      Body : JSON.stringify(data)
    })
    .then(
    () => alert('sent')
    );
    
};


