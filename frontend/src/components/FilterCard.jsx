import { RadioGroup } from "@radix-ui/react-radio-group";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Noida",
      "Gurgaon",
      "Banglore",
      "Pune",
      "Hyderabad",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Airlines/Aviation",
      "Banking",
      "Software It",
      "Civil JObs",
      "Financial Jobs",
      "Hospitality",
      "HR",
    ],
  },
  {
    filterType: "Job Type",
    array: ["Full Time", "Part Time", "Internship", "Freelance"],
  },
  {
    filterType: "Salary",
    array: [
      "0-20k",
      "20k-40k",
      "40k-60k",
      "60k-80k",
     
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
    // dispatch(setSearchedQuery(selectedValue))
  }, [selectedValue]);
  return (
    <>
      <div className="w-full bg-white p-3 rounded-md">
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        <hr className="mt-3"/>
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
