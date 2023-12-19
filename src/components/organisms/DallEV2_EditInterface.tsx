"use client";
import { ImageWrapper } from "@/components/molecules/ImageWrapper";
import {
  TextPromptFormInputs,
  TextPromptForm,
} from "@/components/molecules/TextPromptForm";
import { Typography } from "@mui/joy";
import { FC, useState } from "react";
import { SubmitHandler } from "react-hook-form";

export const DallE2EditInterface: FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<TextPromptFormInputs> = async (data) => {
    try {
      setIsExecuting(true);
      const response = await fetch("/api/open-ai/dall-e-v2/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setImageUrl(result.srcUrl);
    } catch (error) {
      console.error("Fetch error:", error);
      setImageUrl(null);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="w-full max-w-md flex-col flex gap-2 flex-wrap border-2 border-gray-300 rounded-md p-4 justify-start m-4">
      <Typography level="h2">Dall-E 2</Typography>
      <TextPromptForm onSubmit={onSubmit} isExecuting={isExecuting} />
      <ImageWrapper src={imageUrl} />
    </div>
  );
};
