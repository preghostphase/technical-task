# technical-task

Tasks I would undertake if more time were available:

- Looking into storing the JSON Web Token, I’ve read up about storing it as a Cookie, in memory, or in LocalStorage so I would need to do some further research.
- Next I would look at how to fix the missing image within one of the December events - either display a default image if one doesn’t exist, or look at using one of the mobile images returned by the API.
- I would also look at swapping images depending on screen size as listed within the API, so when on mobile use the mobile image etc.

Further notes:

I originally had a solution whereby an initial call is made to the API to return the current month events, and then when a month filter button is clicked, a new call is made to get the events for that month, however I decided to make all calls needed upon page load, thus removing the need of any potential delay whilst users are interacting with the page. Yes, there would be an initial wait to get the events from the API, but all the data is now instantly accessible within the app and any filtering should be without any delay. This method was also chosen to allow implementation of an event count on each month filter button.

I am comfortable using both CSS and SASS during projects, I chose CSS for this build due to the small size of the project.

Github Repo: https://github.com/preghostphase/technical-task 
Live Netlify Link: https://technical-task-arc.netlify.app/ 
