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
            if (day == 1)
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

            else if (day == 7)
            {
            day = 'Sunday'
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


        console.log ( 'Local time: ' + day + ', ' + month + ' ' + date + ", " + time )

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

    
// Other Cities Time


    function other_city_time ()
    {
        let other_city = utc + ( 3600000 * offset )

        let nd = new Date (other_city);


        let day = nd.getDay ()

        let day_of_week = get_day_of_week ()

        function get_day_of_week ()
        {
            if (day == 1)
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

            else if (day == 7)
            {
            day = 'Sunday'
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


        let time = hour + ':' + minute + " " + am_pm


        console.log ( other_city_name + ' time: ' + day + ', ' + month + ' ' + date + ", " + time )

    }