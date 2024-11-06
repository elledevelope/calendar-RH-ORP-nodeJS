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
    ]
});

calendar.render();
