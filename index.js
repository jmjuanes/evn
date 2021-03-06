//Events class
var Evn =
{
  //Events list
  list: {},

  //Add event
  add: function(id, callback, scope)
  {
    //Check the event callback
    if(typeof callback !== 'function'){ return console.error('ERROR: callback must be a function...'); }

    //Check the event ID
    if(typeof id !== 'string'){ return console.error('ERROR: event ID must be a string...'); }

    //Check for empty string
    if(id.replace(/\s/g, '') === ''){ return console.error('ERROR: event ID must not be an empty string...'); }

    //Parse the id
    id = id.trim();

    //Check the events list
    if(typeof this.list[id] === 'undefined'){ this.list[id] = []; }

    //Add the event
    this.list[id].push({ id: id, scope: scope, callback: callback });
  },

  //Remove an event listener
  remove: function(id, callback, scope)
  {
    //Check for undefined event id
    if(typeof id !== 'string'){ return; }

    //Check for empty events
    if(typeof this.list[id] === 'undefined'){ return; }

    //Initialize the new events array
    var events = [];

    //Read all the events
    for(var i = 0; i < this.list[id].length; i++)
    {
      //Get the event
      var e = this.list[id][i];

      //Check for remove the event
      if(e.id === id && e.callback === callback && e.scope === scope){ continue; }

      //Add to the list
      events.push(e);
    }

    //Save the events
    this.list[id] = events;
  },

  //Remove all events listeners
  removeAll: function()
  {
    //Clear the list
    this.list = {};
  },

  //Send the events
  send: function(id)
  {
    //Check the id
    if(typeof id !== 'string')
    {
      //Exit with error
      return console.error('ERROR: you must specify the ID of the events that you are going to call...');
    }

    //Parse the id
    id = id.trim();

    //Check the events
    if(typeof this.list[id] === 'undefined'){ return; }

    //Arguments list
    var args = [];

    //Read all the call arguments
    for(var i = 1; i < arguments.length; i++)
    {
      //Add the argument
      args.push(arguments[i]);
    }

    //Get the list with all the events
    var events = this.list[id];

    //Call all the events
    for(var i = 0; i < events.length; i++)
    {
      //Call this event
      events[i].callback.apply(events[i].scope, args);
    }
  }
};

//Check for node env
if(typeof module === 'object' && typeof exports === 'object'){ module.exports = Evn; }
