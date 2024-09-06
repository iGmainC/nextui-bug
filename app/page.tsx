'use client';
import { Button, Input, Select, SelectItem, Spacer } from '@nextui-org/react';
import { set, useForm, type SubmitHandler } from 'react-hook-form';
export const animals = [
  { key: 'cat', label: 'Cat' },
  { key: 'dog', label: 'Dog' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' },
  { key: 'giraffe', label: 'Giraffe' },
  { key: 'dolphin', label: 'Dolphin' },
  { key: 'penguin', label: 'Penguin' },
  { key: 'zebra', label: 'Zebra' },
  { key: 'shark', label: 'Shark' },
  { key: 'whale', label: 'Whale' },
  { key: 'otter', label: 'Otter' },
  { key: 'crocodile', label: 'Crocodile' },
];
type FormInput = {
  animal: string;
};
export default function Home() {
  const { register, watch } = useForm<FormInput>();
  const { register: register2, watch: watch2, setValue: setValue2 } = useForm<FormInput>();
  return (
    <>
      <div className="p-8">
        <h1>1. The return value of the Select component: </h1>
        <div>
          <Select
            label="Select an animal"
            className="max-w-xs"
            selectionMode="multiple"
            {...register('animal', {
              required: 'This is required',
            })}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Spacer y={4} />
          <p className="font-bold">The value comes from useForm's watch.</p>
          <p>animal value: {`${watch('animal')}`}</p>
          <p>animal type: {typeof watch('animal') ?? ''}</p>
        </div>
        <br />
        <br />
        <br />
        <h1>2. Set the value to the Select component: </h1>
        <div>
          <Select
            label="Select an animal"
            className="max-w-xs"
            selectionMode="multiple"
            {...register2('animal', {
              required: 'This is required',
            })}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Spacer y={4} />
          <p>animal value: {`${watch2('animal')}`}</p>
          <p>animal type: {typeof watch2('animal') ?? ''}</p>
          <Button
            onClick={() => {
              setValue2('animal', 'dog,cat');
            }}
          >
            Set "dog,cat"
          </Button>
          <p>The Select component is not set to the corresponding state.</p>
        </div>
      </div>
    </>
  );
}
