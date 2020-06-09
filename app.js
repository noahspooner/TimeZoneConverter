// Local Time

    // create Date object for current location
    let d = new Date();

    // convert to msec since Jan 1 1970
    let localTime = d.getTime();

    // obtain local UTC offset and convert to msec
    let localOffset = d.getTimezoneOffset() * 60000;

    // obtain UTC time in msec
    let utc = localTime + localOffset;


    let show_local_time = local_time ()

    function local_time ()
    {
        let day = d.getDay ()

        let day_of_week = get_day_of_week ()

        function get_day_of_week ()
        {
            if (day == 0)
            {
            day = 'Sunday'
            }

            else if (day == 1)
            {
            day = 'Monday'
            }

            else if (day == 2)
            {
            day = 'Tuesday'
            }

            else if (day == 3)
            {
            day = 'Wednesday'
            }

            else if (day == 4)
            {
            day = 'Thursday'
            }

            else if (day == 5)
            {
            day = 'Friday'
            }

            else if (day == 6)
            {
            day = 'Saturday'
            }
        }


        let date = d.getDate ().toLocaleString ()


        let month = d.getMonth ()

        let month_of_year = get_month_of_year ()

        function get_month_of_year ()
        {
            if (month == 0)
            {
                month = 'January'
            }

            else if (month == 1)
            {
                month = 'February'
            }

            else if (month == 2)
            {
                month = 'March'
            }

            else if (month == 3)
            {
                month = 'April'
            }

            else if (month == 4)
            {
                month = 'May'
            }

            else if (month == 5)
            {
                month = 'June'
            }

            else if (month == 6)
            {
                month = 'July'
            }

            else if (month == 7)
            {
                month = 'August'
            }

            else if (month == 8)
            {
                month = 'September'
            }

            else if (month == 9)
            {
                month = 'October'
            }

            else if (month == 10)
            {
                month = 'November'
            }

            else if (month == 11)
            {
                month = 'December'
            }
        }


        let hour = d.getHours ()
        

        let minute = d.getMinutes ()

        let minute_correcter = minute_display_correcter ()

        function minute_display_correcter ()
        {
            if (minute < 10)
            minute = '0' + minute
        }


        let am_pm;

        let time_of_day = get_time_of_day ()

        function get_time_of_day ()
        {
            if (hour <= 11)
            {
                am_pm = 'AM'
            }

            else if (hour >= 12)
            {
                am_pm = 'PM'
            }
          
            if (hour > 12)
            {
                hour = hour % 12
            }
          
            if (hour == 0)
            {
                hour = 12
            }

        }

        let time = hour + ':' + minute + " " + am_pm


        document.getElementById ('local_time').innerHTML = ( day + ', ' + month + ' ' + date + ", " + time )

    }


