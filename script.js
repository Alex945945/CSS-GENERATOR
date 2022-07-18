function fun1() {
    var rt = document.getElementById('rt').value;
    var rd = document.getElementById('rd').value;
    var lt = document.getElementById('lt').value;
    var ld = document.getElementById('ld').value;
    var rti = document.getElementById('rti');
    var rdi = document.getElementById('rdi');
    var lti = document.getElementById('lti');
    var ldi = document.getElementById('ldi');
    
    var block = document.getElementById('block');

    rti.value = rt;
    rdi.value =rd;
    lti.value = lt;
    ldi.value = ld;

    block.style.borderRadius = lt + "px " + rt + "px " + rd + "px " + ld + "px ";
}