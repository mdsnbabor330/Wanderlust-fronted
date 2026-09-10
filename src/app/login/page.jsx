"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function Login() {

    const handelSubmit= (e)=>{
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const login = Object.fromEntries(formdata.entries());
        console.log(login);
    }

  return (
    <div className=" w-150 my-30 max-w-120 mx-auto">
      <div className="text-center mb-5 space-y-3">
        <h1 className="font-bold text-5xl">Create Account</h1>
        <p className="text-gray-600">Start your adverture with Wanderlust</p>
      </div>
      <Form onSubmit={handelSubmit}
        className="flex flex-col gap-7 p-7 shadow border border-r-gray-100 rounded-2xl"
        render={(props) => <form {...props} data-custom="foo" />}
      >
        <h1 className="font-bold text-3xl">Log In</h1>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" className={"p-4"} />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" className={"p-4"} />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className={"font-bold"}>
            Log in
          </Button>
        </div>
        <hr />

        <Button
          type="submit"
          className={
            "font-bold bg-white border flex items-center gap-3 text-black w-full py-5"
          }
        >
          <FaGoogle />
          Sign Up With Google
        </Button>

        <p className="flex items-center mx-auto">
          Already have an account?{" "}
          <Link href={"/signup"} className="text-sky-600 font-bold">
            Sign Up
          </Link>
        </p>
      </Form>
    </div>
  );
}
