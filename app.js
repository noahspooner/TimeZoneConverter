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

        }

        let time = hour + ':' + minute + " " + am_pm


        console.log ( 'Local time: ' + day + ', ' + month + ' ' + date + ", " + time )

    }


// Other Cities

    // Shanghai

    let show_shanghai_time = shanghai_time ()

    function shanghai_time ()
    {
    
        let offset = 8;

        let shanghai = utc + ( 3600000 * offset )

        let nd = new Date (shanghai);


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
            hour=hour%12
        }


        let time = hour + ':' + minute + " " + am_pm


        console.log ( 'Shanghai time: ' + day + ', ' + month + ' ' + date + ", " + time )

    }
