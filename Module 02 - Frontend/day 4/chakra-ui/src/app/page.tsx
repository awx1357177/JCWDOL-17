/** @format */

import { Flex, Box, Button, Stack } from "@chakra-ui/react";
import { Button as Button2 } from "@/components/ui/button";

export default function Home() {
  return (
    <Stack bg={"black"} className="green">
      Hello
      <Box>
        <Button colorPalette={"teal"} variant={"outline"} size={"xl"}>
          Click me
        </Button>

        <Button2 bg={"blue"} loading>
          Click me
        </Button2>
      </Box>
      <Demo />
    </Stack>
  );
}

import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

const Demo = () => {
  return (
    <AccordionRoot collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value} color={"white"}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
];