// Other Cities


    let offset;

    let other_city_name;

    function shanghai_time ()
    {
        offset = 8;

        other_city_name = 'Shanghai'
        
        other_city_time ()
    }

    document.getElementById ('shanghai').addEventListener('click', shanghai_time);


    function tokyo_time ()
    {
        offset = 9;

        other_city_name = 'Tokyo'
        
        other_city_time ()
    }

    document.getElementById ('tokyo').addEventListener('click', tokyo_time);


    function sydney_time ()
    {
        offset = 10;

        other_city_name = 'Sydney'
        
        other_city_time ()
    }

    document.getElementById ('sydney').addEventListener('click', sydney_time);


    function honiara_time ()
    {
        offset = 11;

        other_city_name = 'Honiara'
        
        other_city_time ()
    }

    document.getElementById ('honiara').addEventListener('click', honiara_time);


    function auckland_time ()
    {
        offset = 12;

        other_city_name = 'Auckland'
        
        other_city_time ()
    }

    document.getElementById ('auckland').addEventListener('click', auckland_time);


    function apia_time ()
    {
        offset = 13;

        other_city_name = 'Apia'
        
        other_city_time ()
    }

    document.getElementById ('apia').addEventListener('click', apia_time);


    function honolulu_time ()
    {
        offset = -10;

        other_city_name = 'Honolulu'
        
        other_city_time ()
    }

    document.getElementById ('honolulu').addEventListener('click', honolulu_time);


    function taiohae_time ()
    {
        offset = -9.5;

        other_city_name = 'Taiohae'
        
        other_city_time ()
    }

    document.getElementById ('taiohae').addEventListener('click', taiohae_time);


    function rikitea_time ()
    {
        offset = -9;

        other_city_name = 'Rikitea'
        
        other_city_time ()
    }

    document.getElementById ('rikitea').addEventListener('click', rikitea_time);


    function adamstown_time ()
    {
        offset = -8;

        other_city_name = 'Adamstown'
        
        other_city_time ()
    }

    document.getElementById ('adamstown').addEventListener('click', adamstown_time);


    function vancouver_time ()
    {
        offset = -7;

        other_city_name = 'Vancouver'
        
        other_city_time ()
    }

    document.getElementById ('vancouver').addEventListener('click', vancouver_time);


    function calgary_time ()
    {
        offset = -6;

        other_city_name = 'Calgary'
        
        other_city_time ()
    }

    document.getElementById ('calgary').addEventListener('click', calgary_time);


    function houston_time ()
    {
        offset = -5;

        other_city_name = 'Houston'
        
        other_city_time ()
    }

    document.getElementById ('houston').addEventListener('click', houston_time);


    function ottawa_time ()
    {
        offset = -4;

        other_city_name = 'Ottawa'
        
        other_city_time ()
    }

    document.getElementById ('ottawa').addEventListener('click', ottawa_time);


    function rio_time ()
    {
        offset = -3;

        other_city_name = 'Rio de Janeiro'
        
        other_city_time ()
    }

    document.getElementById ('rio').addEventListener('click', rio_time);


    function stjohn_time ()
    {
        offset = -2.5;

        other_city_name = "St. John's"
        
        other_city_time ()
    }

    document.getElementById ('stjohn').addEventListener('click', stjohn_time);


    function edward_time ()
    {
        offset = -2;

        other_city_name = "King Edward Point"
        
        other_city_time ()
    }

    document.getElementById ('edward').addEventListener('click', edward_time);


    function praia_time ()
    {
        offset = -1;

        other_city_name = "Praia"
        
        other_city_time ()
    }

    document.getElementById ('praia').addEventListener('click', praia_time);


    function canakry_time ()
    {
        offset = 0;

        other_city_name = "Conakry"
        
        other_city_time ()
    }

    document.getElementById ('canakry').addEventListener('click', canakry_time);


    function london_time ()
    {
        offset = 1;

        other_city_name = "London"
        
        other_city_time ()
    }

    document.getElementById ('london').addEventListener('click', london_time);


    function paris_time ()
    {
        offset = 2;

        other_city_name = "Paris"
        
        other_city_time ()
    }

    document.getElementById ('paris').addEventListener('click', paris_time);


    function moscow_time ()
    {
        offset = 3;

        other_city_name = "Moscow"
        
        other_city_time ()
    }

    document.getElementById ('moscow').addEventListener('click', moscow_time);


    function yerevan_time ()
    {
        offset = 4;

        other_city_name = "Yerevan"
        
        other_city_time ()
    }

    document.getElementById ('yerevan').addEventListener('click', yerevan_time);


    function tehran_time ()
    {
        offset = 4.5;

        other_city_name = "Tehran"
        
        other_city_time ()
    }

    document.getElementById ('tehran').addEventListener('click', tehran_time);


    function karachi_time ()
    {
        offset = 5;

        other_city_name = "Karachi"
        
        other_city_time ()
    }

    document.getElementById ('karachi').addEventListener('click', karachi_time);


    function mumbai_time ()
    {
        offset = 5.5;

        other_city_name = "Mumbai"
        
        other_city_time ()
    }

    document.getElementById ('mumbai').addEventListener('click', mumbai_time);


    function dhaka_time ()
    {
        offset = 6;

        other_city_name = "Dhaka"
        
        other_city_time ()
    }

    document.getElementById ('dhaka').addEventListener('click', dhaka_time);


    function yangon_time ()
    {
        offset = 6.5;

        other_city_name = "Yangon"
        
        other_city_time ()
    }

    document.getElementById ('yangon').addEventListener('click', yangon_time);


    function bangkok_time ()
    {
        offset = 7;

        other_city_name = "Bangkok"
        
        other_city_time ()
    }

    document.getElementById ('bangkok').addEventListener('click', bangkok_time);


