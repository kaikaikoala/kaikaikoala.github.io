import {
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import CodepenAvatars from './CodepenAvatars.jsx';

function SweTimeline() {
  const theme = useTheme();
  const timelinePosition = useMediaQuery(theme.breakpoints.up('md')) ? "alternate":"right";
  const timelineSx = useMediaQuery(theme.breakpoints.up('md'))
  ? { }
  : { 
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
	};

  return (
    <div>
    <Typography variant="h3" component="h3">
    Timeline
    </Typography>
    <Timeline
    	position={timelinePosition}
	sx={timelineSx}
	>
    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
    2025
    </TimelineOppositeContent>
    <TimelineSeparator>
    <TimelineDot color="primary" />
    <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
    <Typography variant="h4" component="h4">Google</Typography>
    <Typography variant="body1" component="p">
    Since September 2020, I’ve been working on the Payments Platform, contributing to key systems powering global transactions. Prior to that, I was part of the Google Engineering Residency, during which I rotated across two teams: Google Play Web, where I worked on frontend development, and Payments Risk, where I built a feature for automated experiment ramp-ups, helping the team safely and efficiently test fraud detection strategies at scale.
    </Typography>
    </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
    2019
    </TimelineOppositeContent>
    <TimelineSeparator>
    <TimelineDot />
    <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
    <Typography variant="h4" component="h4">UC Riverside</Typography>
    <Typography variant="body1" component="p">
    At UC Riverside, I was a TTP Peer Mentor, helping transfer students adjust to university life and promoting UCR to prospective students through speaking engagements and tabling events. I also led Typrant, a touch-typing education initiative that won a startup pitch competition. I led the development, led product–market fit research, and served as the keynote speaker at MESA Family Night, where my team also hosted a live play test for attendees.
    </Typography>
    </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
    2017
    </TimelineOppositeContent>
    <TimelineSeparator>
    <TimelineDot color="secondary" />
    <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
    <Typography variant="h4" component="h4">Ohlone college</Typography>
    <Typography variant="body1" component="p">
    At Ohlone College, I founded the Dot-Slash Computer Science Club to build a community around coding and tech. I also worked as a math and physics tutor, helping peers succeed academically. During this time, I created several interactive coding projects, showcasing my early exploration of web technologies and creative programming.
    </Typography>
    <CodepenAvatars/>
    </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent color="text.secondary">
    2015
    </TimelineOppositeContent>
    <TimelineSeparator>
    <TimelineDot variant="outlined" />
    </TimelineSeparator>
    <TimelineContent>
    <Typography variant="h4" component="h4">
    Castro valley high school
    </Typography>
    </TimelineContent>
    </TimelineItem>
    </Timeline>
    </div>
  );
}

export default SweTimeline;
