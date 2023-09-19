import React, { FC, ReactNode } from 'react';
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

interface CardBodyProps extends BoxProps {
  variant: string;
  children?: ReactNode;
}

const CardBody: FC<CardBodyProps> = ({ variant, children, ...rest }) => {
  const styles = useStyleConfig("CardBody", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export default CardBody;