// Other Cities Time


    function other_city_time ()
    {
        let other_city = utc + ( 3600000 * offset )

        let nd = new Date (other_city);


        let day = nd.getDay ()

        let day_of_week = get_day_of_week ()

        function get_day_of_week ()
        {
            if (day == 0)
            {
            day = 'Sunday'
            }

            else if (day == 1)
            {
            day = 'Monday'
            }

            else if (day == 2)
            {
            day = 'Tuesday'
            }

            else if (day == 3)
            {
            day = 'Wednesday'
            }

            else if (day == 4)
            {
            day = 'Thursday'
            }

            else if (day == 5)
            {
            day = 'Friday'
            }

            else if (day == 6)
            {
            day = 'Saturday'
            }
        }


        let date = nd.getDate ().toLocaleString ()


        let month = nd.getMonth ()

        let month_of_year = get_month_of_year ()

        function get_month_of_year ()
        {
            if (month == 0)
            {
                month = 'January'
            }

            else if (month == 1)
            {
                month = 'February'
            }

            else if (month == 2)
            {
                month = 'March'
            }

            else if (month == 3)
            {
                month = 'April'
            }

            else if (month == 4)
            {
                month = 'May'
            }

            else if (month == 5)
            {
                month = 'June'
            }

            else if (month == 6)
            {
                month = 'July'
            }

            else if (month == 7)
            {
                month = 'August'
            }

            else if (month == 8)
            {
                month = 'September'
            }

            else if (month == 9)
            {
                month = 'October'
            }

            else if (month == 10)
            {
                month = 'November'
            }

            else if (month == 11)
            {
                month = 'December'
            }
        }


        let hour = nd.getHours ()


        let minute = nd.getMinutes ()

        let minute_correcter = minute_display_correcter ()

        function minute_display_correcter ()
        {
            if (minute < 10)
            minute = '0' + minute
        }


        let am_pm;

        let time_of_day = get_time_of_day ()

        function get_time_of_day ()
        {
            if (hour <= 11)
            {
                am_pm = 'AM'
            }

            else if (hour >= 12)
            {
                am_pm = 'PM'
            }

            if (hour > 12)
            {
                hour = hour % 12
            }
          
            if (hour == 0)
            {
                hour = 12
            }

        }

        
        // Print out other time

        let time = hour + ':' + minute + " " + am_pm


        document.getElementById ('other_city_name').innerHTML = (other_city_name)

        document.getElementById ('other_time').innerHTML = ( day + ', ' + month + ' ' + date + ", " + time )


        document.getElementById ('time_box2').style.border = 'solid black'

        document.getElementById ('time_box2').style.width = '193px'

        document.getElementById ('time_box2').style.padding = '0px 10px 0px 10px'


        // Brings user to top of page

        document.documentElement.scrollTop = 0; // For Chromium Browsers, Firefox and IE

        document.body.scrollTop = 0; // For Safari

    }


// Search bar

let search_bar = document.getElementById ('search_bar')


function enter_search ()
{
    let chosen_city = document.getElementById (search_bar.value)

    chosen_city.querySelector ('img').click ()
}


    // Enter key

    search_bar.addEventListener("keyup", function (event) 
    {
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        
        // Start function
        enter_search ()
    }
    });


// Auto reload page every 1 minute

setTimeout (function () {
    window.location.reload (1);
 }, 60000);  // time in ms


 // Grid styling

let start_adjust_for_screen = adjust_for_screen ()

function adjust_for_screen ()
{

    console.log (screen.width)

    let grid = document.getElementById ('grid')

    if ( screen.width <= 1536 && screen.width > 1440 )
    {
        grid.style.paddingLeft = '90px'
    }

    else if ( screen.width <= 1440 && screen.width > 1366 )
    {
        grid.style.paddingLeft = '80px'
    }

    else if ( screen.width <= 1366 && screen.width > 1194 )
    {
        grid.style.gridTemplateColumns = 'auto auto auto'
        grid.style.paddingLeft = '190px'
    }

    else if ( screen.width <= 1194 && screen.width > 1112 )
    {
        grid.style.gridTemplateColumns = 'auto auto auto'
        grid.style.paddingLeft = '140px'
    }

    else if ( screen.width <= 1112 && screen.width > 414 )
    {
        grid.style.gridTemplateColumns = 'auto auto auto'
        grid.style.paddingLeft = '115px'
    }

    else if ( screen.width <= 414 && screen.width > 375 )
    {
        grid.style.gridTemplateColumns = 'auto'
        grid.style.paddingLeft = '105px'
    }

    else if ( screen.width <= 375 && screen.width > 320 )
    {
        grid.style.gridTemplateColumns = 'auto'
        grid.style.paddingLeft = '80px'
    }

    else if ( screen.width <= 320 )
    {
        grid.style.gridTemplateColumns = 'auto'
        grid.style.paddingLeft = '60px'
    }
}