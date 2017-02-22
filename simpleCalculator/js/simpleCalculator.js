
function count(){
    var txt1 = document.getElementById('txt1').value;
       //获取第一个输入框的值
    var txt2 = document.getElementById('txt2').value;
       //获取第二个输入框的值
    var select1 = document.getElementById('select').value;
       //获取选择框的值
    var result = '';
    switch(select1){
        case '+':
            result = parseInt(txt1) + parseInt(txt2);
            break;
        case '-':
            result = parseInt(txt1) - parseInt(txt2);
            break;
        case '*':
            result = parseInt(txt1) * parseInt(txt2);
            break;
        default:
            result = parseInt(txt1) / parseInt(txt2);
    }
    document.getElementById('result').value = result;
} 