const url = 'https://calendar.app.google/YVfHtai58VkmMxQn6';

document.addEventListener('DOMContentLoaded', function() {
    // calendar.schedulingButton.load({
    //       url,
    //       color: '#039BE5',
    //       label: '',
    //       target: target,
    //   });

      var target = document.getElementById('calendar-icon');
      target.addEventListener('click', function() {
        window.open(url, '_blank');
        console.log("Calendar icon clicked"); // Check if click is registered
      });
});
