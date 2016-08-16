


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

//need Mumin's Web3 heack to finish
 Template.UserInfo.helpers({
 	Account: function(){},
 	Balance: function(){},
 	TicketsOwn: function(){},
 	ContractsOwn: function(){},
 });

//Copied from Simple dapp example
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


////////BUY SECTION/////////////
Template.SelectConcert.events({
	'click .back': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "BuySell"});

	    },
	'submit form': function(event){
			event.preventDefault();
			var ConcertInstance = event.target.concertName.value;
			
			Session.set('TargetConcert',ConcertInstance);
			//Not finished yet
	}   
});

// Mumin hack
Template.Buy.helpers({
	Host: function(){},
	Place: function(){},
	StartTime: function(){},
	EndTime: function(){},
	TicketPrice: function(){},
	TicketAvailable: function(){},

})

Template.Buy.events({
	'click .back': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "SelectConcert"});

	    },   
	'click .buy':function(event){
		event.preventDefault();
		//session set a lot of things, not done
		BlazeLayout.render('mainLayout', {main: "ConfirmBuy"});
	}
});


	Template.ConfirmBuy.events({
	    'click .no': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "Buy"});

	    },
	    'click .yes': function(event){
	    	event.preventDefault();
	    	//starting transcation, alert when transaction finished
	        alert("Buy success!");
      	     BlazeLayout.render('mainLayout', {main: "Home"});

	    }
	});

/////////SELL SECTION/////////////
Template.Sell.events({
	'click .back': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "BuySell"});

	    },   
	'submit form': function(event){
			event.preventDefault();
			var concertName = event.target.concertName.value;
			var startTime = event.target.startTime.value;
			var endTime = event.target.endTime.value;
			var refundDeadline = event.target.refundDeadline.value;
			var ticketAmount = event.target.ticketAmount.value;
			var ticketPrice = event.target.ticketPrice.value;
			var intro = event.target.intro.value;
			//session.set a shit load of things
			//Not finished yet
		}
});

///apply seesion.get to get these infos
Template.ConfirmSell.helpers({
	concertName: function(){},
	startTime: function(){},
	endTime: function(){},
	refundDeadline: function(){},
	ticketAmount: function(){},
	ticketPrice: function(){},
	intro: function(){},
})

Template.ConfirmSell.events({
	    'click .no': function(event){
	    	event.preventDefault();
	        BlazeLayout.render('mainLayout', {main: "Sell"});

	    },
	    'click .yes': function(event){
	    	event.preventDefault();
	    	//starting transcation, alert when transaction finished
	        alert("Sell success!");
	          BlazeLayout.render('mainLayout', {main: "Home"});
	    }

});



}


