<aura:application controller="ccmt.OneAccountController">
    <aura:attribute name="accountContacts" type="Contact[]"/>
    <aura:attribute name="accounts" type="Account[]"/>
    
    <!-- Event handlers -->
    <aura:handler name="init" value="{!this}" action="{!c.handleInit}"/>
    
    <!-- UI components -->
    <ccmt:manageAccounts items="{!v.accounts}"
                         delete="{!c.handleAccountDelete}"
                         edit="{!c.handleAccountEdit}"
                         quicksave="{!c.handleAccountQuicksave}"/>
    <ccmt:manageContacts items="{!v.accountContacts}"/>
</aura:application>