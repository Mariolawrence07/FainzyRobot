import Input from "./Input";
import { Search } from "react-feather";
import { forwardRef } from "react";

const SearchInput = forwardRef(
  /**
   *
   * @param {import("./Input").InputProps} props
   * @param {any} ref
   */
  function SearchInput(props, ref) {
    return (
      <Input
        ref={ref}
        size="small"
        placeholder="Search"
        suffix={<Search width={16} height={16} />}
        {...props}
      />
    );
  }
);

export default SearchInput;
