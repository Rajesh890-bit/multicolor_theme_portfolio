import React from "react";
import heroimg from "../Assets/pexels-lukas-574073.jpg";
import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Image,
  Text,
  Grid,
} from "@chakra-ui/react";

import style from "./skills.module.css";

const Tech_Stack = [
  { img: "HTML.png", text: "HTML 5", w: "70px", w2: "40px" },

  { img: "CSS.png", text: "CSS 3", w: "80px", w2: "46px" },

  { img: "Javascript.png", text: "Javascript", w: "80px", w2: "46px" },

  { img: "Typescript.png", text: "Typescript", w: "111px", w2: "55px" },

  { img: "React.png", text: "React", w: "80px", w2: "40px" },

  { img: "react-router.png", text: "React Router", w: "121px", w2: "60px" },

  { img: "Redux.png", text: "Redux", w: "80px", w2: "40px" },

  { img: "Chakra ui.png", text: "Chakra UI", w: "80px", w2: "40px" },

  { img: "Node js.png", text: "Node JS", w: "80px", w2: "40px" },

  { img: "Mongo db.png", text: "Mongo DB", w: "80px", w2: "40px" },
];

const Skills = () => {
  return (
    <Box className="skillpagebackground">
      <Box
        border="2px solid rgb(1, 16, 27)"
        id="skills"
        w={"80%"}
        height={"auto"}
        margin={"auto"}
        p={"5rem"}
        bg="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(10px)"
      >
        <Heading mt="90px" color="sky" fontSize={"3rem"}>
          <Text as="span" color="red">
            My
          </Text>{" "}
          Skills
        </Heading>

        <SimpleGrid minChildWidth="5rem" gap={"5rem"} mt="3rem">
          {Tech_Stack.map((el, i) => {
            return (
              <GridItem
                key={Math.random()}
                className="skills-card"
                border="1px solid rgb(0, 255, 191)"
                borderRadius={"10px"}
                bg={"#410093"}
              >
                <Box
                  p="15px"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image
                    id={style[`animate${i}`]}
                    //   _hover={{ cursor: "pointer" }}
                    w={"5rem"}
                    className="skills-card-img"
                    src={el.img}
                  ></Image>
                </Box>

                <Text
                  fontSize={"1rem"}
                  // mb="10px"
                  color={"white"}
                  textAlign={"center"}
                  // className="skills-card-name"
                >
                  {el.text}
                </Text>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
