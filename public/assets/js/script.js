console.log("checking connection");

const calendarDiv = document.getElementById("calendar");

const calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2024-11-01',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
        {
            title: 'All Day Event',
            start: '2024-10-01'
        },
        {
            title: 'Long Event',
            start: '2024-10-07',
            end: '2024-10-10'
        },
        {
            groupId: '999',
            title: 'Repeating Event',
            start: '2024-10-09T16:00:00'
        },
        {
            groupId: '999',
            title: 'Repeating Event',
            start: '2024-10-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2024-10-11',
            end: '2024-10-13'
        },
        {
            title: 'Meeting',
            start: '2024-10-12T10:30:00',
            end: '2024-10-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2024-10-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2024-10-12T14:30:00'
        },
        {
            title: 'Birthday Party',
            start: '2024-10-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'https://google.com/',
            start: '2024-10-28'
        },
        {
            title: 'Réunion ceppic CSI',
            start: '2024-11-15T09:30:00',
            end: '2024-10-12T10:30:00'
        },
    ],


    // Handling hover events
    eventMouseEnter: function (info) {
        // Create a tooltip element
        let tooltip = document.createElement('div');
        tooltip.className = 'event-tooltip';
        tooltip.innerHTML = info.event.title;
        tooltip.style.backgroundColor = "grey";
        tooltip.style.color = "white";
        tooltip.style.padding = "5px";

        // Append tooltip to the body and position it near the pointer
        document.body.appendChild(tooltip);
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${info.jsEvent.pageX + 10}px`;  // Position slightly to the right of the pointer
        tooltip.style.top = `${info.jsEvent.pageY + 10}px`;   // Position slightly below the pointer

        // Show the tooltip when hovering
        tooltip.style.display = 'block';

        // Remove the tooltip when mouse leaves
        info.el.addEventListener('mouseleave', function () {
            tooltip.remove();
        });
    }

});




calendar.render();
