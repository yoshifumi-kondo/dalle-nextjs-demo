import { GptV3_5TurboInterface } from "@/components/organisms/GptV3_5TurboInterface";
import { FC } from "react";

export const HomeTemplate: FC = () => {
  return (
    <main className="flex h-screen w-screen justify-center items-center flex-wrap">
      <GptV3_5TurboInterface />
    </main>
  );
};
