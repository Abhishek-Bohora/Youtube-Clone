import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  // console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* if it is a video than we are displaying the <videoCard/> component */}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {/* if it is a channel than we are displaying the <ChannelCard/> component */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
