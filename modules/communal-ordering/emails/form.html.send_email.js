//-----------------------------------------
var send_email=function(data,url,callback){
    /*
    var form="communal-ordering-pdf-form";
    if(url.indexOf($vm.api_address)!=-1) form="";
    var ddd={};
    for(a in data){
        ddd[a]=data[a];
    }
    if(form==''){
        open_model__ID();
        $('#msg__ID').text('Sending email ... please wait!');
        $vm.vmpost(url,ddd,function(code){
            close_model__ID();
            callback(code)
        });
    }
    else{
        var mm=$vm.module_list[form];
        var id=mm.id;
        $('#D'+id).show();
        setTimeout(function(){
            open_model__ID();
            $('#msg__ID').text('Sending email with pdf attachment... please wait!');
            mm.pdf_data(m.input.record,function(d){
                $('#D'+id).hide();
                ddd['attachment']=d.b64str;
                $vm.vmpost(url,ddd,function(code){
                    close_model__ID();
                    callback(code);
                });
            })
        },100);
    }
    */
    var record=data;
console.log(record)    
   var ddd={};
   for(a in data.Data){
       ddd[a]=data.Data[a];
   }

   $.get($vm.module_list['communal-ordering-print'].url,function(txt){
    var d="aaa";//record.Submit_date.substring(0,10).replace(/-/g,'');
    txt=txt.replace('#Purchase Order No#',d+"-"+record.UID);
    txt=txt.replace('#Account No#',record.Supplier_Account_Number);
    txt=txt.replace('#V_Name#',record.Supplier_Name);
    txt=txt.replace('#V_Address#',record.Supplier_Address);
    txt=txt.replace('#V_Phone#',record.Supplier_Phone);
    txt=txt.replace('#V_Fax#',record.Supplier_Fax);
    txt=txt.replace('#D_Name#',record.Requestor_Name);
    txt=txt.replace('#D_Address#',record.Deliver_Address);
   
    txt=txt.replace('#Q_No#',record.Quotation_Number);
    txt=txt.replace('#P_Code#',record.Project_Code);
    
    txt=txt.replace('#Sub Total#',record.Sub_Total);
    txt=txt.replace('#SDelivery#',record.Delivery);
    txt=txt.replace('#GST#',record.GST_Amount);
    txt=txt.replace('#Grand Total#',record.Total_Amount);

    var Items=record.items;
    var Len=Items.length;
    for(var i=0;i<15;i++){
        var I=i+1;
        var T1="#No"+I+"#";
        var T2="#D"+I+"#";
        var T3="#Q"+I+"#";
        var T4="#P"+I+"#";
        var T5="#A"+I+"#";
        var T6="#C"+I+"#";
        var T7="#Nm"+I+"#";
        if(i<Len){
            txt=txt.replace(T1,Items[i].Item_No);
            txt=txt.replace(T2,Items[i].Description);
            txt=txt.replace(T3,Items[i].Unit_Price);
            txt=txt.replace(T4,Items[i].Quantity);
            txt=txt.replace(T5,Items[i].Amount);
            txt=txt.replace(T6,Items[i].Project_Code);
            txt=txt.replace(T7,Items[i].Name_of_person_ordering);
        }
        else{
            txt=txt.replace(T1,'&nbsp;');
            txt=txt.replace(T2,'&nbsp;');
            txt=txt.replace(T3,'&nbsp;');
            txt=txt.replace(T4,'&nbsp;');
            txt=txt.replace(T5,'&nbsp;');
            txt=txt.replace(T6,'&nbsp;');
            txt=txt.replace(T7,'&nbsp;');
        }
        var V1=record.Total_Amount
    }


    txt=txt.replace(/undefined/g,'');
    ddd['form']=txt;
    open_model__ID();
    $('#msg__ID').text('Sending email ... please wait!');
alert(1)    
    $vm.vmpost(url,ddd,function(code){
        close_model__ID();
        callback(code)
    });
   
    /*
    var w=window.open('');
    w.document.title="print version";
    w.document.body.innerHTML=txt;
    */
},'text');



}
//-----------------------------------------
//var open_print_page=function(record){
//}
