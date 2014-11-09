oneAccount.app demo
===================

Demonstrates a reusable pattern for adding, editing and removing accounts
from a list. As a bonus feature, when an account is selected the user
also has the ability to add, edit or remove child Contact records.

#### ns:manageAccounts

Named after Salesforce Profile permissions that begin with the word "Manage",
this component only takes a single attribute, items. Basically, given a starting
list of Account records (or an empty list), the component has self-contained
functionality to add, edit and remove records from the list. The component
should work for am empty list or a list with any number of records.

#### ns:listAccounts

Named after the StandardController.list() method, this component presents a list
of Account records with the ability for a user to select a record for editing
or to delete a record from the list.

#### ns:editAccount

Named after the StandardController.edit() method

#### ns:accountDelete

* listIndex
* oldRecord

Named after the StandardController.delete() method, this event signifies that
an Account record has been deleted.

The event has an attribute called oldRecord which contains the 

#### ns:accountEdit

* listIndex
* recordId

Named after the StandardController.edit() method, which returns a PageReference
to a page for editing a particular Account record, this event signifies a user's
intent to edit a given Account record.

#### ns:accountQuicksave

* recordId

Named after the StandardController.quicksave() method, which saves changes to
the record in focus but leaves the record in focus in preparation for editing

#### ns:accountSave

Named after the StandardController.save() method, which saves changes to the
record in focus and returns a PageReference to the page for viewing the
saved Account record