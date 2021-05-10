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
