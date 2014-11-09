<aura:application controller="ccmt.OneAccountController">
    <aura:attribute name="accountId" type="Id"/>
    <aura:attribute name="accounts" type="Account[]"/>
    
    <!-- Event handlers -->
    <aura:handler name="init" value="{!this}" action="{!c.handleInit}"/>
    
    <!-- UI components -->
    <ccmt:manageAccounts items="{!v.accounts}"
                         delete="{!c.handleAccountDelete}"
                         edit="{!c.handleAccountEdit}"
                         quicksave="{!c.handleAccountQuicksave}"/>
    <ccmt:manageContacts account="{!v.accountId}"/>
</aura:application>