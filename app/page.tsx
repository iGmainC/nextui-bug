'use client';
import { Button, Input, Spacer } from '@nextui-org/react';
import { useForm, type SubmitHandler } from 'react-hook-form';
type LoginFormInput = {
  name: string;
  password: string;
};
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<LoginFormInput>();
  return (
    <>
      <p>1. Press button to set the name to root</p>
      <p>2. The username input is set to root</p>
      <p>3. Move the mouse over the input box</p>
      <p>4. The value in the input box disappeared</p>
      <Spacer y={4} />

      <Button
        onClick={() => {
          setValue('name', 'root');
        }}
      >
        Press me to set the name to root
      </Button>
      <Spacer y={4} />

      <div className="w-64">
        <Input
          color={errors.name ? 'danger' : 'default'}
          label="Username"
          variant="bordered"
          type="text"
          placeholder="Please enter your name"
          tabIndex={-1}
          {...register('name', {
            required: 'This is a required field',
          })}
          description={errors.name?.message}
        />
        <Spacer y={4} />
        <Input
          color={errors.password ? 'danger' : 'default'}
          label="Password"
          variant="bordered"
          type="password"
          placeholder="Please enter your password"
          tabIndex={-1}
          {...register('password', {
            required: 'This is a required field',
          })}
          description={errors.password?.message}
        />
      </div>
    </>
  );
}
