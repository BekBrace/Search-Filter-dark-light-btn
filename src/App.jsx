import { useState } from 'react';
import './App.css';
import {data} from './data';
import TABLE from './componenets/TABLE';
import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import profile from "./profile.png";

import {
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  const [find, setFind] = useState("");
  const search = (data) => {
    return data.filter(item => 
      item.author.toLowerCase().includes(find) || 
      item.language.toLowerCase().includes(find) ||
      item.title.toLowerCase().includes(find)||
      item.country.toLowerCase().includes(find))
  };
  // console.log(companies.filter((company)=>company.company_name.toLowerCase().includes("a")));
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when 
  // the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>
    <div className="App">
    <Box component="div" p={3}></Box>
          <Card>
            <CardHeader
              action={
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={isDarkTheme} onChange={changeTheme} />
                    }
                    label="Dark Theme"
                  />
                </FormGroup>
              }
            />
            <CardContent>
              <Typography variant="h3" component="h3">
           <div className="greetings">Book Finder📚</div>
                Read more to learn more...
                <br />  
                Welcome to our Bookstore
              </Typography>
              <img className = "pro" src={profile} alt="Logo" />
              <Typography variant="body1">
                Dark Mode is {isDarkTheme ? "On" : "Off"}
              </Typography>
            </CardContent>
          </Card>
      <input type="text" 
      placeholder='Find a book ...' 
      className="iField" 
      onChange = {(e)=>setFind(e.target.value)}/>
      <TABLE data={search(data)} />
    </div>
      </Container>
      </ThemeProvider>
  );
}

export default App;
