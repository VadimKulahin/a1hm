function findMaxProfit(activities) {
    activities.sort((a, b) => {
      return a.start - b.start;
    });
  
    const conferenceStart = 9; 
    const conferenceEnd = 17; 
    const morningRate = 1; 
    const afternoonRate = 2; 
  
    let maxProfit = 0; 
    let currentEndTime = conferenceStart; 
  
    for (const activity of activities) {
      if (activity.start >= currentEndTime && activity.end <= conferenceEnd) {
        let activityProfit = 0;
        if (activity.start < 13) {
          activityProfit += morningRate * (Math.min(activity.end, 13) - activity.start);
        }
        if (activity.end > 13) {
          activityProfit += afternoonRate * (activity.end - Math.max(activity.start, 13));
        }
        maxProfit += activityProfit;
        currentEndTime = activity.end;
      }
    }
  
    return maxProfit;
  }
  
  const activities = [
    { start: 11, end: 14 },
    { start: 12, end: 16 },
    { start: 10, end: 12 },
    { start: 14, end: 15 },
  ];
  const maxProfit = findMaxProfit(activities);
  console.log('Maximum benefit', maxProfit);
  