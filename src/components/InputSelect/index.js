import { css } from "@emotion/css";
import React, { useEffect, useRef, useState } from "react";
import Input from "../Input";

import * as S from "./styles";

import PropTypes from "prop-types";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function InputSelect({ options, onChange, width, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(props.value);

  const handleSelect = (option) => {
    setValue(option);
    setIsOpen(false);
  };
  const propWidth = { width: width };

  return (
    <S.SelectInput {...propWidth}>
      <Input
        disabled
        name={props.name}
        type="text"
        value={value || ""}
        rightIcon={
          <S.Icon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </S.Icon>
        }
        {...props}
      />

      <S.NativeSelect className={isOpen ? "open" : ""}>
        {options.map((value, id) => (
          <S.Option
            key={id}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(value);
            }}
          >
            {value}
          </S.Option>
        ))}
      </S.NativeSelect>
    </S.SelectInput>
  );
}

InputSelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string,
};

InputSelect.defaultProps = {
  placeholder: "Select",
  options: [],
  onChange: () => {},
  width: "fit-content",
};

export default InputSelect;
