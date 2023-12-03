"use client";
import { Button, FormControl, FormLabel, Textarea, Typography } from "@mui/joy";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  textPrompt: string;
};

export const FormForGptV3_5Turbo: FC = () => {
  const { handleSubmit, control } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-full max-w-md flex-col flex gap-2 flex-wrap border-2 border-gray-300 rounded-md p-4 justify-center m-4">
      <Typography level="h2">GPT-3 5 Turbo</Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full"
      >
        <Controller
          name="textPrompt"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <FormLabel>Text prompt</FormLabel>
              <Textarea
                error={!!error}
                minRows={2}
                onChange={onChange}
                value={value}
              />
            </FormControl>
          )}
        />
        <Button variant="outlined" type="submit">
          Execute
        </Button>
      </form>
      <div className="flex flex-col gap-2 w-full">
        <FormControl>
          <FormLabel>Answer</FormLabel>
          <Textarea minRows={6} disabled />
        </FormControl>
      </div>
    </div>
  );
};
