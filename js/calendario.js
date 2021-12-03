document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Neumococo Conjugada 13 valente',
                start: '2020-11-12',
                end: '2020-11-12'
            },
            {
                title: 'Quintuple o Pentavalente',
                start: '2020-11-18',
                end: '2020-11-18'
            },
            {
                title: 'Triple Viral',
                start: '2020-11-19',
                end: '2020-11-19'
            },
            {
                title: 'Antigripal',
                start: '2020-11-19',
                end: '2020-11-19'
            },
            {
                title: 'IPV',
                start: '2020-11-24',
                end: '2020-11-24'
            },
            {
                title: 'Hepatitis B',
                start: '2020-11-24',
                end: '2020-11-24'
            },
            {
                title: 'Hepatitis B',
                start: '2020-12-16',
                end: '2020-12-16'
            },
            {
                title: 'IPV',
                start: '2020-12-10',
                end: '2020-12-10'
            },
            {
                title: 'Triple Viral',
                start: '2020-12-16',
                end: '2020-12-16'
            },
            {
                title: 'Quintuple o Pentavalente',
                start: '2020-12-20',
                end: '2020-12-20'
            },
            {
                title: 'Neumococo Conjugada 13 valente',
                start: '2020-12-20',
                end: '2020-12-20'
            },
            {
                title: 'Triple Viral',
                start: '2020-12-29',
                end: '2020-12-29'
            },
            {
                title: 'Varicela',
                start: '2021-01-12',
                end: '2021-01-12'
            },
            {
                title: 'Antigripal',
                start: '2021-01-12',
                end: '2021-01-12'
            },
            {
                title: 'Triple Viral',
                start: '2021-01-29',
                end: '2021-01-29'
            },
            {
                title: 'Doble Bacteriana',
                start: '2021-01-29',
                end: '2021-01-29'
            }
        ]
    }); 

    calendar.render();
  });