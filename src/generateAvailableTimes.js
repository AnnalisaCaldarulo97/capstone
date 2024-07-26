export default function generateAvailableTimes(date) {
    // Define opening and closing hours (adjust as needed)
    const openingHours = 17; // 9 AM
    const closingHours = 23; // 10 PM
    const timeInterval = 60; // Time interval in minutes

    // Calculate the number of available slots based on opening and closing hours and time interval
    const totalMinutes = (closingHours - openingHours) * 60;
    const numberOfSlots = totalMinutes / timeInterval;

    // Generate an array of potential time slots
    const potentialTimes = Array.from({ length: numberOfSlots }, (_, index) => {
        const hours = Math.floor((index * timeInterval) / 60) + openingHours;
        const minutes = (index * timeInterval) % 60;
        return `${hours}:${minutes.toString().padStart(2, '0')}`;
    });

    // Randomly select a number of available times (adjust as needed)
    const maxAvailableTimes = 5; // Maximum number of available times
    const availableTimes = [];
    while (availableTimes.length < maxAvailableTimes && potentialTimes.length > 0) {
        const randomIndex = Math.floor(Math.random() * potentialTimes.length);
        availableTimes.push(potentialTimes.splice(randomIndex, 1)[0]);
    }

    availableTimes.sort((a, b) => {
        const [aHours, aMinutes] = a.split(':').map(Number);
        const [bHours, bMinutes] = b.split(':').map(Number);
        return aHours - bHours || aMinutes - bMinutes;
    });

    return availableTimes;
}
