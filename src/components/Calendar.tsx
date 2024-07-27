// Calendar.tsx
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

interface Event {
  title: string;
  start: number;
  end: number;
  time: string;
}

interface Day {
  dateNum: number;
  dateDay: string;
  events: Event[];
}

const daysData: Day[] = [
  {
    dateNum: 9,
    dateDay: "Mon",
    events: [
      {
        title: "Securities Regulation",
        start: 14, // 2 PM
        end: 17, // 5 PM
        time: "2 PM - 5 PM",
      },
    ],
  },
  {
    dateNum: 10,
    dateDay: "Tues",
    events: [
      {
        title: "Corporate Finance",
        start: 10, // 10 AM
        end: 12, // 12 PM
        time: "10 AM - 12 PM",
      },
      {
        title: "Entertainment Law",
        start: 13, // 1 PM
        end: 16, // 4 PM
        time: "1 PM - 4 PM",
      },
    ],
  },
  {
    dateNum: 11,
    dateDay: "Wed",
    events: [
      {
        title: "Writing Seminar",
        start: 11, // 11 AM
        end: 12, // 12 PM
        time: "11 AM - 12 PM",
      },
      {
        title: "Securities Regulation",
        start: 14, // 2 PM
        end: 17, // 5 PM
        time: "2 PM - 5 PM",
      },
    ],
  },
  {
    dateNum: 12,
    dateDay: "Thurs",
    events: [
      {
        title: "Corporate Finance",
        start: 10, // 10 AM
        end: 12, // 12 PM
        time: "10 AM - 12 PM",
      },
      {
        title: "Entertainment Law",
        start: 13, // 1 PM
        end: 16, // 4 PM
        time: "1 PM - 4 PM",
      },
    ],
  },
  {
    dateNum: 13,
    dateDay: "Fri",
    events: [],
  },
];

const Calendar: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box height="64px" />
            {[
              "9 AM",
              "10 AM",
              "11 AM",
              "12 PM",
              "1 PM",
              "2 PM",
              "3 PM",
              "4 PM",
              "5 PM",
              "6 PM",
            ].map((time) => (
              <Typography
                key={time}
                variant="body2"
                sx={{ height: "64px", lineHeight: "64px" }}
              >
                {time}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Grid container spacing={2}>
            {daysData.map((day) => (
              <Grid item xs key={day.dateNum}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h6">{day.dateNum}</Typography>
                  <Typography variant="subtitle1">{day.dateDay}</Typography>
                </Box>
                <Box position="relative" height="640px" border={1}>
                  {day.events.map((event, index) => (
                    <Paper
                      key={index}
                      sx={{
                        position: "absolute",
                        top: `${(event.start - 9) * 64}px`,
                        height: `${(event.end - event.start) * 64}px`,
                        width: "100%",
                        padding: "8px",
                        bgcolor: (theme) => theme.palette.primary.main,
                      }}
                    >
                      <Typography variant="body2" >{event.title}</Typography>
                      <Typography variant="caption">{event.time}</Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar;
