// import { ThemeProvider } from "styled-components";
// import "./App.css";
// import CardList from "./components/card/CardList";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Counter from "./components/counter/Counter";
import CounterUseCallback from "./components/counter/CounterUseCallback";
import HackNews from "./components/news/HackNews";
// import CardTailwind from "./components/card/CardTailwind";
import Photos from "./components/photo/Photos";
import Photos2 from "./components/photo/Photos2";
// import Game from "./components/tictactoe/Game";
import Game from "./components/tictactoe-reducer/Game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import PhotoClone from "./components/photo/PhotoClone";
import HackNewsReducer from "./components/news/HackNewsReducer";
import SimpleClock from "./components/clock/SimpleClock";
// import Input from "./components/input/Input";
import TextareaAutoResize from "./components/textarea/TextareaAutoResize";
import Dropdown from "./components/dropdown/Dropdown";
import Blog from "./components/blog/Blog";
import BlogCustomHook from "./components/blog/BlogCustomHook";
import { useState } from "react";
import HackNewCustomHook from "./components/news/HackNewCustomHook";
import DropdownCustomHook from "./components/dropdown/DropdownCustomHook";
import useClickOutSide from "./hooks/useClickOutSide";
import SidebarMenu from "./components/sidebar/SidebarMenu";
import Form from "./form/Form";
import Form2 from "./form/Form2";
import MovieSearchApp from "./components/movie/MovieSearchApp";
import SignUpForm from "./form/SignUpForm";
import SignUpFormYup from "./form/SignUpFormYup";

function App() {
  const { show, nodeRef, setShow } = useClickOutSide();
  return (
    <div>
      {/* <button onClick={() => setShow(!show)}>Toggle show</button>
      {show && <HackNewCustomHook></HackNewCustomHook>} */}
      {/* <div className="text-center text-lg">Hello World</div> */}
      {/* <ThemeProvider theme={theme}>
      </ThemeProvider> */}
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <button
        className="bg-blue-500 text-white p-2"
        onClick={() => {
          console.log("Click");
          setShow(!show);
        }}
      >
        Primary button
      </button> */}
      {/* <Button secondary>Secondary button</Button> */}
      {/* <Card></Card> */}
      {/* <Photos></Photos> */}
      {/* <PhotoClone></PhotoClone> */}
      {/* <CounterUseCallback></CounterUseCallback> */}
      {/* <Photos2></Photos2> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackNews></HackNews> */}
      {/* <HackNewsReducer></HackNewsReducer> */}
      {/* <SimpleClock></SimpleClock> */}
      {/* <Input></Input> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <Counter></Counter> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Blog></Blog> */}
      {/* <BlogCustomHook></BlogCustomHook> */}
      {/* <DropdownCustomHook ></DropdownCustomHook> */}
      {/* <SidebarMenu show={show} ref={nodeRef}></SidebarMenu> */}
      {/* <Form></Form> */}
      {/* <Form2></Form2> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      <SignUpFormYup></SignUpFormYup>
    </div>
  );
}

export default App;
