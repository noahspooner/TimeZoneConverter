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

    const cities = [
        {
            id: "shanghai",
            name: "Shanghai",
            offset: 8,
        },
        {
            id: "tokyo",
            name: "Tokyo",
            offset: 9,
        },
        {
            id: "sydney",
            name: "Sydney",
            offset: 10,
        },
        {
            id: "honiara",
            name: "Honiara",
            offset: 11,
        },
        {
            id: "auckland",
            name: "Auckland",
            offset: 12,
        },
        {
            id: "apia",
            name: "Apia",
            offset: 13,
        },
        {
            id: "honolulu",
            name: "Honolulu",
            offset: -10,
        },
        {
            id: "taiohae",
            name: "Taiohae",
            offset: -9.5,
        },
        {
            id: "rikitea",
            name: "Rikitea",
            offset: -9,
        },
        {
            id: "adamstown",
            name: "Adamstown",
            offset: -8,
        },
        {
            id: "vancouver",
            name: "Vancouver",
            offset: -7,
        },
        {
            id: "calgary",
            name: "Calgary",
            offset: -6,
        },
        {
            id: "houston",
            name: "Houston",
            offset: -5,
        },
        {
            id: "ottawa",
            name: "Ottawa",
            offset: -4,
        },
        {
            id: "rio",
            name: "Rio de Janeiro",
            offset: -3,
        },
        {
            id: "stjohn",
            name: "St. John's",
            offset: -2.5,
        },
        {
            id: "edward",
            name: "King Edward Point",
            offset: -2,
        },
        {
            id: "praia",
            name: "Praia",
            offset: -1,
        },
        {
            id: "canakry",
            name: "Conakry",
            offset: 0,
        },
        {
            id: "london",
            name: "London",
            offset: 1,
        },
        {
            id: "paris",
            name: "Paris",
            offset: 2,
        },
        {
            id: "moscow",
            name: "Moscow",
            offset: 3,
        },
        {
            id: "yerevan",
            name: "Yerevan",
            offset: 4,
        },
        {
            id: "tehran",
            name: "Tehran",
            offset: 4.5,
        },
        {
            id: "karachi",
            name: "Karachi",
            offset: 5,
        },
        {
            id: "mumbai",
            name: "Mumbai",
            offset: 5.5,
        },
        {
            id: "dhaka",
            name: "Dhaka",
            offset: 6,
        },
        {
            id: "yangon",
            name: "Yangon",
            offset: 6.5,
        },
        {
            id: "bangkok",
            name: "Bangkok",
            offset: 7,
        },

        {
            id: "new york city",
            name: "New York City",
            offset: -4,
        },
    ];


    function cityClick(element) {
        console.log(element);

        cities.forEach(city => {
            if (city.id === element.target.parentElement.id || city.id === element.target.parentElement.parentElement.id) {
                other_city_time(city.name, city.offset);
            }
        });
    }

    const bubbleContainer = document.querySelectorAll(".bubble_container");
    bubbleContainer.forEach(container => {
        container.addEventListener('click', cityClick);
    });

    

// Other Cities Time


    function other_city_time (other_city_name, offset)
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
    let chosen_city = search_bar.value

    let chosen_city_lower_case = chosen_city.toLowerCase ()

    console.log (chosen_city_lower_case)

    // To correct cities whose name is different from their id

        if (chosen_city_lower_case === 'rio de janeiro')
        {
            chosen_city_lower_case = 'rio'
        }

        else  if ( chosen_city_lower_case === "st. john's" || chosen_city_lower_case === "st john's" )
        {
            chosen_city_lower_case = 'stjohn'
        }

        else if ( chosen_city_lower_case === "king edward point" )
        {
            chosen_city_lower_case = 'edward'
        }

        else if ( chosen_city_lower_case === "conakry" )
        {
            chosen_city_lower_case = "canakry"
        }

        else if ( chosen_city_lower_case === "new york" )
        {
            chosen_city_lower_case = "new york city"
        }

    // To simulate a click of that city's image

    let chosen_city_element = document.getElementById (chosen_city_lower_case)

    chosen_city_element.querySelector ('img').click ()
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


//search-bar suggestions    
const citySuggestions = document.querySelector(".city-suggestions");
search_bar.addEventListener("focus", showSuggestions);

search_bar.addEventListener("input", showSuggestions);

function showSuggestions() 
{
    let firstLetterMatches = cities.filter(city => search_bar.value.length ? search_bar.value[0].toLowerCase() === city.name[0].toLowerCase() : false);
    let subStringMatches = cities.filter(city => search_bar.value !== "" && city.name.indexOf(search_bar.value) !== -1);
    let matchedCities = firstLetterMatches.filter(city => search_bar.value.toLowerCase() === city.name);
    
    citySuggestions.innerHTML = "";
    if (matchedCities.length > 0) 
    {
        matchedCities.forEach(city => 
            {
            suggestedCityElement(city);
            });
    }
    else if (firstLetterMatches.length > 0) 
    {
        firstLetterMatches.forEach(city => {
            suggestedCityElement(city);
        });
    }
    else if (subStringMatches.length > 0) 
    {
        subStringMatches.forEach(city => 
            {
            suggestedCityElement(city);
            });
    }
}

function searchSuggestionClicked(element) {
    let chosen_city = document.getElementById(element.target.dataset.city_id);
    chosen_city.querySelector ('img').click ()
}

function suggestedCityElement(city) 
{
    const suggestedCity = document.createElement("li");
    suggestedCity.className = "suggestion";
    suggestedCity.innerText = city.name;
    suggestedCity.dataset.city_id = city.id;
    suggestedCity.addEventListener('mousedown', searchSuggestionClicked);
    citySuggestions.appendChild(suggestedCity);
    citySuggestions.style.display = "grid";
}

search_bar.addEventListener("blur", () => citySuggestions.style.display = "none");


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