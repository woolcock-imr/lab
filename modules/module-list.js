(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) alert(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var modules={
        "communal-ordering-data-self":{
            title:'My communal ordering records',
            url:$H+"/communal-ordering/record/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form-self", 
            approval_module:prefix+'communal-ordering-approval-form',
            approval_table:"communal-ordering-approval",
            process_module:prefix+'communal-ordering-process-form',
            process_table:"communal-ordering-process",
            receive_module:prefix+'communal-ordering-receive-form',
            receive_table:"communal-ordering-receive",
            self:1,
            description:"Communal ordering data"
        },
        "communal-ordering-form-self":{
            title:'Communal ordering form',
            url:$H+"/communal-ordering/record/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
            self:1,
        },
        "communal-ordering-data":{
            title:'Communal ordering records',
            url:$H+"/communal-ordering/record/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form", 
            approval_module:prefix+'communal-ordering-approval-form',
            approval_table:"communal-ordering-approval",
            process_module:prefix+'communal-ordering-process-form',
            process_table:"communal-ordering-process",
            receive_module:prefix+'communal-ordering-receive-form',
            receive_table:"communal-ordering-receive",
            description:"Communal ordering data"
        },
        "communal-ordering-form":{
            title:'Communal ordering form',
            url:$H+"/communal-ordering/record/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
        },
        "communal-ordering-approval-form":{
            title:"Communal ordering approval",
            url:$H+"/communal-ordering/approval/form.html",
            Table:"communal-ordering-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering approval",
        },
        "communal-ordering-process-form":{
            title:"Communal ordering processing",
            url:$H+"/communal-ordering/process/form.html",
            Table:"communal-ordering-process",
            parent_table:"communal-ordering",
            description:"Communal ordering process",
        },
        "communal-ordering-receive-form":{
            title:"Communal ordering received form",
            url:$H+"/communal-ordering/receive/form.html",
            Table:"communal-ordering-receive",
            parent_table:"communal-ordering",
            description:"Communal ordering received",
        },
        "communal-ordering-diagram":{
            title:"Communal ordering diagram",
            url:$H+"/communal-ordering/diagram/diagram.html",
            description:"Communal ordering diagram",
            router:1,
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
