import { forwardRef } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "react-feather";
import IconButton from "./IconButton";
import useToggle from "hooks/useToggle";

const PasswordInput = forwardRef(
  /**
   *
   * @param {import("./Input").InputProps} props
   */
  function PasswordInput(props, ref) {
    const [isVisible, toggleVisible] = useToggle();
    const Icon = isVisible ? EyeOff : Eye;
    return (
      <Input
        ref={ref}
        {...props}
        type={isVisible ? "text" : "password"}
        suffix={
          <IconButton type="button">
            <Icon width={20} height={20} onClick={toggleVisible} />
          </IconButton>
        }
      />
    );
  }
);

export default PasswordInput;
