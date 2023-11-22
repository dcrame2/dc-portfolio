import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { variables } from "@/styles/Variables";
import { pXSmall } from "@/styles/Type";
import { MediaQueries } from "@/styles/Utilities";

const ContactForm = styled.form`
  width: 50%;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 12px;
  @media ${MediaQueries.tablet} {
    width: 100%;
  }
`;

const InputStyles = css`
  padding: 15px;
  background-color: unset;

  border: 1px solid ${variables.color1};
  width: 100%;
  ${pXSmall}
`;

const Input = styled.input`
  ${InputStyles}
`;

const TextArea = styled.textarea`
  ${InputStyles}
  resize: none;
  min-height: 180px;

  @media ${MediaQueries.mobile} {
    min-height: 140px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: unset;
  background-color: ${variables.color1};

  cursor: pointer;
  transition: all ease-out 0.3s;
  margin-top: 8px;
  ${pXSmall}

  &:hover {
    background-color: ${variables.color2};
    /* scale: 1.1; */
  }
`;

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <ContactForm onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Name*" {...register("name", { required: true })} />
      {errors.email && <span>A name is required</span>}
      <Input
        placeholder="Email Address*"
        {...register("email", {
          required: true,
          pattern: /^[\w\.-]+@[\w\.-]+\.\w+$/,
        })}
      />
      {errors.email && <span>An email address is required</span>}
      <TextArea
        placeholder="Message*"
        {...register("message", {
          required: true,
        })}
      ></TextArea>
      {errors.message && <span>A message is required</span>}

      <SubmitButton disabled={false} type="submit">
        Submit
      </SubmitButton>
    </ContactForm>
  );
}

export default Form;
