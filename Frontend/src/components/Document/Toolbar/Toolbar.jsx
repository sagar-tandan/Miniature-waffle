import React, { useContext } from "react";
import MyContext from "../../../Context/MyContext";
import { Redo2, Undo2 } from "lucide-react";

//For ToolBarButtons
const ToolbarButton = ({ onClick, isActive, Icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`relative text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 group ${
        isActive && "bg-neutral-200/80"
      }`}
    >
      {/* Tooltip */}
      {/* <p
        className="absolute -bottom-6 bg-black text-white px-2 py-0.5 rounded-[4px] 
        opacity-0 group-hover:opacity-100 group-hover:visible 
        visibility-hidden transition-opacity delay-3000 duration-500 ease-in-out"
      >
        {label}
      </p> */}

      {/* Icon */}
      <Icon className="size-4" />
    </button>
  );
};

//Main Component Starts Here

const Toolbar = () => {
  const { editor } = useContext(MyContext);
  // console.log("Toolbar Editor : ", editor);

  const allIcons = [
    {
      label: "Undo",
      Icon: Undo2,
      onClick: () => editor?.chain().focus().undo().run(),
    },
    {
      label: "Redo",
      Icon: Redo2,
      onClick: () => editor?.chain().focus().redo().run(),
    },
  ];
  return (
    <div className="bg-[#f1f4f9] min-h-[40px] px-5 py-0.5 rounded-[24px] flex items-center gap-1">
      {allIcons.map((icons) => (
        <ToolbarButton key={icons.label} {...icons} />
      ))}
    </div>
  );
};

export default Toolbar;
