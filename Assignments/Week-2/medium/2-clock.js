// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function update_time() {
    let timeString;
    setInterval(function () {
        const d = new Date();
        console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }, 1000);
}
update_time();
