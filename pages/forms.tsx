import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log("im valid bby");
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [emailError, setEmailError] = useState("");
  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmailError("");
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "" || email === "" || password === "") {
      setFormErrors("All fields are required");
    }
    if (!email.includes("@")) {
      setEmailError("email is required");
    }
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", {
          required: true,
        })}
        type='text'
        placeholder='Username'
      />
      <input
        {...register("email", { required: true })}
        type='email'
        placeholder='Email'
      />
      <input
        {...register("password", { required: true })}
        type='password'
        placeholder='Password'
      />
      <input type='submit' value='Create Account' />
    </form>
  );
}
