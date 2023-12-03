import { Button, FormControl, FormLabel, Textarea, Typography } from "@mui/joy";
import { FC } from "react";

export const FormForGptV3_5Turbo: FC = () => {
  return (
    <div className="w-full max-w-md flex-col flex gap-2 flex-wrap border-2 border-gray-300 rounded-md p-4 justify-center m-4">
      <Typography level="h2">GPT-3 5 Turbo</Typography>
      <div className="flex flex-col gap-2 w-full">
        <FormControl>
          <FormLabel>Text prompt</FormLabel>
          <Textarea minRows={2} />
        </FormControl>
        <Button variant="outlined">Execute</Button>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <FormControl>
          <FormLabel>Answer</FormLabel>
          <Textarea minRows={6} disabled />
        </FormControl>
      </div>
    </div>
  );
};
