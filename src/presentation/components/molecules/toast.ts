import { createStandaloneToast } from "@chakra-ui/react";

type Props = {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info";
  position: "top" | "bottom";
  duration: number;
  isClosable: boolean;
};

const { ToastContainer, toast } = createStandaloneToast();

export function toastHandler({ props }: { props: Props }) {
  toast({
    title: props.title,
    description: props.description,
    status: props.status,
    duration: props.duration,
    isClosable: props.isClosable,
  });
}
