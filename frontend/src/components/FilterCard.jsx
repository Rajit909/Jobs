import { RadioGroup } from "@radix-ui/react-radio-group";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Noida",
      "Gurgaon",
      "Banglore",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Airlines/Aviation",
      "Banking",
      "Software It",
      "Financial Jobs",
      "HR",
    ],
  },

 
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue))
    console.log(selectedValue)
  }, [selectedValue]);
  return (
    <>
      <div className="w-full bg-white rounded-md">
        {/* <h1 className="font-bold text-lg">Filter Jobs</h1> */}
        <hr className=""/>
        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
          {
            filterData.map((data, index) => (
              <div>
                <h1 className="font-bold text-lg">{data.filterType}</h1>
                  {
                    data.array.map((item, idx) => {
                    const itemId = `id${index} - ${idx}`
                    return (
                      <div className="flex items-center space-x-2 my-2">
                        <RadioGroupItem value={item} id={itemId}/>
                        <Label htmlFor={itemId}>{item}</Label>
                      </div>
                    )
                  })
                }
               
              </div>
            ))
          }
        </RadioGroup>
      </div>
    </>
  );
};

export default FilterCard;
