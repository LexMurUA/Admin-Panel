import { useEffect, useState } from "react";
import { Typography } from "@mui/joy";

export const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <Typography level="h4" variant="plain">
      {formattedDate} {formattedTime}
    </Typography>
  );
};