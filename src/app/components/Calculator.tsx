"use client";

import React from "react";
import { useState, ChangeEvent } from "react";
import {
  Card,
  CardFooter,
  CardContent,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Calculator = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result , setResult]=useState<string>("")

  const handleNum1 = (e:ChangeEvent<HTMLInputElement>):void=> {

     setNum1(e.target.value)


  };
    
  const handleNum2 = (e:ChangeEvent<HTMLInputElement>):void=> {
    setNum2(e.target.value)
  }


const handleAdd = ()=>{
 const add = parseFloat(num1) + parseFloat(num2)
 setResult(add.toString())
}

const handleDev = ()=>{
    if(parseFloat(num2)!==0){
        const dev = parseFloat(num1) / parseFloat(num2)
        setResult(dev.toString())
    }
    else{
        setResult("Error:can't multiplied by zero")
    }
    
}

const handleSub = ()=>{
    const sub = parseFloat(num1) - parseFloat(num2)
    setResult(sub.toString())
}


const handleMul= ()=>{
    const mul = parseFloat(num1)*parseFloat(num2)
    setResult(mul.toString())
}



const handleClear = ()=>{
    setNum2("")
    setNum1("")
    setResult("")
}




  return (
    <div className="bg-gray-200 h-screen w-full flex items-center justify-center">
      <Card className="w-[400px] h-[400px] p-5">
        <CardHeader>
          <CardTitle className="text-center text-4xl">Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-cols gap-4">
            <div>
              <Label htmlFor="num1" className="text-center ml-4 text-blue-600 text-base font-semibold">Number1</Label>
              <Input
                className="w-[150px] h-auto"
                id="num1"
                type="number"
                placeholder="Enter a number"
                value={num1}
                onChange={handleNum1}
              />
            </div>
            <div>
              <Label htmlFor="num2" className="text-center ml-4 text-blue-600 text-base font-semibold ">Number2</Label>

              <Input
                className="w-[150px] h-auto"
                id="num2"
                type="number"
                placeholder="Enter a number"
                value={num2}
                onChange={handleNum2}
              />
            </div>
          </div>

          <div className="flex flex-cols gap-3 items-center justify-center p-6">
            <Button className="bg-blue-700" onClick={handleAdd}>+</Button>
            <Button className="bg-blue-700" onClick={handleSub}>-</Button>
            <Button className="bg-blue-700" onClick={handleMul}>*</Button>
            <Button className="bg-blue-700" onClick={handleDev}>/</Button>
          </div>


<div className="flex items-center justify-center gap-5">

<Label htmlFor="result" className="text-center ml-4 text-blue-600 text-base font-semibold">Result</Label>

<Input
  className="w-[300px] h-auto "
  id="result"
  type="string"
  placeholder="0"
  value={result}
  readOnly
/>
</div>

<div className="flex justify-center items-center p-5">
    <Button className="bg-blue-700 w-80 rounded-xl"onClick={handleClear}>Clear</Button>
</div>



        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;
