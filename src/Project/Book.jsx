import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Find.css";
const FindWork = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    height: "600px",
    width: "600px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition:
      "margin 0.3s, border-radius 0.3s, box-shadow 0.3s, border-color 0.3s",
    position: "relative", // Add this style for the hover effect to work properly
  };

  const handleButtonClick = (category) => {
    navigate(`/Book/${category}`);
  };

  return (
    <div>
      &emsp;&emsp; &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("sabanayagan")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAyLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380404-xltbhnjqyc-portrait.jpg")',
        }}
      >
        <h1>Sabanayagan</h1>
      </Button>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("devil")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICAxMS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00312544-utzpasftrb-portrait.jpg")',
        }}
      >
        <h1>Devil</h1>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("nandivarman")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAyMDkgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00381394-cmysqyplwz-portrait.jpg")',
        }}
      >
        <h1>NandhiVarman</h1>
      </Button>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("nehru")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMzYuNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379301-esmzjmyvaj-portrait.jpg")',
        }}
      >
        <h1>Nehru</h1>
      </Button>
      <br></br>
      <br></br>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("odavum")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxLjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00378435-vtzeanzyyd-portrait.jpg")',
        }}
      >
        <h1>Odavum Mudiyadhu Oliyavum Mudiyadhu</h1>
      </Button>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("doctor")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://igimages.gumlet.io/tamil/gallery/movies/doctor2020/poster.jpg?w=200&dpr=1.3")',
        }}
      >
        <h1>Doctor</h1>
      </Button>
      <br></br>
      <br></br>
      &emsp;&emsp; &emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("anbirkiniyaazh")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://igimages.gumlet.io/tamil/gallery/movies/anbirkiniyal2021/poster.jpg?w=200&dpr=1.3")',
        }}
      >
        <h1>Anbirkiniyaazh</h1>
      </Button>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("enemy")}
        variant="contained"
        CXS
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://igimages.gumlet.io/tamil/gallery/movies/enemy2021/poster.jpg?w=200&dpr=1.3")',
        }}
      >
        <h1>Enemy</h1>
      </Button>
      <br></br>
      <br></br>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("warrior")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://igimages.gumlet.io/tamil/gallery/movies/thewarriorr/poster.jpg?w=200&dpr=1.3")',
        }}
      >
        <h1>The Warrior</h1>
      </Button>
      &emsp;&emsp;&emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        b
        onClick={() => handleButtonClick("jaibim")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://igimages.gumlet.io/tamil/gallery/movies/jaibhim2021/poster.jpg?w=200&dpr=1.3")',
        }}
      >
        <h1>Jai Bhim</h1>
      </Button>
    </div>
  );
};

export default FindWork;
