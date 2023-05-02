# technical-task

Tasks I would undertake if more time were available:

- Looking into storing the JavaScript Web Token, as keeping it in a variable is not very secure. I read something about storing it ‘In Memory’ over using LocalStorage or Cookies so would need to look more into that. 
- Next I would look at how to fix the missing image within one of the December events - either display a default image if one doesn’t exist, or look at using one of the mobile images returned by the API.
- I would also look at swapping images depending on screen size as listed within the API, so when at mobile use the mobile image etc.
- I would also convert the project to using sass instead of css.

Further notes:

I originally had a solution whereby an initial call is made to the API to return the current month events, and then when a month filter button is clicked, a new call is made to get the events for that month, however I decided to make all calls needed upon page load, thus removing the need of any potential delay whilst users are interacting with the page. Yes, there would be an initial wait to get the events from the API, but at least then all the data is accessible within the app and any filtering should be instantaneous. I also believe that this was the best method to allow implementation of an event count on each month filter button.

Github Repo: https://github.com/preghostphase/technical-task 
Live Netlify Link: https://technical-task-arc.netlify.app/ 
