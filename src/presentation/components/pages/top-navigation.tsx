import { Button, Center } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/top-nav.module.scss";

const TopNavigation = () => {
  return (
    <>
      <div className={styles.topNav}>
        <Center className={styles.gridButton}>
          <Button colorScheme="blue">Button</Button>
        </Center>
      </div>
    </>
  );
};

export default TopNavigation;
