import Navibar from "../../Components/Navibar/Navibar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import "./Calendar.css"


const Calendar = () => {

    const handleDateclick = (selected:any) => {
        const title = prompt("Please enter a new title for event")
        const calendarAPI = selected.view.calendar;
        calendarAPI.unselect();
    
        if (title) {
            calendarAPI.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    
        
    };
    const handleEventclick = (selected:any) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ){
            selected.event.remove();
        }
    }


return (
    <div >
        <Navibar />
        <div className="row">
            <div className="col-xs-10 col-sm-2">
                <Sidebar />
            </div>
            <div className="col-xs-10 col-sm-10 cal">
                <FullCalendar 
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar= {{
                    start: 'today,prev,next',
                    center: 'title',
                    end:'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                height={"60vh"}
                selectable = {true}
                selectMirror ={true}
                select={handleDateclick}
                eventClick={handleEventclick}
                />
                



            </div>
        </div>
    </div>
)
}

export default Calendar