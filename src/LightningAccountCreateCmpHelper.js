({
    createAccount : function(component) {
        
        var newAccount = component.get("v.newAccount");
        
        var nameField = component.find('acc-name');
        var accountName = nameField.get('v.value');
        console.log('Name = ' + accountName);
        
        var accountNumberField = component.find('account-number');
        var accountNumber = accountNumberField.get('v.value');
        console.log('Account Number = ' + accountNumber);
        
        var accountNumberOfEmployeesField = component.find('number-of-employees');
        var accountNumberOfEmployees = accountNumberOfEmployeesField.get('v.value');
        console.log('NumberOfEmployees = ' + accountNumberOfEmployees);
        
        var accountPhoneField = component.find('phone');
        var accountPhone = accountPhoneField.get('v.value');
        console.log('Phone = ' + accountPhone);
        
        console.log('newAccount = ' + newAccount);

        this.saveAccount(component, newAccount, function(a) {
            console.log(a);
        });        
    },
    saveAccount : function(component, account, callback) {
        var action = component.get("c.saveAccount");
        console.log(account);
        action.setParams({
            "account": account
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        // ApexMethod実行
        $A.enqueueAction(action);
    }
})