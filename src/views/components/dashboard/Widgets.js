import { Card, CardContent, Typography } from "@mui/material";

function Widgets({ chartTitles, data }) {
  return (
    <>
      {chartTitles.map((title, index) => (
        <Card key={title} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data[index].name}
            </Typography>
            <Typography variant="body2">Data 1: {data[index].data0}</Typography>
            <Typography variant="body2">Data 2: {data[index].data1}</Typography>
            <Typography variant="body2">Data 3: {data[index].data2}</Typography>
            <Typography variant="body2">Data 4: {data[index].data3}</Typography>
            <Typography variant="body2">Data 5: {data[index].data4}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Widgets;
