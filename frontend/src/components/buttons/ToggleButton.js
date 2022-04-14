import React from "react";
import styled from "styled-components";

const ToggleButton = ({ click, checked }) => {
  return (
    <ToggleButtonStyled>
      <label>
        <input
          className="toggle-checkbox"
          type="checkbox"
          onClick={click}
        ></input>
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div
              className="iconify sun-icon"
              data-icon="feather-sun"
              data-inline="false"
            ></div>
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <div
              className="iconify moon-icon"
              data-icon="feather-moon"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>
    </ToggleButtonStyled>
  );
};

const ToggleButtonStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .toggle-checkbox {
    opacity: 0;
  }

  .toggle-slot {
    position: relative;
    cursor: pointer;
    height: 2em;
    width: 4em;
  }

  .toggle-button {
    //MOVES TOGGLEBUTTON SUN
    transform: translate(2em, 0.1em);
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 0.75em #ffffff;
  }

  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.75em #000000;
    //MOVES TOGGLEBUTTON NIGHT
    transform: translate(0.1em, 0.05em);
  }

  .sun-icon {
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    color: #ffffff;
  }

  .sun-icon-wrapper {
    position: absolute;
    height: 1.5em;
    width: 1.5em;
    opacity: 1;
    //MOVES SUN
    transform: translate(0.15em, 0.1em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 0;
    transform: translate(1em, 0.7em) rotate(0deg);
  }

  .moon-icon {
    position: absolute;
    height: 1.4em;
    width: 1.4em;
    color: #000000;
  }

  .moon-icon-wrapper {
    position: absolute;
    height: 1.4em;
    width: 1.4em;
    opacity: 0;
  }

  .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    //MOVES MOON
    transition: opacity 5ms;
    transform: translate(1.9em, 0.001em) rotate(-5deg);
  }
`;

export default ToggleButton;
