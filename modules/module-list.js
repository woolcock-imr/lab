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
        "management":{url:$vm.hosting_path+"/modules/panels/management.html",description:"panel",router:1},
        "communal-ordering-data-self":{
            title:'My communal ordering records',
            url:$H+"/communal-ordering/record/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form-self", 
            description:"Communal ordering data",
            self:1,
            
            lab_manager_approval_module:prefix+'communal-ordering-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'communal-ordering-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            finacial_approval_module:prefix+'communal-ordering-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'communal-ordering-receive-form',
            receive_table:"communal-ordering-receive",
        },
        "communal-ordering-form-self":{
            title:'Communal ordering form',
            url:$H+"/communal-ordering/record/form.html",
            Table:"communal-ordering",
            
            supplier_table:"communal-ordering-company",
            supervisor_table:"communal-ordering-supervisor",
            
            description:"Communal ordering form",
            self:1,
            router:1
        },
        "communal-ordering-data":{
            title:'Communal ordering records',
            url:$H+"/communal-ordering/record/data.html",
            Table:"communal-ordering",
            form_module:"communal-ordering-form", 
            description:"Communal ordering data",
            
            lab_manager_approval_module:prefix+'communal-ordering-lab-manager-approval-form',
            lab_manager_approval_table:"communal-ordering-lab-manager-approval",
            supervisor_approval_module:prefix+'communal-ordering-supervisor-approval-form',
            supervisor_approval_table:"communal-ordering-supervisor-approval",
            finacial_approval_module:prefix+'communal-ordering-financial-approval-form',
            financial_approval_table:"communal-ordering-financial-approval",
            receive_module:prefix+'communal-ordering-receive-form',
            receive_table:"communal-ordering-receive",
        },
        "communal-ordering-form":{
            title:'Communal ordering form',
            url:$H+"/communal-ordering/record/form.html",
            Table:"communal-ordering",
            description:"Communal ordering form",
        },
        "communal-ordering-pdf-form":{
            title:'Communal ordering pdf form',
            url:$H+"/communal-ordering/record/form.html",
            Table:"communal-ordering",
            description:"Communal ordering pdf form",
        },
        "communal-ordering-lab-manager-approval-form":{
            title:"Communal ordering lab manager approval",
            url:$H+"/communal-ordering/lab-manager-approval/form.html",
            Table:"communal-ordering-lab-manager-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering lab manager approval",
        },
        "communal-ordering-supervisor-approval-form":{
            title:"Communal ordering supervisor approval",
            url:$H+"/communal-ordering/supervisor-approval/form.html",
            Table:"communal-ordering-supervisor-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering supervisor approval",
        },
        "communal-ordering-financial-approval-form":{
            title:"Communal ordering financial approval",
            url:$H+"/communal-ordering/financial-approval/form.html",
            Table:"communal-ordering-financial-approval",
            parent_table:"communal-ordering",
            description:"Communal ordering financial approval",
        },
        "communal-ordering-receive-form":{
            title:"Communal ordering received form",
            url:$H+"/communal-ordering/receive/form.html",
            Table:"communal-ordering-receive",
            parent_table:"communal-ordering",
            description:"Communal ordering received",
        },

        



        /*
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
        "communal-ordering-diagram":{
            title:"Communal ordering diagram",
            url:$H+"/communal-ordering/diagram/diagram.html",
            description:"Communal ordering diagram",
            router:1,
        },
        */


        "communal-ordering-company-data":{
            title:'Company records',
            url:$H+"/company/data.html",
            Table:"communal-ordering-company",
            form_module:"communal-ordering-company-form", 
        },
        "communal-ordering-company-form":{
            title:'Company form',
            url:$H+"/company/form.html",
            Table:"communal-ordering-company",
        },
        "communal-ordering-supervisor-data":{
            title:'supervisor records',
            url:$H+"/supervisor/data.html",
            Table:"communal-ordering-supervisor",
            form_module:"communal-ordering-supervisor-form", 
        },
        "communal-ordering-supervisor-form":{
            title:'Supervisor form',
            url:$H+"/supervisor/form.html",
            Table:"communal-ordering-supervisor",
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();
