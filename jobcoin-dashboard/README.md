# Jobcoin-Dashboard

### Description
Jobcoin Dashboard was made using create-react-app.

The archetecture is as follows:
Parent
-App.js
Children (conditionally rendered)
-LogIn
-Dashboard
Grandchildren (children of Dashboard)
-Nav
-Balance
-Transfer
-HistoryGraph

There is a global stylesheet used for global and reusable styles as well as a css file for each component which is imported in individually.


### Running locally
To Jobcoin Dashboard on your machine, navigate to jobcoin-dashboard/jobcoin-dashboard and run:
`npm install && npm start`
Which should automatically navigate you to localhost:3000

### Features
Upon logging in, Jobcoin Dashboard makes an API call to the Jobcoin API which either retrieves an existing user's balance and transaction history or creates a new user if it doesn't exist.  This happens in App.js so the whole app has access to this information as props. Once logged in, the Dashboard shows the balance (which updates in real time if the user makes a transaction) and a transaction form to send others jobcoin if their balance allows.  The Balance history line graph is made with react-chartjs-2.  History graph was made into a functional componenet because it is much easier to do more complex computation in a functional component than a class componenet.  The balance was calculated by doing a backwards loop to reverse engineer the balance history based on the current balance and then checking whether to add or subtract based on the fromAddress.  Additionally, the 0th index was made to be zero to correspond with when the account was opened.  As for the dates, I used the JS Date API and then formatted the date to include the DD/MM/YYYY and time.  The 0th index was made to be account opened.  These two calculations were used to make the X (date and time) and Y (balance) datapoints.

### API Reference
The Jobcoin API was used to obtain the user's balance and transaction history.
