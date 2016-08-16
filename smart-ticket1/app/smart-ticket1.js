


if (Meteor.isClient){

//Starting Screen
	        BlazeLayout.render('mainLayout', {main: "Home"});

//No.1 template
	
Template.Home.events({

		'click .start': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "BuySell"});

	    }
	});

 Template.UserInfo.helpers({
 	Account: function(){},
 	Balance: function(){},
 	TicketsOwn: function(){},
 	ContractsOwn: function(){},
 });

Template.BlockInfo.helpers({
	currentBlock: function () {
        return JSON.stringify(Session.get('latestBlock'), null, 2);
    }
})



Template.BuySell.events({
	'click .buy': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "SelectConcert"});

	    },
	'click .sell': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "Sell"});

	    },
	'click .back': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "Home"});

	    },   
});

Template.SelectConcert.events({
	'click .back': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "BuySell"});

	    },   
});

Template.Buy.events({
	'click .back': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "SelectConcert"});

	    },   
});


//No.5 template
	Template.ConfirmBuy.events({
	    'click .no': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "Buy"});

	    },
	    'click .yes': function(event){
	    	event.preventDefault();
	        alert("Buy success!");
      	     BlazeLayout.render('mainLayout', {main: "Home"});

	    }
	});


Template.Sell.events({
	'click .back': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "BuySell"});

	    },   
});




//No.7 template
	Template.ConfirmSell.events({
	    'click .no': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "Sell"});

	    },
	    'click .yes': function(event){
	    	event.preventDefault();
	        alert("Sell success!");
	          BlazeLayout.render('mainLayout', {main: "Home"});
	    }
	});




}


