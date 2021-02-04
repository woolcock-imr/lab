//-----------------------------------------
m.print=function(record){
    var txt=m.get_order_print_string(record);
    var w=window.open('');
    w.document.title="print version";
    w.document.body.innerHTML=txt;
}
//-----------------------------------------
