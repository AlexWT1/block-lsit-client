import Image from "next/image";
import localFont from "next/font/local";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
  authControllerSignUp,
} from "@/shared/api/generated";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <div>
      <main>
        <UiHeader right={<div>{data?.email}</div>} />
        <UiButton variant="primary">Hey</UiButton>
        <UiButton variant="secondary">Hey</UiButton>
        <UiButton variant="outlined">Hey</UiButton>
        <UiButton disabled variant="primary">
          Hey
        </UiButton>

        <UiTextField
          label="Text field"
          inputProps={{ placeholder: "Enter email..." }}
        />
        <UiTextField
          error="Text field"
          inputProps={{ placeholder: "Enter email..." }}
        />
        <UiTextField inputProps={{ placeholder: "Enter email..." }} />
        <UiSelectField options={[{ value: "1", label: "option" }]} />
        <UiLink href={"/"}>Text</UiLink>
        <UiSpinner className={"text-teal-600 w-20 h-20"} />
        {/* <UiPageSpinner /> */}
      </main>
    </div>
  );
}
