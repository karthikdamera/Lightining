<aura:application controller="ccmt.OneAccountController">
    <aura:attribute name="accounts" type="Account[]"/>
    
    <!-- Event handlers -->
    <aura:handler name="init" value="{!this}" action="{!c.handleInit}"/>
    
    <!-- UI components -->
    <ccmt:manageAccounts items="{!v.accounts}"
                         delete="{!c.handleAccountDelete}"
                         quicksave="{!c.handleAccountQuicksave}"/>
</aura:application>