import React, { FC, ReactNode } from 'react';
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

interface CardProps extends BoxProps {
  variant: string;
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ variant, children, ...rest }) => {
  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export default Card;
